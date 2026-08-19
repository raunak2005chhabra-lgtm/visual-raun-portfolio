import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

export const Hero = ({ onCursorHover, onCursorLeave }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Clean Looping Typewriter effect for Hero Name "RAUNAK"
  const fullName = "RAUNAK";
  const [displayedName, setDisplayedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayedName.length < fullName.length) {
      // Type next character
      timer = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length + 1));
      }, 110);
    } else if (!isDeleting && displayedName.length === fullName.length) {
      // Pause at full word before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1300);
    } else if (isDeleting && displayedName.length > 0) {
      // Delete previous character
      timer = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length - 1));
      }, 90);
    } else if (isDeleting && displayedName.length === 0) {
      // Pause at empty before re-typing
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [displayedName, isDeleting]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Subtle, restrained parallax shift (-12px to 12px)
    const x = (clientX / innerWidth - 0.5) * 24;
    const y = (clientY / innerHeight - 0.5) * 24;
    setMouseOffset({ x, y });
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      {/* Background Media Canvas Frame */}
      <div
        className="hero-media-backdrop"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0) scale(1.05)`
        }}
      >
        <div
          className="hero-cinematic-media-container"
          onMouseEnter={() => onCursorHover('WATCH REEL')}
          onMouseLeave={onCursorLeave}
        >
          {/* Main Video Reel */}
          <video
            ref={videoRef}
            src="/videos/hero/hero.mp4"
            poster="/images/hero/hero.svg"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className="hero-video-element"
          />

          {/* Static Fallback Image if Video isn't present or loading */}
          <img
            src="/images/hero/hero.svg"
            alt="Raunak Cinematic Reel"
            className={`hero-image-fallback ${videoLoaded ? 'hidden-fallback' : ''}`}
          />

          {/* Subtle Media Gradient Fade */}
          <div className="hero-media-gradient-overlay" />
        </div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge animate-fade-in">
            <span className="hero-badge-dot" />
            <span>AVAILABLE FOR FREELANCE PROJECTS</span>
          </div>

          {/* Typewriter Hero Headline */}
          <h1
            className="hero-title"
            onMouseEnter={() => onCursorHover('EXPLORE')}
            onMouseLeave={onCursorLeave}
          >
            <span className="hero-typewriter-wrapper">
              {displayedName}
              <span className="hero-typewriter-cursor" aria-hidden="true">|</span>
            </span>
          </h1>

          {/* Roles */}
          <div className="hero-roles">
            <span className="role-tag">VIDEO EDITOR</span>
            <span className="role-slash">/</span>
            <span className="role-tag">CINEMATOGRAPHER</span>
            <span className="role-slash">/</span>
            <span className="role-tag">PHOTOGRAPHER</span>
            <span className="role-slash">/</span>
            <span className="role-tag">VISUAL STORYTELLER</span>
          </div>

          {/* Accent Line */}
          <div className="hero-orange-line" />

          {/* Supporting Copy */}
          <p className="hero-description">
            I create cinematic content, social-first visuals, and visual stories for brands and creators.
          </p>

          {/* Hero CTAs */}
          <div className="hero-ctas">
            <a
              href="#work"
              className="btn-primary"
              onMouseEnter={() => onCursorHover('VIEW WORK')}
              onMouseLeave={onCursorLeave}
            >
              EXPLORE WORK
              <span className="btn-arrow">→</span>
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onMouseEnter={() => onCursorHover("LET'S TALK →")}
              onMouseLeave={onCursorLeave}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
