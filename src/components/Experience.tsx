import React from 'react';
import { useExperience } from '../hooks/useExperience';

const Experience: React.FC = () => {
     // Calculate experience from joining date using dynamic hook
     const experienceData = useExperience(new Date('2025-05-19'));

     return (
          <section id="experience" className="experience">
               <h2>Experience</h2>
               <p className="experience-intro">
                    My professional journey in <strong>software engineering</strong>, building scalable solutions
                    and driving technological innovation.
               </p>
               <p className="experience-subtitle">
                    From enterprise-grade platforms to collaborative team leadership, here's how I've contributed
                    to meaningful digital transformation.
               </p>

               <div className="exp-cards">
                    <div className="exp-card-modern">
                         <h3>Software Engineer</h3>
                         <div className="company-name">Reliablesoft (Trusted Management Solutions), India</div>
                         <div className="duration">May 2025 - Present · {experienceData.fullText}</div>

                         <p>
                              Working on the backend development of automation and workflow products tailored for enterprise 
                              use cases, ensuring scalability and performance.
                         </p>

                         <ul className="experience-points">
                              <li>
                                   <strong>Current Project - New Product Development:</strong> Building robust and scalable APIs 
                                   and modular services using <em>NestJS</em>, <em>TypeORM</em>, and <em>PostgreSQL</em> under a 
                                   comprehensive microservices architecture
                              </li>
                              <li>
                                   <strong>First Project - SSL Payment Gateway Integration:</strong> Successfully integrated  
                                   <em> SSL Commerz</em> (Payment Gateway which is used in Bangladesh) for secure transaction processing, developing 
                                   complete payment flow from frontend to backend
                              </li>
                              <li>
                                   <strong>Team Collaboration:</strong> Collaborated closely with frontend teams and QA engineers 
                                   to ensure smooth feature delivery, optimal performance tuning, and seamless user experiences
                              </li>
                         </ul>

                         <hr />

                         <div className="tags">
                              <span>NestJS</span>
                              <span>TypeScript</span>
                              <span>PostgreSQL</span>
                              <span>Microservices</span>
                              <span>TypeORM</span>
                              <span>Node.js</span>
                              <span>Express</span>
                              <span>React</span>
                              <span>SSL Commerz</span>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Experience;
