import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset || window.scrollY;

      // Don't hide header/nav when at the very top
      if (scrollY < 10) {
        setScrollDirection(null);
        setLastScrollY(scrollY);
        return;
      }

      const direction = scrollY > lastScrollY ? 'down' : 'up';

      // Adjust threshold for mobile devices - smaller threshold for better responsiveness
      const isMobile = window.innerWidth <= 600;
      const threshold = isMobile ? 3 : 5;

      // Only update if scroll difference is significant enough
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > threshold) {
        setScrollDirection(direction);
      }

      setLastScrollY(scrollY);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollDirection);
    };

    // Use passive listener for better mobile performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection, lastScrollY]);

  return scrollDirection;
};