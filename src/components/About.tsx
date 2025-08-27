import React from 'react';
import { useExperience } from '../hooks/useExperience';

const About: React.FC = () => {
     // Calculate experience from joining date using dynamic hook
     const experienceData = useExperience(new Date('2025-05-19'));

     return (
          <section id="about" className="about-me">
               <h2>About Me</h2>
               <div className="about-container">
                    <div className="about-content">
                         <div className="about-text">
                              <p className="about-intro">
                                   I'm a passionate and hands-on <strong>Software Engineer</strong> with a focus on building scalable 
                                   and impactful digital solutions. Currently, I work at Reliablesoft, where I'm contributing to the 
                                   backend development of enterprise-grade platforms using cutting-edge technologies.
                              </p>

                              <p className="about-highlight">
                                   My expertise spans across <span className="tech-highlight">NestJS</span>, 
                                   <span className="tech-highlight"> PostgreSQL</span>, and 
                                   <span className="tech-highlight"> Microservices Architecture</span>, allowing me to architect 
                                   robust and maintainable systems that drive business value.
                              </p>

                              <p className="about-project">
                                   Beyond my professional role, I led the development of <strong>NGO Saathi</strong> as part of an 
                                   academic project — a comprehensive fullstack platform built collaboratively to support NGOs in 
                                   streamlining their operations. I was responsible for both backend and frontend development, team 
                                   coordination, and key architectural decisions.
                              </p>

                              <p className="about-growth">
                                   I'm continuously expanding my expertise in <strong>DevOps</strong>, including CI/CD pipelines, 
                                   containerization, and cloud infrastructure, to evolve into a more complete fullstack developer 
                                   ready for complex, multi-faceted challenges.
                              </p>
                         </div>

                         <div className="about-visual">
                              <div className="about-icon">
                                   {/* Custom animated SVG representing coding and development */}
                                   <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        {/* Gradient definitions for visual effects */}
                                        <defs>
                                             <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                  <stop offset="0%" style={{ stopColor: "var(--accent-dark)", stopOpacity: 1 }} />
                                                  <stop offset="100%" style={{ stopColor: "var(--accent-light)", stopOpacity: 0.8 }} />
                                             </linearGradient>
                                             <filter id="softGlow">
                                                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                                  <feMerge>
                                                       <feMergeNode in="coloredBlur" />
                                                       <feMergeNode in="SourceGraphic" />
                                                  </feMerge>
                                             </filter>
                                        </defs>

                                        {/* Background circle with subtle animation */}
                                        <circle cx="60" cy="60" r="55" fill="var(--surface-dark)" stroke="var(--border-dark)"
                                             strokeWidth="2">
                                             <animate attributeName="r" values="55;58;55" dur="4s" repeatCount="indefinite" />
                                        </circle>

                                        {/* Code brackets with gradient */}
                                        <path d="M35 35 L25 45 L25 75 L35 85" stroke="url(#codeGrad)" strokeWidth="3" fill="none"
                                             strokeLinecap="round">
                                             <animate attributeName="stroke-width" values="3;4;3" dur="3s"
                                                  repeatCount="indefinite" />
                                        </path>

                                        <path d="M85 35 L95 45 L95 75 L85 85" stroke="url(#codeGrad)" strokeWidth="3" fill="none"
                                             strokeLinecap="round">
                                             <animate attributeName="stroke-width" values="3;4;3" dur="3s"
                                                  repeatCount="indefinite" />
                                        </path>

                                        {/* Code lines inside */}
                                        <line x1="40" y1="50" x2="70" y2="50" stroke="var(--accent-dark)" strokeWidth="2"
                                             strokeLinecap="round" opacity="0.8">
                                             <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s"
                                                  repeatCount="indefinite" />
                                        </line>

                                        <line x1="45" y1="60" x2="80" y2="60" stroke="var(--accent-light)" strokeWidth="2"
                                             strokeLinecap="round" opacity="0.6">
                                             <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s"
                                                  repeatCount="indefinite" />
                                        </line>

                                        <line x1="40" y1="70" x2="75" y2="70" stroke="var(--primary-light)" strokeWidth="2"
                                             strokeLinecap="round" opacity="0.7">
                                             <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s"
                                                  repeatCount="indefinite" />
                                        </line>

                                        {/* Central cursor/caret */}
                                        <rect x="58" y="48" width="2" height="24" fill="var(--accent-dark)"
                                             filter="url(#softGlow)">
                                             <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
                                        </rect>
                                   </svg>
                              </div>

                              <div className="about-stats">
                                   <div className="stat-item">
                                        <div className="stat-number" id="experienceYears">{experienceData.experienceText}</div>
                                        <div className="stat-label" id="experienceLabel">{experienceData.experienceLabel}</div>
                                   </div>
                                   <div className="stat-item">
                                        <div className="stat-number">15+</div>
                                        <div className="stat-label">Technologies</div>
                                   </div>
                                   <div className="stat-item">
                                        <div className="stat-number">20+</div>
                                        <div className="stat-label">Projects Completed</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default About;
