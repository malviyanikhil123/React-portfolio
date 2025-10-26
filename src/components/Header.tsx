import React from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollDirection } from '../hooks/useScrollDirection';
import MobileNavMenu from './MobileNavMenu';
import type { NavigationItem } from '../types';

const navigationItems: NavigationItem[] = [
     { id: 'about', label: 'About', href: '#about' },
     { id: 'experience', label: 'Experience', href: '#experience' },
     { id: 'projects', label: 'Projects', href: '#projects' },
     { id: 'skills', label: 'Skills', href: '#skills' },
     { id: 'contact', label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
     const { activeSection, scrollToSection } = useActiveSection();
     const scrollDirection = useScrollDirection();

     const handleNavClick = (sectionId: string) => {
          scrollToSection(sectionId);
     };

     const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
     };

     return (
          <>
               <header className={`${scrollDirection === 'down' ? 'header-hidden' : 'header-visible'}`}>
                    <div className="logo" style={{ cursor: 'pointer' }} onClick={scrollToTop}>
                         <img
                              src="/logo/dark-mode-logo.png"
                              alt="Nikhil Malviya Logo - Personal Signature"
                              style={{ height: '120px', verticalAlign: 'middle' }}
                         />
                    </div>

                    <nav>
                         {navigationItems.map((item) => {
                              // Only show active state if we're in a navigation section (not hero)
                              const isActive = activeSection === item.id && activeSection !== 'hero';

                              return (
                                   <a
                                        key={item.id}
                                        href={item.href}
                                        className={`nav-link ${isActive ? 'active' : ''}`}
                                        onClick={(e) => {
                                             e.preventDefault();
                                             handleNavClick(item.id);
                                        }}
                                   >
                                        {item.label}
                                   </a>
                              );
                         })}
                    </nav>
               </header>

               {/* Mobile Logo */}
               <div className="mobile-controls">
                    <div className="test">
                         <div className="mobile-logo" onClick={scrollToTop}>
                              <img
                                   src="/logo/dark-mode-logo.png"
                                   alt="Nikhil Malviya"
                              />
                         </div>
                    </div>
               </div>

               {/* Mobile Navigation Menu - Always visible on mobile */}
               <MobileNavMenu scrollDirection={scrollDirection} />
          </>
     );
};

export default Header;
