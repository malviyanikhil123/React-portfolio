import React, { useEffect, useRef } from 'react';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
     const scrollerRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          const addScrollingAnimation = () => {
               const scroller = scrollerRef.current;
               if (!scroller) return;

               // Check if user prefers reduced motion
               if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    return;
               }

               scroller.setAttribute('data-animated', 'true');

               const scrollerInner = scroller.querySelector('.scroller__inner') as HTMLElement;
               if (!scrollerInner) return;

               const scrollerContent = Array.from(scrollerInner.children);

               // Duplicate content for infinite scroll effect
               scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute('aria-hidden', 'true');
                    scrollerInner.appendChild(duplicatedItem);
               });
          };

          addScrollingAnimation();
     }, []);

     return (
          <section id="skills" className="skills">
               <h2>My Skills</h2>
               <p className="skills-intro">
                    A comprehensive toolkit of modern technologies and methodologies that power my development journey
               </p>

               <div
                    className="scroller"
                    data-speed="slow"
                    ref={scrollerRef}
               >
                    <ul className="tag-list scroller__inner">
                         {skillsData.map((skill, index) => (
                              <li key={`${skill.name}-${index}`} title={skill.title}>
                                   <img
                                        src={skill.icon}
                                        alt={skill.title}
                                        loading="lazy"
                                        onError={(e) => {
                                             // Fallback for missing images
                                             console.warn(`Failed to load skill icon: ${skill.icon}`);
                                             e.currentTarget.style.display = 'none';
                                        }}
                                   />
                              </li>
                         ))}
                    </ul>
               </div>
          </section>
     );
};

export default Skills;
