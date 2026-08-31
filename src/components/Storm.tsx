"use client";

import React, { useEffect, useRef } from "react";

const STRIKE_GAP = 500; // ms between flickers within a strike
const STRIKE_EVERY = [3200, 7000]; // ms between strikes (random in range)

const Storm = () => {
  const flashRef = useRef<HTMLDivElement>(null);
  const boltRef = useRef<SVGSVGElement>(null);
  const boltPathRef = useRef<SVGPathElement>(null);
  const boltGlowRef = useRef<SVGPathElement>(null);
  const stormTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const flicker = (el: HTMLElement | SVGElement, opacity: number, duration: number) => {
      // Use Web Animations API for temporary visual states (avoids React re-renders)
      el.animate(
        [
          { opacity: 0 },
          { opacity, offset: 0.1 },
          { opacity: 0, offset: 0.8 },
          { opacity: 0 }
        ],
        { duration, easing: "ease-out" }
      );
    };

    const makeBolt = () => {
      // Procedurally generate a jagged SVG lightning bolt path
      const startX = 200 + Math.random() * 600; // start between x=200 and x=800
      let d = `M ${startX} 0 `;
      let currentX = startX;
      let currentY = 0;

      while (currentY < 1000) {
        currentX += (Math.random() - 0.5) * 150;
        currentY += 40 + Math.random() * 100;
        d += `L ${currentX} ${currentY} `;
      }
      return { d, x: startX / 1000 };
    };

    const playThunder = (power: number) => {
      // Browsers require user interaction before playing audio. 
      // This is a basic Web Audio API synth for a thunder rumble.
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        if (ctx.state === "suspended") return; // Audio blocked until user clicks somewhere

        const bufferSize = ctx.sampleRate * 2; // 2 seconds of noise
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * power;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(400, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 2);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(power * 0.5, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
      } catch (e) {
        // Silently fail if audio API is unsupported/blocked
      }
    };

    const strike = () => {
      if (!flashRef.current || !boltRef.current || !boltPathRef.current || !boltGlowRef.current) return;

      const heavy = Math.random() < 0.55; 
      const power = heavy ? 1 : 0.55 + Math.random() * 0.25;

      if (heavy) {
        const b = makeBolt();
        boltPathRef.current.setAttribute("d", b.d);
        boltGlowRef.current.setAttribute("d", b.d);
        flashRef.current.style.setProperty("--bx", `${(b.x * 100).toFixed(0)}%`);
        flicker(boltRef.current, 1, 190);
      } else {
        flashRef.current.style.setProperty("--bx", `${(15 + Math.random() * 70).toFixed(0)}%`);
      }

      flicker(flashRef.current, heavy ? 0.9 : 0.42, heavy ? 380 : 300);

      const beats = heavy ? 1 + Math.floor(Math.random() * 2) : 1;
      for (let i = 1; i <= beats; i++) {
        setTimeout(() => {
          if (!flashRef.current || !boltRef.current) return;
          flicker(flashRef.current, (heavy ? 0.7 : 0.3) * (1 - i * 0.2), 260);
          if (heavy && i === 1) flicker(boltRef.current, 0.75, 140);
        }, STRIKE_GAP * i);
      }

      setTimeout(() => playThunder(power), heavy ? 260 : 620);

      const [lo, hi] = STRIKE_EVERY;
      stormTimer.current = setTimeout(strike, lo + Math.random() * (hi - lo));
    };

    // Kick off the initial storm timer
    stormTimer.current = setTimeout(strike, 1800);

    // Cleanup interval on unmount
    return () => {
      if (stormTimer.current) clearTimeout(stormTimer.current);
    };
  }, []);

  return (
    <div className="storm" aria-hidden="true">
      <div className="storm__flash" ref={flashRef}></div>
      <svg
        className="storm__bolt"
        ref={boltRef}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          ref={boltPathRef}
          d=""
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          ref={boltGlowRef}
          d=""
          fill="none"
          stroke="#9fd8ff"
          strokeWidth="9"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity=".45"
        />
      </svg>
    </div>
  );
};

export default Storm;