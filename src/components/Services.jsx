import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../data/services';
import { ArrowUpRight } from 'lucide-react';

export const Services = ({ onCursorHover, onCursorLeave }) => {
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

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactWrapper = document.querySelector('#contact .contact-cinematic-wrapper') || document.getElementById('contact');
    if (contactWrapper) {
      const navOffset = 35;
      const elementPosition = contactWrapper.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="services-horizontal-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="services-header-row mb-12" ref={headerRef}>
          <div>
            <div className={`section-tag cinematic-reveal-text ${isHeaderRevealed ? 'is-revealed' : ''}`}>
              SERVICES
            </div>
            <h2 className={`section-title cinematic-reveal-text reveal-stagger ${isHeaderRevealed ? 'is-revealed' : ''}`}>
              WHAT I CAN DO FOR{" "}
              <span className="heading-orange-highlight">
                YOU
              </span>
            </h2>
          </div>
          <p className="section-subtitle mb-0 max-w-md">
            Custom creative solutions tailored for brands, directors, and agencies.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div 
          className="services-grid-row"
          onMouseLeave={() => onCursorLeave && onCursorLeave()}
        >
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="service-horizontal-card"
              onClick={scrollToContact}
              onMouseEnter={() => onCursorHover && onCursorHover("LET'S TALK →")}
            >
              {/* Background Media Canvas Stage */}
              <div className="card-bg-media-stage">
                {service.localVideo && (
                  <video
                    src={service.localVideo}
                    poster={service.localMedia || service.previewImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="card-media-video"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
                <img
                  src={service.localMedia || service.previewImage}
                  alt={service.title}
                  className="card-media-img"
                  loading="lazy"
                />
                <div className="card-media-overlay" />
              </div>

              {/* Card Main Content Layout */}
              <div className="card-content-wrapper">
                {/* Top Header Row: Number & Tag */}
                <div className="card-top-header">
                  <span className="card-number">{service.number}</span>
                  <span className="card-tag">/ {service.tag}</span>
                </div>

                {/* Title & Description Alignment Zones */}
                <div className="card-middle-body">
                  <div className="card-title-zone">
                    <h3 className="card-title">{service.title}</h3>
                  </div>
                  <div className="card-description-zone">
                    <p className="card-description">{service.description}</p>
                  </div>
                </div>

                {/* Bottom Footer Row: Detail Pills & Arrow Icon */}
                <div className="card-bottom-footer">
                  <div className="card-pills-row">
                    {service.details.slice(0, 2).map((detail, idx) => (
                      <span key={idx} className="card-pill">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <div className="card-arrow-icon">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Subtle Accent Top Line */}
              <div className="card-top-accent-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
