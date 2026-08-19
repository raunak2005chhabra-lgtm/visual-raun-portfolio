import React, { useState, useEffect, useRef } from 'react';
import { CONTACT_INFO } from '../data/experience';
import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Contact = ({ onCursorHover, onCursorLeave }) => {
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

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-cinematic-wrapper" ref={headerRef}>
          <div className={`section-tag cinematic-reveal-text ${isHeaderRevealed ? 'is-revealed' : ''}`}>
            GET IN TOUCH
          </div>
          
          <h2 className={`contact-mega-headline cinematic-reveal-text reveal-stagger ${isHeaderRevealed ? 'is-revealed' : ''}`}>
            <span className="contact-headline-line">
              HAVE A{" "}
              <span className="heading-orange-highlight heading-highlight-sans">
                PROJECT?
              </span>
            </span>
            <a 
              href={CONTACT_INFO.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-headline-cta text-accent"
              onMouseEnter={() => onCursorHover("LET'S TALK →")}
              onMouseLeave={onCursorLeave}
              onClick={(e) => {
                e.preventDefault();
                const win = window.open(CONTACT_INFO.gmailComposeUrl, '_blank');
                if (!win) window.location.href = CONTACT_INFO.mailtoUrl;
              }}
            >
              LET'S TALK <span className="arrow-inline">→</span>
            </a>
          </h2>

          <p className="contact-editorial-sub">
            Available for freelance video editing, cinematography, brand reels, and creative direction worldwide.
          </p>

          {/* Minimal Direct Channels Grid */}
          <div className="contact-channels-grid">
            {/* Email */}
            <a
              href={CONTACT_INFO.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
              onMouseEnter={() => onCursorHover('WRITE')}
              onMouseLeave={onCursorLeave}
              onClick={(e) => {
                e.preventDefault();
                const win = window.open(CONTACT_INFO.gmailComposeUrl, '_blank');
                if (!win) window.location.href = CONTACT_INFO.mailtoUrl;
              }}
            >
              <div className="channel-icon-wrapper">
                <Mail size={22} />
              </div>
              <div className="channel-meta">
                <span className="channel-label">EMAIL</span>
                <span className="channel-value">{CONTACT_INFO.email}</span>
              </div>
              <ArrowUpRight size={18} className="channel-arrow" />
            </a>

            {/* WhatsApp */}
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
              onMouseEnter={() => onCursorHover('CHAT')}
              onMouseLeave={onCursorLeave}
            >
              <div className="channel-icon-wrapper">
                <MessageSquare size={22} />
              </div>
              <div className="channel-meta">
                <span className="channel-label">WHATSAPP</span>
                <span className="channel-value">{CONTACT_INFO.whatsappDisplay}</span>
              </div>
              <ArrowUpRight size={18} className="channel-arrow" />
            </a>

            {/* Instagram */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
              onMouseEnter={() => onCursorHover('INSTAGRAM')}
              onMouseLeave={onCursorLeave}
            >
              <div className="channel-icon-wrapper">
                <InstagramIcon size={22} />
              </div>
              <div className="channel-meta">
                <span className="channel-label">INSTAGRAM</span>
                <span className="channel-value">{CONTACT_INFO.instagram}</span>
              </div>
              <ArrowUpRight size={18} className="channel-arrow" />
            </a>

            {/* LinkedIn */}
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
              onMouseEnter={() => onCursorHover('LINKEDIN')}
              onMouseLeave={onCursorLeave}
            >
              <div className="channel-icon-wrapper">
                <LinkedinIcon size={22} />
              </div>
              <div className="channel-meta">
                <span className="channel-label">LINKEDIN</span>
                <span className="channel-value">{CONTACT_INFO.linkedin}</span>
              </div>
              <ArrowUpRight size={18} className="channel-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
