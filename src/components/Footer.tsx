import React from 'react';

interface SocialLink {
     name: string;
     url: string;
     icon: string;
}

const socialLinks: SocialLink[] = [
     {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/nikhil-malviya-80a6a0326/',
          icon: '/footer-icon/linkedin.png'
     },
     {
          name: 'GitHub',
          url: 'https://github.com/malviyanikhil123',
          icon: '/footer-icon/GitHub.png'
     },
     {
          name: 'Instagram',
          url: 'https://www.instagram.com/_nostalgic_nikhil/',
          icon: '/footer-icon/instagram.png'
     }
];

const Footer: React.FC = () => {
     const currentYear = new Date().getFullYear();

     return (
          <footer>
               <div className="footer-main">
                    <div className="footer-content">
                         <div className="footer-logo">
                              <img
                                   src="/logo/dark-mode-logo.png"
                                   alt="Nikhil Malviya Logo"
                                   style={{ height: '130px' }}
                              />
                         </div>

                         <div className="footer-text">
                              <p className="footer-tagline"><strong>Building elegant and efficient web solutions</strong> that make a
                                   difference.</p>
                              <p className="footer-description">Passionate about creating digital experiences that combine beautiful
                                   design with powerful functionality.</p>
                         </div>

                         <div className="footer-social">
                              {socialLinks.map((link) => (
                                   <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={`Visit my ${link.name} profile`}
                                   >
                                        <img
                                             src={link.icon}
                                             alt={`${link.name} icon`}
                                             width="24"
                                             height="24"
                                        />
                                   </a>
                              ))}
                         </div>
                    </div>
               </div>

               <div className="footer-bottom">
                    <p className="copyright">
                         © {currentYear} <strong>Nikhil Malviya</strong>. Crafted with passion and precision. All rights reserved.
                    </p>
               </div>
          </footer>
     );
};

export default Footer;
