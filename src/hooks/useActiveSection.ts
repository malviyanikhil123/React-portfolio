import { useState, useEffect } from 'react';

export const useActiveSection = () => {
     const [activeSection, setActiveSection] = useState('hero'); // Default to hero section

     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              setActiveSection(entry.target.id);
                         }
                    });
               },
               {
                    threshold: 0.1,
                    rootMargin: '-20% 0px -20% 0px',
               }
          );

          // Handle scroll to top - set hero as active when at the very top
          const handleScroll = () => {
               if (window.scrollY < 100) {
                    setActiveSection('hero');
                    return;
               }

               // Manual section detection as fallback
               const sections = document.querySelectorAll('section[id]');
               const scrollPosition = window.scrollY + window.innerHeight / 3;

               for (let i = sections.length - 1; i >= 0; i--) {
                    const section = sections[i] as HTMLElement;
                    const sectionTop = section.offsetTop;
                    
                    if (scrollPosition >= sectionTop) {
                         setActiveSection(section.id);
                         break;
                    }
               }
          };

          const sections = document.querySelectorAll('section[id]');
          sections.forEach((section) => observer.observe(section));
          
          window.addEventListener('scroll', handleScroll, { passive: true });

          return () => {
               sections.forEach((section) => observer.unobserve(section));
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const scrollToSection = (sectionId: string) => {
          const element = document.getElementById(sectionId);
          if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
               // Force set active section after scrolling
               setTimeout(() => {
                    setActiveSection(sectionId);
               }, 100);
          }
     };

     return { activeSection, scrollToSection };
};
