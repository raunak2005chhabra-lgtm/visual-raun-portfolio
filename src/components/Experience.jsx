import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCE_ENTRIES } from '../data/experience';

export const Experience = ({ onCursorHover, onCursorLeave }) => {
  const [isHeaderRevealed, setIsHeaderRevealed] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderRevealed(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderHighlightedText = (text, phrases = []) => {
    if (!phrases || phrases.length === 0) return text;

    const pattern = new RegExp(`(${phrases.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(pattern);

    return parts.map((part, i) => {
      const isHighlighted = phrases.some(p => p.toLowerCase() === part.toLowerCase());
      return isHighlighted ? (
        <span key={i} className="text-accent">
          {part}
        </span>
      ) : (
        part
      );
    });
  };

  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        <div ref={headerRef}>
          <div className={`section-tag cinematic-reveal-text ${isHeaderRevealed ? 'is-revealed' : ''}`}>
            CREDIBILITY
          </div>
          <h2 className={`section-title cinematic-reveal-text reveal-stagger ${isHeaderRevealed ? 'is-revealed' : ''}`}>
            <span className="heading-orange-highlight">
              EXPERIENCE
            </span>
          </h2>
        </div>
        <p className="section-subtitle">
          Selected brand partnerships, creative leadership, and ongoing editing roles.
        </p>

        {/* Borderless Editorial Experience List */}
        <div className="experience-editorial-list">
          {EXPERIENCE_ENTRIES.map((item) => (
            <div 
              key={item.id}
              className="exp-editorial-row"
              onMouseEnter={() => onCursorHover('VIEW')}
              onMouseLeave={onCursorLeave}
            >
              <div className="exp-left-col">
                <h3 className="exp-company-name">{item.company}</h3>
                <span className="exp-role-title">{item.role}</span>
              </div>

              <div className="exp-center-col">
                <p className="exp-desc-text">{renderHighlightedText(item.description, item.accentPhrases)}</p>
                <div className="exp-pills-row">
                  {item.highlights.map((tag, idx) => (
                    <span key={idx} className="exp-tag-pill">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="exp-right-col">
                <span className="exp-date-period">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
