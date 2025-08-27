import React, { useState, useEffect } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

interface MobileNavMenuProps {
  scrollDirection: 'up' | 'down' | null;
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ scrollDirection }) => {
  const { activeSection, scrollToSection } = useActiveSection();
  const [showPortfolioMenu, setShowPortfolioMenu] = useState(false);

  // Hide submenu when scrolling down
  useEffect(() => {
    if (scrollDirection === 'down') {
      setShowPortfolioMenu(false);
    }
  }, [scrollDirection]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setShowPortfolioMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowPortfolioMenu(false);
  };

  const togglePortfolioMenu = () => {
    setShowPortfolioMenu(!showPortfolioMenu);
  };

  const isPortfolioActive = activeSection === 'experience' || activeSection === 'projects' || activeSection === 'skills';

  return (
    <>
      {/* Portfolio Submenu */}
      {showPortfolioMenu && (
        <>
          <div 
            className="portfolio-submenu-backdrop" 
            onClick={() => setShowPortfolioMenu(false)}
          />
          <div className="portfolio-submenu portfolio-submenu-visible">
            <div className="portfolio-submenu-container">
            <button 
              className={`portfolio-submenu-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => handleNavClick('experience')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              <span>Experience</span>
            </button>
            <button 
              className={`portfolio-submenu-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Projects</span>
            </button>
            <button 
              className={`portfolio-submenu-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => handleNavClick('skills')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
              <span>Skills</span>
            </button>
            </div>
          </div>
        </>
      )}

      <div className={`mobile-nav-menu ${scrollDirection === 'down' ? 'mobile-nav-hidden' : 'mobile-nav-visible'}`}>
        <div className="mobile-nav-container">
          {/* Home */}
          <button 
            className={`mobile-nav-item ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={scrollToTop}
            aria-label="Home"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
          </button>

          {/* About */}
          <button 
            className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
            aria-label="About"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </button>

          {/* Contact */}
          <button 
            className={`mobile-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
            aria-label="Contact"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </button>

          {/* Portfolio */}
          <button 
            className={`mobile-nav-item portfolio-toggle ${isPortfolioActive || showPortfolioMenu ? 'active' : ''}`}
            onClick={togglePortfolioMenu}
            aria-label="Portfolio"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <div className={`portfolio-indicator ${showPortfolioMenu ? 'open' : ''}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="18,15 12,9 6,15"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNavMenu;