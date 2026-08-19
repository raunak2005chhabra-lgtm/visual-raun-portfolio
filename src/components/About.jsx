import React, { useState, useEffect, useRef } from 'react';

export const About = ({ onCursorHover, onCursorLeave }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHeaderRevealed, setIsHeaderRevealed] = useState(false);
  const textColRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderRevealed(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (textColRef.current) {
      observer.observe(textColRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * 16;
    setMouseOffset({ x, y });
  };

  return (
    <section id="about" className="section-padding about-section" onMouseMove={handleMouseMove}>
      <div className="container">
        <div className="about-magazine-spread">
          {/* Large Photographic Portrait Column (55% width) */}
          <div className="about-portrait-stage">
            <div 
              className="portrait-canvas-wrapper"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px, 0)`
              }}
              onMouseEnter={() => onCursorHover('RAUNAK')}
              onMouseLeave={onCursorLeave}
            >
              <img
                src="/images/profile/profile.jpeg"
                alt="Raunak Cinematic Portrait"
                className="portrait-canvas-img"
              />
              <div className="portrait-cinematic-crop-line" />
              <div className="portrait-editorial-caption">
                <span>RAUNAK CHHABRA — BEHIND THE LENS</span>
              </div>
            </div>
          </div>

          {/* Overlapping Magazine Text Column */}
          <div className="about-editorial-text-col" ref={textColRef}>
            <div className={`section-tag cinematic-reveal-text ${isHeaderRevealed ? 'is-revealed' : ''}`}>
              THE STORY
            </div>
            
            <h2 className={`about-magazine-title cinematic-reveal-text reveal-stagger ${isHeaderRevealed ? 'is-revealed' : ''}`}>
              HEY, I'M{" "}
              <span className="heading-orange-highlight">
                RAUNAK
              </span>
            </h2>

            <div className="about-narrative-paragraphs">
              <p className="narrative-lead">
                I'm a Visual Storyteller, Video Editor, Videographer and Photographer focused on creating cinematic, story-driven content.
              </p>

              <p>
                I work across video editing, cinematography, social-first content, photography, and color — combining creative storytelling with experience across <span className="text-accent">10+ clients</span> and an understanding of what makes content work for brands and creators.
              </p>

              <p>
                From shooting and shaping footage to building the final visual experience, I like being involved in the process rather than just sitting behind the timeline.
              </p>

              <p className="narrative-impact-line">
                I'm here to make things that look good, feel intentional, and actually make people <span className="font-serif-italic text-accent">stop scrolling.</span>
              </p>
            </div>

            {/* Editorial Focus Highlights */}
            <div className="about-editorial-meta-row">
              <div className="editorial-meta-item">
                <span className="meta-item-label">FOCUS</span>
                <span className="meta-item-value">Editing &amp; Cinematography</span>
              </div>
              <div className="editorial-meta-item">
                <span className="meta-item-label">TOOLS</span>
                <span className="meta-item-value">Adobe Premiere Pro / After Effects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
