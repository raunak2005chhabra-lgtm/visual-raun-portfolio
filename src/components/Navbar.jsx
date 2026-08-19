import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ theme, toggleTheme, onCursorHover, onCursorLeave }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section scroll tracking
      const sections = ['work', 'services', 'about', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#work', label: 'WORK', id: 'work' },
    { href: '#services', label: 'SERVICES', id: 'services' },
    { href: '#about', label: 'ABOUT', id: 'about' },
    { href: '#experience', label: 'EXPERIENCE', id: 'experience' },
    { href: '#contact', label: 'CONTACT', id: 'contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Brand Logo / Name */}
        <a 
          href="#" 
          className="nav-logo"
          onMouseEnter={() => onCursorHover('OPEN →')}
          onMouseLeave={onCursorLeave}
        >
          <span className="logo-text">
            VISUAL <span className="text-accent">RAUN</span>
          </span>
          <span className="logo-role-tag">VISUAL STORYTELLER</span>
        </a>

        {/* Center Editorial Breathing Line */}
        <div className="nav-center-divider" />

        {/* Desktop Navigation Links */}
        <nav className="nav-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onMouseEnter={() => onCursorHover('OPEN →')}
              onMouseLeave={onCursorLeave}
            >
              {link.label}
              {activeSection === link.id && <span className="active-dot" />}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>

        {/* Mobile Toggle Button */}
        <div className="mobile-nav-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay animate-fade-in">
          <nav className="mobile-menu-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
