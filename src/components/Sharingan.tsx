"use client";

import React, { useEffect, useRef, useState } from "react";

/* ═══════════════ CONSTANTS & UTILS ═══════════════ */
// const MAIN_COUNT = 71;
const EYE_COUNT = 51;
const MINIMUM_LOAD_DURATION_MS = 1200; // Ensures the preloader doesn't flash too fast on cached loads

const pad = (n: number) => String(n).padStart(3, "0");

const lerp = (start: number, end: number, t: number) =>
  start * (1 - t) + end * t;
const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(max, val));

/* fade in over [a,b], hold, fade out over [c,d] */
// const window4 = (p: number, a: number, b: number, c: number, d: number) =>
//   p < a || p > d
//     ? 0
//     : p < b
//       ? (p - a) / (b - a)
//       : p > c
//         ? 1 - (p - c) / (d - c)
//         : 1;

const GAZE_LUT = [
  { f: 5, cx: 613.4 }, // far left
  { f: 4, cx: 622.5 },
  { f: 3, cx: 631.3 },
  { f: 2, cx: 645.2 },
  { f: 1, cx: 652.4 }, // centre
  { f: 28, cx: 652.5 },
  { f: 29, cx: 663.4 },
  { f: 30, cx: 671.4 },
  { f: 31, cx: 672.7 }, // far right
].map((o) => ({ idx: o.f - 1, cx: o.cx }));

/* Utility to draw image covering the canvas (like CSS object-fit: cover) */
const drawCover = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number,
  zoom: number = 1,
) => {
  if (!img || !img.complete || img.naturalWidth === 0) return false;
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const ctxRatio = cw / ch;
  let w, h, x, y;

  if (ctxRatio > imgRatio) {
    w = cw * zoom;
    h = (cw / imgRatio) * zoom;
  } else {
    h = ch * zoom;
    w = ch * imgRatio * zoom;
  }
  x = (cw - w) / 2;
  y = (ch - h) / 2;

  ctx.drawImage(img, x, y, w, h);
  return true;
};

/* ═══════════════ COMPONENT ═══════════════ */
/**
 * Preloader Component
 * Handles the initial visual loading state of the application, seamlessly hooking into
 * the application's loading progress and orchestrating a smooth fade-out exit sequence.
 */
