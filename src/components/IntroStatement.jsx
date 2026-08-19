import React from 'react';

export const IntroStatement = () => {
  return (
    <section id="intro" className="intro-section section-padding">
      <div className="container">
        <div className="intro-editorial-wrapper">
          <div className="section-tag">PHILOSOPHY & APPROACH</div>

          {/* Large Editorial Headline */}
          <h2 className="intro-headline">
            <span className="intro-line">I FRAME.</span>
            <span className="intro-line">I CUT.</span>
            <span className="intro-line">
              I CREATE <span className="heading-orange-highlight heading-highlight-sans">VISUALS</span> THAT <span className="font-serif-italic text-accent">STAY WITH YOU.</span>
            </span>
          </h2>

          <div className="editorial-line" />

          {/* Descriptive Copy */}
          <div className="intro-body-grid">
            <div className="intro-body-col-left">
              <p className="intro-lead-text">
                Visual storytelling is not just about cuts and color presets. It's about rhythm, intention, and framing every second to command attention.
              </p>
            </div>
            <div className="intro-body-col-right">
              <p className="intro-sub-text">
                I work across editing, cinematography, photography, and content — shaping every frame with intention, from the first shot to the final cut.
              </p>
            </div>
          </div>
        </div>

        {/* Cinematic Camera Viewfinder Stats Stage */}
        <div className="viewfinder-stats-stage">
          {/* Top Horizontal Guide Line with Center Focus Dot */}
          <div className="viewfinder-line-top">
            <span className="viewfinder-center-dot" />
          </div>

          {/* Focus Frame Corner Brackets */}
          <div className="viewfinder-bracket bracket-tl" />
          <div className="viewfinder-bracket bracket-tr" />
          <div className="viewfinder-bracket bracket-bl" />
          <div className="viewfinder-bracket bracket-br" />

          {/* Stats Content */}
          <div className="viewfinder-stats-content">
            <div className="viewfinder-stat-row">
              <span className="stat-num">50+</span>
              <span className="stat-label">CONTENT PIECES DELIVERED</span>
            </div>
          </div>

          {/* Bottom Horizontal Guide Line with Center Focus Dot */}
          <div className="viewfinder-line-bottom">
            <span className="viewfinder-center-dot" />
          </div>
        </div>
      </div>
    </section>
  );
};
