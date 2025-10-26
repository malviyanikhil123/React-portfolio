import React, { useState } from 'react';

interface Project {
     id: string;
     title: string;
     description: string;
     tags: string[];
     categories: ('Frontend' | 'Backend' | 'Full Stack' | 'Devops' | 'DSA' | 'Mini Game')[];
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
          categories: ['Full Stack', 'Backend', 'Frontend'],
          githubUrl: 'https://github.com/malviyanikhil123'
     },
     {
          id: '2',
          title: 'Uber Clone',
          description: 'Frontend clone of Uber UI, showcasing map layout, ride selection, and booking flow using static data. Designed for UI practice and layout precision.',
          tags: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB'],
          categories: ['Full Stack', 'Frontend', 'Backend'],
          githubUrl: 'https://github.com/malviyanikhil123/Uber-Clone'
     },
     {
          id: '3',
          title: 'Real Estate Marketplace',
          description: 'A web UI for browsing and listing real estate properties with filters, image cards, and responsive layouts for mobile and desktop users.',
          tags: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB'],
          categories: ['Full Stack', 'Frontend', 'Backend'],
          githubUrl: 'https://github.com/malviyanikhil123/Real-Estate-Marketplace'
     },
     {
          id: '4',
          title: 'Go Food',
          description: 'A restaurant-themed web app that showcases a digital menu, categories, and order section using JavaScript and CSS. Focused on responsive UI and food delivery simulation.',
          tags: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB'],
          categories: ['Full Stack', 'Frontend', 'Backend'],
          githubUrl: 'https://github.com/malviyanikhil123/Go-Food'
     },
     {
          id: '5',
          title: 'Book Store',
          description: 'A book catalog web app for viewing and filtering books with details like author, price, and genre. Built using JavaScript and static data rendering.',
          tags: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB'],
          categories: ['Full Stack', 'Frontend', 'Backend'],
          githubUrl: 'https://github.com/malviyanikhil123/Book-Store'
     },
     {
          id: '6',
          title: 'Spotify Clone',
          description: 'A frontend clone of Spotify built with HTML, CSS, and JavaScript. Features a sleek UI, responsive music player layout, and playlist design mimicking the real Spotify experience.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Frontend', 'UI Design'],
          categories: ['Frontend'],
          githubUrl: 'https://github.com/malviyanikhil123/Spotify-Clone'
     },
     {
          id: '7',
          title: 'Weather App',
          description: 'A weather forecast application that fetches real-time weather data using a public API. Displays temperature, humidity, wind speed, and weather conditions for any searched city.',
          tags: ['JavaScript', 'API', 'HTML', 'CSS'],
          categories: ['Frontend'],
          githubUrl: 'https://github.com/malviyanikhil123/Weather-App'
     },
     {
          id: '8',
          title: 'Note App',
          description: 'A simple yet functional note-taking web app allowing users to add, edit, and delete notes. Built with HTML, CSS, and JavaScript using local storage for persistence.',
          tags: ['JavaScript', 'HTML', 'CSS'],
          categories: ['Frontend'],
          githubUrl: 'https://github.com/malviyanikhil123/Note-App'
     },
     {
          id: '9',
          title: 'Landing Page',
          description: 'A modern and responsive landing page template designed with clean UI components and structured layout suitable for startups or portfolio pages.',
          tags: ['HTML', 'CSS', 'UI Design', 'Responsive Design'],
          categories: ['Frontend'],
          githubUrl: 'https://github.com/malviyanikhil123/Landing-Page'
     },
     {
          id: '10',
          title: 'Quiz Application',
          description: 'An interactive quiz app that tests user knowledge through multiple-choice questions. Includes scoring, progress tracking, and final results display.',
          tags: ['JavaScript', 'HTML', 'CSS'],
          categories: ['Frontend'],
          githubUrl: 'https://github.com/malviyanikhil123/Quiz-Application'
     },
     {
          id: '11',
          title: 'Jump Game',
          description: 'A browser-based arcade-style jump game developed using JavaScript canvas. Features simple mechanics, player controls, and collision detection.',
          tags: ['JavaScript', 'HTML', 'CSS'],
          categories: ['Mini Game', 'Frontend'],
          githubUrl: 'https://github.com/malviyanikhil123/Jump-game'
     },
     {
          id: '12',
          title: 'Snake Game',
          description: 'Classic snake game recreated using HTML, CSS, and JavaScript. Includes smooth animations, collision detection, and score tracking logic.',
          tags: ['JavaScript', 'HTML', 'CSS'],
          categories: ['Mini Game', 'Frontend'],
          githubUrl: 'https://github.com/malviyanikhil123/Snake-Game'
     },
     {
          id: '13',
          title: 'Tic Tac Toe',
          description: 'A simple two-player Tic-Tac-Toe game implemented with JavaScript. Features win detection logic, draw handling, and reset functionality.',
          tags: ['JavaScript', 'HTML', 'CSS'],
          categories: ['Mini Game', 'Frontend'],
          githubUrl: 'https://github.com/malviyanikhil123/TIc-Tac-Toe'
     },

     {
          id: '14',
          title: 'Personal Portfolio Website',
          description: 'A responsive personal portfolio website built using React and Tailwind CSS to showcase projects, skills, and achievements in a clean modern layout.',
          tags: ['React', 'CSS', 'JavaScript'],
          categories: ['Frontend'],
          githubUrl: 'https://github.com/malviyanikhil123/React-portfolio'
     },
     {
          id: '15',
          title: 'DevOps',
          description: 'A curated collection of DevOps automation scripts and setups for CI/CD, Docker, Ansible, and Jenkins pipelines. Includes Linux shell automation, deployment workflows, and container management for local and cloud environments.',
          tags: ['Bash', 'Linux', 'Docker', 'Jenkins', 'Ansible', 'Kubernetes', 'Nginx', 'Terraform'],
          categories: ['Devops'],
          githubUrl: 'https://github.com/malviyanikhil123/Devops'
     },
     {
          id: '16',
          title: 'DSA',
          description: 'Collection of solved Data Structures and Algorithms problems written in C++. Covers topics like arrays, linked lists, recursion, dynamic programming, sorting, and searching with detailed comments and explanations.',
          tags: ['C++', 'Algorithms', 'Data Structures', 'Competitive Programming'],
          categories: ['DSA'],
          githubUrl: 'https://github.com/malviyanikhil123/DSA'
     },
];

const Projects: React.FC = () => {
     const [activeFilter, setActiveFilter] = useState<string>('All');
     const [currentPage, setCurrentPage] = useState(1);
     const projectsPerPage = 6;

     const filters = ['All', 'Frontend', 'Backend', 'Full Stack', 'Devops', 'DSA', 'Mini Game'];

     const filteredProjects = projectsData.filter(project =>
          activeFilter === 'All' || project.categories.includes(activeFilter as any)
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
