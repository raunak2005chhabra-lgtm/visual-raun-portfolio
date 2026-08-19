import React from 'react';
import { CATEGORIES } from '../data/projects';

export const ProjectFilter = ({ activeCategory, onSelectCategory, onCursorHover, onCursorLeave }) => {
  return (
    <div className="project-filter-wrapper">
      <div className="filter-list">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`filter-btn ${isActive ? 'active' : ''}`}
              onMouseEnter={() => onCursorHover('FILTER')}
              onMouseLeave={onCursorLeave}
            >
              {cat.label}
              {isActive && <span className="filter-active-bar" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