interface PreloaderProps {
  progress: number;
  isReady: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ progress, isReady }) => {
  // Retains the component in the DOM momentarily after completion for CSS transitions
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (isReady) {
      const cleanupTimer = setTimeout(() => setIsMounted(false), 1000);
      return () => clearTimeout(cleanupTimer);
    }
  }, [isReady]);

  if (!isMounted) return null;

  const formattedProgress = Math.round(progress).toString().padStart(2, "0");

  return (
    <div
      className={`loader ${isReady ? "loader--complete" : "loader--active"}`}
      id="loader"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        opacity: isReady ? 0 : 1,
        pointerEvents: isReady ? "none" : "all",
        transition: "opacity 0.8s cubic-bezier(0.65, 0, 0.35, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
      aria-live="polite"
      aria-busy={!isReady}
    >
      <div className="loader__inner">
        <div className="loader__glyph">写輪眼</div>

        <div
          className="loader__bar"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span
            id="loaderFill"
            style={{
              width: `${progress}%`,
              display: "block",
              height: "100%",
              transition: "width 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        <div className="loader__meta">
          <span>起動中 / INITIALIZING</span>
          <span id="loaderPct" style={{ fontVariantNumeric: "tabular-nums" }}>
            {formattedProgress}
          </span>
        </div>
      </div>
    </div>
  );
};

const Sharingan = () => {
  // --- UI State ---
  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // --- DOM Refs ---
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLDivElement>(null);

  // --- Data Refs (Keeps data persistent without triggering re-renders) ---
  // const mainFramesRef = useRef<HTMLImageElement[]>([]);
  const eyeFramesRef = useRef<HTMLImageElement[]>([]);

  const animState = useRef({
    mx: 0.5,
    my: 0.5,
    ex: 0.5,
    ey: 0.5,
    gazePos: (GAZE_LUT.length - 1) / 2,
    eyeLastKey: "",
  });

  /* ───────────────────────── PRELOADER EFFECT ───────────────────────── */
  useEffect(() => {
    let loadedCount = 0;
    const totalJobs = EYE_COUNT; // Expanded scope could re-include MAIN_COUNT if needed
    const loadStartTime = Date.now();

    const loadImg = (
      src: string,
      bucket: HTMLImageElement[],
      index: number,
    ): Promise<void> => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";

        const finalize = () => {
          bucket[index] = img;
          loadedCount++;
          // Ensure we don't exceed 100 on edge cases, map percentage smoothly
          setLoadProgress(Math.min((loadedCount / totalJobs) * 100, 100));
          resolve();
        };

        img.onload = finalize;
        img.onerror = finalize; // Graceful degradation on failed frames
        img.src = src;
      });
    };

    const jobs: Promise<void>[] = [];
    // Initiate main frame loads
    // for (let i = 1; i <= MAIN_COUNT; i++) {
    //   jobs.push(loadImg(`/frames/main/${pad(i)}.jpg`, mainFramesRef.current, i - 1));
    // }
    // Initiate eye frame loads
    for (let i = 1; i <= EYE_COUNT; i++) {
      jobs.push(
        loadImg(`/frames/eyes/${pad(i)}.jpg`, eyeFramesRef.current, i - 1),
      );
    }

    Promise.all(jobs).then(() => {
      // Calculate elapsed time to enforce a minimum aesthetic loading duration
      const elapsed = Date.now() - loadStartTime;
      const remainingTime = Math.max(0, MINIMUM_LOAD_DURATION_MS - elapsed);

      setTimeout(() => setIsReady(true), remainingTime + 420);
    });
  }, []);

  /* ───────────────────────── ANIMATION EFFECT ───────────────────────── */
  useEffect(() => {
    // Only run animation if images have finished loading
    if (!isReady) return;

    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const flare = flareRef.current;
    const readout = readoutRef.current;

    if (!canvas || !section || !flare || !readout) return;

    const eyeCtx = canvas.getContext("2d");
    if (!eyeCtx) return;

    let animationFrameId: number;

    // Handle canvas resizing
    const resizeCanvas = () => {
      // Use devicePixelRatio for sharp rendering on retina screens
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      eyeCtx.scale(dpr, dpr);
      animState.current.eyeLastKey = ""; // Force a redraw on resize
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initial size

    // Track mouse position across the whole window
    const handlePointerMove = (e: PointerEvent) => {
      animState.current.mx = e.clientX / window.innerWidth;
      animState.current.my = e.clientY / window.innerHeight;
    };

    window.addEventListener("pointermove", handlePointerMove);

    // The Animation Loop
    const renderLoop = () => {
      const state = animState.current;

      state.ex = lerp(state.ex, state.mx, 0.075);
      state.ey = lerp(state.ey, state.my, 0.075);

      const eyeRect = section.getBoundingClientRect();
      const eyeVisible = eyeRect.top < window.innerHeight && eyeRect.bottom > 0;

      if (eyeVisible) {
        state.gazePos = lerp(
          state.gazePos,
          state.ex * (GAZE_LUT.length - 1),
          0.13,
        );
        const g = clamp(state.gazePos, 0, GAZE_LUT.length - 1);
        const i0 = Math.floor(g);
        const i1 = Math.min(i0 + 1, GAZE_LUT.length - 1);
        const t = g - i0;
        const key = `${i0}|${t.toFixed(2)}`;

        if (key !== state.eyeLastKey) {
          const w = canvas.offsetWidth;
          const h = canvas.offsetHeight;
          eyeCtx.clearRect(0, 0, w, h);

          eyeCtx.globalAlpha = 1;
          const img0 = eyeFramesRef.current[GAZE_LUT[i0].idx];
          const img1 = eyeFramesRef.current[GAZE_LUT[i1].idx];

          const okA = drawCover(eyeCtx, img0, w, h, 1.18);

          if (t > 0.01 && i1 !== i0 && img1) {
            eyeCtx.globalAlpha = t;
            drawCover(eyeCtx, img1, w, h, 1.18);
            eyeCtx.globalAlpha = 1;
          }

          if (okA) state.eyeLastKey = key;
        }

        // Fast DOM manipulation
        flare.style.setProperty("--mx", `${(state.ex * 100).toFixed(1)}%`);
        flare.style.setProperty("--my", `${(state.ey * 100).toFixed(1)}%`);

        const axis = (state.ex - 0.5) * 200;
        const dir = axis < -8 ? "左" : axis > 8 ? "右" : "中";

        readout.textContent = `視線 ${dir} ${Math.abs(axis).toFixed(1).padStart(4, "0")} / FRAME ${String(
          GAZE_LUT[Math.round(g)].idx + 1,
        ).padStart(2, "0")}`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    // Cleanup
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isReady]); // Depend on isReady so the loop starts after loading

  // --- Hover Handlers ---
  const handlePointerEnter = () =>
    document.getElementById("cursor")?.classList.add("hot");
  const handlePointerLeave = () =>
    document.getElementById("cursor")?.classList.remove("hot");

  return (
    <>
      {/* React-controlled Loader overlay */}
      <Preloader progress={loadProgress} isReady={isReady} />

      {/* Main Component */}
      <section
        ref={sectionRef}
        className={`eyes transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"}`}
        id="eyes"
      >
        <div
          className="eyes__sticky relative w-full h-screen"
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          {/* Ensure canvas scales to CSS width/height via absolute positioning */}
          <canvas
            ref={canvasRef}
            id="eyeCanvas"
            className="absolute inset-0 w-full h-full"
          />
          <div ref={flareRef} className="eyes__flare" id="eyeFlare"></div>

          <div className="eyes__frame">
            <div className="eyes__label eyes__label--tl">万華鏡写輪眼</div>
            <div className="eyes__label eyes__label--tr">
              MANGEKYŌ · LIVE TRACK
            </div>
            <div
              ref={readoutRef}
              className="eyes__label eyes__label--bl"
              id="eyeReadout"
            >
              視線 左 00.0 / FRAME 00
            </div>
            <div className="eyes__label eyes__label--br">
              動かせ · MOVE YOUR CURSOR
            </div>
          </div>

          <div className="eyes__copy">
            <h2>
              見つめ<span>返せ</span>
            </h2>
            <p>
              彼はあなたを見ている。 — Wake up to reality. Nothing ever goes as
              planned in this world.
            </p>
            <p className="eyes__note">
              瞳孔追尾 · Time doesn’t heal anything, it just teaches us how to
              live with pain.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sharingan;
