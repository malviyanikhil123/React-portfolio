import React, { useState } from 'react';

interface Project {
     id: string;
     title: string;
     description: string;
     tags: string[];
     category: 'Frontend' | 'Backend' | 'Full Stack';
     githubUrl?: string;
     liveUrl?: string;
}

// Sample projects data - you can move this to a separate data file
const projectsData: Project[] = [
     {
          id: '1',
          title: 'NGO Saathi',
          description: 'Developed a centralized SaaS platform enabling NGOs to connect with donors, volunteers, and communities. Implemented role-based dashboards, real-time analytics, in-app chat, and full-featured NGO panels for managing donations, inventory, events, and volunteer coordination.',
          tags: ['Node.js', 'React', 'MongoDB', 'Express', 'Socket.IO', 'JWT', 'Tailwind CSS'],
          category: 'Full Stack',
          githubUrl: 'https://github.com/malviyanikhil123'
     },
     {
          id: '2',
          title: 'BizFlow',
          description: 'Created a customizable workflow automation tool combining CRM, task tracking, and invoicing modules. Implemented drag-and-drop workflow builder, lead management, notifications, and automated invoicing with email integration.',
          tags: ['REST API', 'React', 'Socket.IO', 'Node.js'],
          category: 'Full Stack',
          githubUrl: 'https://github.com/malviyanikhil123'
     },
     {
          id: '3',
          title: 'RemoteCollab',
          description: 'Built a Slack-like collaboration tool with messaging, task management, and file sharing. Implemented real-time chat, Kanban boards, notifications, and presence indicators with dark mode support.',
          tags: ['Socket.IO', 'Firebase', 'Cloudinary', 'Redis', 'React', 'Node.js'],
          category: 'Full Stack',
          githubUrl: 'https://github.com/malviyanikhil123'
     },
     {
          id: '4',
          title: 'Smart Learning Hub',
          description: 'Developed an online learning platform featuring course enrollment, quizzes, certifications, and gamification. Included an admin panel for content management and Stripe integration for monetization.',
          tags: ['JWT', 'Stripe', 'PDFKit', 'Node.js', 'React'],
          category: 'Full Stack',
          githubUrl: 'https://github.com/malviyanikhil123'
     },
     {
          id: '5',
          title: 'Click&Cart',
          description: 'Created a scalable e-commerce platform with role-based dashboards for admins, sellers, and customers. Implemented Razorpay integration, real-time order tracking, invoice downloads, and product management.',
          tags: ['MERN Stack', 'Razorpay', 'Cloudinary', 'Tailwind CSS', 'JWT', 'Node.js', 'React'],
          category: 'Full Stack',
          githubUrl: 'https://github.com/malviyanikhil123'
     },
     {
          id: '6',
          title: 'Personal Portfolio Website',
          description: 'This very website! A responsive and modern portfolio showcasing skills, projects, and professional experience.',
          tags: ['HTML', 'CSS', 'JavaScript'],
          category: 'Frontend',
          githubUrl: 'https://github.com/malviyanikhil123',
     }
];

const Projects: React.FC = () => {
     const [activeFilter, setActiveFilter] = useState<string>('All');
     const [currentPage, setCurrentPage] = useState(1);
     const projectsPerPage = 6;

     const filters = ['All', 'Frontend', 'Backend', 'Full Stack'];

     const filteredProjects = projectsData.filter(project =>
          activeFilter === 'All' || project.category === activeFilter
     );

     const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
     const startIndex = (currentPage - 1) * projectsPerPage;
     const displayedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

     const handleFilterChange = (filter: string) => {
          setActiveFilter(filter);
          setCurrentPage(1);
     };

     const handlePageChange = (direction: 'prev' | 'next') => {
          if (direction === 'prev' && currentPage > 1) {
               setCurrentPage(currentPage - 1);
          } else if (direction === 'next' && currentPage < totalPages) {
               setCurrentPage(currentPage + 1);
          }
     };

     return (
          <section id="projects" className="projects">
               <h2>Projects</h2>

               {/* Project category filters */}
               <div className="project-tags">
                    {filters.map((filter) => (
                         <button
                              key={filter}
                              className={activeFilter === filter ? 'active' : ''}
                              onClick={() => handleFilterChange(filter)}
                         >
                              {filter}
                         </button>
                    ))}
               </div>

               {/* Projects grid */}
               <div className="project-grid">
                    {displayedProjects.map((project) => (
                         <div key={project.id} className="project-card">
                              <h3>{project.title}</h3>
                              <p>{project.description}</p>

                              <div className="tags">
                                   {project.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                   ))}
                              </div>

                              <div className="project-links">
                                   {project.githubUrl && (
                                        <a
                                             href={project.githubUrl}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="project-link"
                                        >
                                             GitHub
                                        </a>
                                   )}
                                   {project.liveUrl && (
                                        <a
                                             href={project.liveUrl}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="project-link"
                                        >
                                             Live Demo
                                        </a>
                                   )}
                              </div>
                         </div>
                    ))}
               </div>

               {/* Pagination controls */}
               {totalPages > 1 && (
                    <div className="pagination-controls" style={{ textAlign: 'center', marginTop: '32px' }}>
                         <button
                              id="prevPage"
                              className="pagination-btn"
                              disabled={currentPage === 1}
                              onClick={() => handlePageChange('prev')}
                         >
                              Previous
                         </button>
                         <span
                              id="pageIndicator"
                              style={{ margin: '0 18px', color: 'var(--accent-light)', fontWeight: '500' }}
                         >
                              Page {currentPage} of {totalPages}
                         </span>
                         <button
                              id="nextPage"
                              className="pagination-btn"
                              disabled={currentPage === totalPages}
                              onClick={() => handlePageChange('next')}
                         >
                              Next
                         </button>
                    </div>
               )}
          </section>
     );
};

export default Projects;
