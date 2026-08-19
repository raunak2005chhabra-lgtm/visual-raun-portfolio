import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, CATEGORIES } from '../data/projects';
import { ProjectFilter } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const SelectedWork = ({ onCursorHover, onCursorLeave }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
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

  // Group categories for separated content dividers
  const workCategories = CATEGORIES.filter(c => c.id !== 'ALL');

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    if (catId !== 'ALL') {
      const sectionEl = document.getElementById(`cat-section-${catId.replace(/\s+/g, '-').toLowerCase()}`);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="work" className="section-padding work-section">
      <div className="container">
        {/* Section Header */}
        <div className="work-header-row" ref={headerRef}>
          <div>
            <div className={`section-tag cinematic-reveal-text ${isHeaderRevealed ? 'is-revealed' : ''}`}>
              CURATED VISUAL ARCHIVE
            </div>
            <h2 className={`section-title cinematic-reveal-text reveal-stagger ${isHeaderRevealed ? 'is-revealed' : ''}`}>
              SELECTED{" "}
              <span className="heading-orange-highlight">
                WORK
              </span>
            </h2>
            <p className="section-subtitle">
              Commercial edits, social-first campaign reels, cinematic narratives, and brand stories.
            </p>
          </div>
        </div>

        {/* Filter / Quick Jump Bar */}
        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          onCursorHover={onCursorHover}
          onCursorLeave={onCursorLeave}
        />

        {/* Visual Archive Grouped By Category Separators */}
        <div className="work-categories-archive">
          {workCategories.map((category) => {
            // Filter projects belonging to this category
            const categoryProjects = PROJECTS.filter(
              (p) => p.category === category.id || p.category.includes(category.id)
            );

            if (activeCategory !== 'ALL' && activeCategory !== category.id) {
              return null; // When filtering specific category
            }

            if (categoryProjects.length === 0) return null;

            const isCinematics = category.id === 'CINEMATICS';
            const isInstagramAds = category.id === 'INSTAGRAM ADS / SHORT-FORM CONTENT';

            return (
              <div 
                key={category.id} 
                id={`cat-section-${category.id.replace(/\s+/g, '-').toLowerCase()}`}
                className={`category-archive-group ${isCinematics ? 'cinematics-archive-group' : ''}`}
              >
                {/* Minimal Editorial Category Separator */}
                <div className="category-editorial-separator">
                  <div className="separator-line-left" />
                  <div className="separator-label-box">
                    <span className="separator-orange-dot" />
                    <span className="separator-category-title">{category.label}</span>
                    <span className="separator-orange-dot" />
                  </div>
                  <div className="separator-line-right" />
                </div>

                {/* Uniform Equal-Sized Project Grid */}
                <div className={`uniform-work-grid ${isCinematics ? 'cinematics-work-grid' : ''} ${isInstagramAds ? 'instagram-ads-work-grid' : ''}`}>
                  {categoryProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={setSelectedProject}
                      onCursorHover={onCursorHover}
                      onCursorLeave={onCursorLeave}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Lightbox Player */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onCursorHover={onCursorHover}
            onCursorLeave={onCursorLeave}
          />
        )}
      </div>
    </section>
  );
};
