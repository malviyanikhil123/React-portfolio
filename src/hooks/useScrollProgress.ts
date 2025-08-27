import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
     const [progress, setProgress] = useState(0);

     useEffect(() => {
          const updateProgress = () => {
               const scrollTop = window.pageYOffset;
               const docHeight = document.documentElement.scrollHeight - window.innerHeight;
               const scrollPercent = (scrollTop / docHeight) * 100;
               setProgress(Math.min(scrollPercent, 100));
          };

          const handleScroll = () => {
               requestAnimationFrame(updateProgress);
          };

          window.addEventListener('scroll', handleScroll, { passive: true });
          updateProgress(); // Initial calculation

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     return progress;
};
