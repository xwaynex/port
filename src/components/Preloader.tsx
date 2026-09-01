import React from "react";

const Preloader = () => {
  return (
    <div className="loader" id="loader">
      <div className="loader__inner">
        <div className="loader__glyph">写輪眼</div>
        <div className="loader__bar">
          <span id="loaderFill"></span>
        </div>
        <div className="loader__meta">
          <span>起動中 / INITIALIZING</span>
          <span id="loaderPct">00</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
