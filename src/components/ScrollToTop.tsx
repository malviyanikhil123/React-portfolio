import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTop.css';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    // Add a temporary class to the body for nice transition
    document.body.classList.add('scrolling-top');

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Remove the class after animation completes
    setTimeout(() => {
      document.body.classList.remove('scrolling-top');
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Only render on desktop view (handled via CSS)
  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''} dark-theme`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="16 12 12 8 8 12" />
        <line x1="12" y1="16" x2="12" y2="8" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
