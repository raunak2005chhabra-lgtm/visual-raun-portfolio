import React, { useState, useEffect, useRef } from 'react';

export const ProjectCard = ({ project, onClick, onCursorHover, onCursorLeave }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const videoSrc = project.localVideo || project.videoUrl;

  // IntersectionObserver to automatically play video when visible in viewport and pause when offscreen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current.play().catch(() => { });
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Ensure video plays continuously whenever visible or media source updates
  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, [isVisible, videoSrc]);

  // Subtle scroll parallax for media INSIDE fixed 16:9 or 9:16 frame (3-8px)
  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate relative position within viewport (-1 to 1)
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const relativeOffset = (elementCenter - viewportCenter) / windowHeight;

      // Restrained parallax shift (max ~6px)
      const shift = Math.max(-6, Math.min(6, relativeOffset * 12));
      setParallaxY(shift);
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Hover ONLY provides subtle visual feedback; video continues playing uninterrupted
  const handleMouseEnter = () => {
    setIsHovered(true);
    onCursorHover(videoSrc ? 'WATCH' : 'VIEW');
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onCursorLeave();
    // Do NOT pause video on mouse leave - video continues playing while visible in viewport!
  };

  const posterSrc = project.localThumbnail || project.thumbnail;
  const isInstagramCategory = project.category === "INSTAGRAM ADS / SHORT-FORM CONTENT" || (project.category && project.category.includes("INSTAGRAM ADS"));
  const isInstagramLandscape = isInstagramCategory && (project.isLandscape || project.aspectRatio === "16/9");
  const isVertical = isInstagramCategory && !isInstagramLandscape;

  return (
    <article
      ref={cardRef}
      className={`uniform-project-card ${isVertical ? 'is-vertical-reel' : ''} ${isInstagramLandscape ? 'is-instagram-landscape-card' : ''} ${isVisible ? 'card-in-view' : ''} ${isHovered ? 'hovered' : ''}`}
      onClick={() => onClick(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`uniform-media-frame ${isVertical ? 'frame-aspect-vertical' : 'frame-aspect-landscape'}`}>
        {/* Poster Backdrop Image */}
        <img
          src={posterSrc}
          alt={project.title}
          onError={(e) => {
            if (e.target.src !== project.thumbnail) {
              e.target.src = project.thumbnail;
            }
          }}
          className={`uniform-poster-img ${isHovered ? 'img-scaled' : ''}`}
          style={{
            transform: `translate3d(0, ${parallaxY}px, 0) ${isHovered ? 'scale(1.05)' : 'scale(1.02)'}`,
            transition: 'transform 0.3s ease-out'
          }}
          loading="lazy"
        />

        {/* Autoplaying Muted Loop Video - Always playing while visible in viewport */}
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => {
              if (isVisible && videoRef.current) {
                videoRef.current.play().catch(() => { });
              }
            }}
            className={`uniform-video-preview ${isHovered ? 'video-active' : ''}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 1,
              pointerEvents: 'none',
              transform: `translate3d(0, ${parallaxY}px, 0) ${isHovered ? 'scale(1.05)' : 'scale(1.02)'}`,
              transition: 'transform 0.3s ease-out'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}

        {/* Hover Media Overlay */}
        <div className="uniform-hover-overlay" />

        {/* Category Pill Tag */}
        <div className="uniform-category-tag">
          <span>{project.category}</span>
        </div>
      </div>

      {/* Minimal Editorial Metadata */}
      <div className="uniform-meta">
        <div className="uniform-title-row">
          <h3 className="uniform-title">
            {project.title}
          </h3>
          <span className="uniform-arrow">→</span>
        </div>
        {project.subtitle && <p className="uniform-subtitle">{project.subtitle}</p>}
      </div>
    </article>
  );
};
