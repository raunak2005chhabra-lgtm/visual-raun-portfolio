import React from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle-icon">
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </span>
      <span className="theme-toggle-text">
        {theme === 'dark' ? 'LIGHT' : 'DARK'}
      </span>
    </button>
  );
};
