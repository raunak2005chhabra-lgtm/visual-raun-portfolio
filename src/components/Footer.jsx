import React from 'react';
import { CONTACT_INFO } from '../data/experience';
import { ArrowUp } from 'lucide-react';

export const Footer = ({ onCursorHover, onCursorLeave }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <h3 className="footer-logo">RAUNAK CHHABRA</h3>
            <p className="footer-roles">
              VIDEO EDITOR &bull; VIDEOGRAPHER &bull; PHOTOGRAPHER
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social-links">
            <a 
              href={CONTACT_INFO.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              onMouseEnter={() => onCursorHover('EMAIL')}
              onMouseLeave={onCursorLeave}
              onClick={(e) => {
                e.preventDefault();
                const win = window.open(CONTACT_INFO.gmailComposeUrl, '_blank');
                if (!win) window.location.href = CONTACT_INFO.mailtoUrl;
              }}
            >
              Email
            </a>
            <a 
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              onMouseEnter={() => onCursorHover('CHAT')}
              onMouseLeave={onCursorLeave}
            >
              WhatsApp
            </a>
            <a 
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              onMouseEnter={() => onCursorHover('INSTAGRAM')}
              onMouseLeave={onCursorLeave}
            >
              Instagram
            </a>
            <a 
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              onMouseEnter={() => onCursorHover('LINKEDIN')}
              onMouseLeave={onCursorLeave}
            >
              LinkedIn
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
            onMouseEnter={() => onCursorHover('TOP ↑')}
            onMouseLeave={onCursorLeave}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="editorial-line" />

        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; 2026 Raunak Chhabra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
