import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const ProjectModal = ({ project, onClose, onCursorHover, onCursorLeave }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-category-badge">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            onMouseEnter={() => onCursorHover('CLOSE')}
            onMouseLeave={onCursorLeave}
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Player Container */}
        <div className="modal-player-container">
          {(project.localVideo || project.videoUrl) ? (
            <video
              src={project.localVideo || project.videoUrl}
              controls
              autoPlay
              className="modal-video-player"
              poster={project.localThumbnail || project.thumbnail}
            />
          ) : (
            <img src={project.localThumbnail || project.thumbnail} alt={project.title} className="modal-fallback-image" />
          )}
        </div>

        {/* About This Project Description */}
        <div className="modal-description-col">
          <h4 className="modal-subheading">ABOUT THIS PROJECT</h4>
          <p className="modal-description-text">{project.description}</p>
        </div>
      </div>
    </div>
  );
};
