import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroStatement } from './components/IntroStatement';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import './styles/main.css';

export function App() {
  // Theme state with localStorage persistence & system preference check
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('raunak_portfolio_theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Custom Cursor state
  const [cursorState, setCursorState] = useState({ active: false, text: '' });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('raunak_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      });
    } else {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }
  };

  const handleCursorHover = (text = 'VIEW') => {
    setCursorState({ active: true, text });
  };

  const handleCursorLeave = () => {
    setCursorState({ active: false, text: '' });
  };

  // Sparse Page-Level Orange Grid Intersection Points (Matching 54px Grid Lines)
  const documentGridDots = [
    // Outer Left Margin
    { top: '216px', left: '54px' },
    { top: '1296px', left: '54px' },
    { top: '2592px', left: '108px' },
    { top: '4104px', left: '54px' },
    { top: '5616px', left: '108px' },

    // Outer Right Margin
    { top: '324px', right: '54px' },
    { top: '1620px', right: '108px' },
    { top: '3024px', right: '54px' },
    { top: '4536px', right: '108px' },
    { top: '6048px', right: '54px' },

    // Top Outer Center Margin
    { top: '54px', left: '50%' }
  ];

  return (
    <div className="portfolio-app-root">
      {/* Global Natural Document Canvas Background Grid Layer (z-index: 0) */}
      <div className="global-grid-environment" aria-hidden="true">
        <div className="grid-lines-layer" />
        <div className="grid-radial-glow-left" />
        <div className="grid-radial-glow-right" />

        {/* Sparse Glowing Orange Grid Intersections with Rich Radial Halos */}
        {documentGridDots.map((pos, idx) => (
          <div
            key={idx}
            className="grid-intersection-point"
            style={pos}
          />
        ))}
      </div>

      {/* Film Grain Texture Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Global Interactive Custom Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Navigation Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onCursorHover={handleCursorHover}
        onCursorLeave={handleCursorLeave}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onCursorHover={handleCursorHover}
          onCursorLeave={handleCursorLeave}
        />

        <IntroStatement />

        <SelectedWork
          onCursorHover={handleCursorHover}
          onCursorLeave={handleCursorLeave}
        />

        <Services
          onCursorHover={handleCursorHover}
          onCursorLeave={handleCursorLeave}
        />

        <About
          onCursorHover={handleCursorHover}
          onCursorLeave={handleCursorLeave}
        />

        <Experience
          onCursorHover={handleCursorHover}
          onCursorLeave={handleCursorLeave}
        />

        <Contact
          onCursorHover={handleCursorHover}
          onCursorLeave={handleCursorLeave}
        />
      </main>

      {/* Footer */}
      <Footer
        onCursorHover={handleCursorHover}
        onCursorLeave={handleCursorLeave}
      />
    </div>
  );
}

export default App;
