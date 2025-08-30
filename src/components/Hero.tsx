import React, { useState, useEffect, useCallback, useRef } from 'react';
import { downloadFile } from '../utils/helpers';
import { showDownloadToast } from '../utils/toastUtils';

const Hero: React.FC = () => {
     const [displayedText, setDisplayedText] = useState('');
     const [displayedSubText, setDisplayedSubText] = useState('');
     const [showCursor, setShowCursor] = useState(true);
     const [currentStep, setCurrentStep] = useState(0);
     const [currentSubTextIndex, setCurrentSubTextIndex] = useState(0);

     const timeoutRef = useRef<number | null>(null);
     const cursorTimeoutRef = useRef<number | null>(null);

     const mainText = "Hi, I'm Nikhil Malviya";
     const subTexts = [
          "Software Engineer",
          "Full Stack Developer",
          "Backend Developer",
          "Frontend Developer",
     ];

     // Cleanup function to clear all timeouts
     const clearAllTimeouts = useCallback(() => {
          if (timeoutRef.current) {
               clearTimeout(timeoutRef.current);
               timeoutRef.current = null;
          }
          if (cursorTimeoutRef.current) {
               clearTimeout(cursorTimeoutRef.current);
               cursorTimeoutRef.current = null;
          }
     }, []);

     // Optimized typing animation
     const startTypingAnimation = useCallback(() => {
          clearAllTimeouts();

          const animate = () => {
               // Step 0: Type main text
               if (currentStep === 0) {
                    if (displayedText.length < mainText.length) {
                         timeoutRef.current = setTimeout(() => {
                              setDisplayedText(prev => mainText.slice(0, prev.length + 1));
                         }, 100);
                    } else {
                         timeoutRef.current = setTimeout(() => {
                              setCurrentStep(1);
                         }, 500);
                    }
               }

               // Step 1: Type sub text
               else if (currentStep === 1) {
                    const currentSubText = subTexts[currentSubTextIndex];
                    if (displayedSubText.length < currentSubText.length) {
                         timeoutRef.current = setTimeout(() => {
                              setDisplayedSubText(prev => currentSubText.slice(0, prev.length + 1));
                         }, 80);
                    } else {
                         timeoutRef.current = setTimeout(() => {
                              setCurrentStep(2);
                         }, 2000);
                    }
               }

               // Step 2: Erase sub text
               else if (currentStep === 2) {
                    if (displayedSubText.length > 0) {
                         timeoutRef.current = setTimeout(() => {
                              setDisplayedSubText(prev => prev.slice(0, -1));
                         }, 50);
                    } else {
                         timeoutRef.current = setTimeout(() => {
                              const nextIndex = (currentSubTextIndex + 1) % subTexts.length;
                              if (nextIndex === 0) {
                                   setDisplayedText('');
                                   setCurrentStep(0);
                              } else {
                                   setCurrentStep(1);
                              }
                              setCurrentSubTextIndex(nextIndex);
                         }, 300);
                    }
               }
          };

          animate();
     }, [currentStep, displayedText, displayedSubText, currentSubTextIndex, clearAllTimeouts, mainText, subTexts]);

     // Start animation when dependencies change
     useEffect(() => {
          startTypingAnimation();
          return clearAllTimeouts;
     }, [startTypingAnimation, clearAllTimeouts]);

     // Optimized cursor blinking
     useEffect(() => {
          const blinkCursor = () => {
               cursorTimeoutRef.current = setTimeout(() => {
                    setShowCursor(prev => !prev);
                    blinkCursor();
               }, 500);
          };

          blinkCursor();
          return () => {
               if (cursorTimeoutRef.current) {
                    clearTimeout(cursorTimeoutRef.current);
               }
          };
     }, []);

     const handleDownloadResume = () => {
          showDownloadToast('Resume', () => {
               downloadFile('/resume/nikhil-malviya-full-stack-developer-resume.pdf', 'nikhil-malviya-full-stack-developer-resume.pdf');
          });
     };

     return (
          <section id="hero" className="hero">
               <div className="hero-content">
                    <div className="hero-left">
                         <h1>
                              <span className="hero-headline-main typing-text">
                                   {displayedText}
                                   {currentStep === 0 && showCursor && <span className="typing-cursor">|</span>}
                              </span>
                              <span className="hero-headline-sub typing-text">
                                   {displayedSubText}
                                   {(currentStep === 1 || currentStep === 2) && showCursor && <span className="typing-cursor">|</span>}
                              </span>
                         </h1>
                         <p className="hero-desc">
                              Passionate about creating scalable, efficient solutions that bridge the gap between
                              innovative design and robust functionality. I specialize in modern web technologies
                              and cloud infrastructure, delivering end-to-end applications that make a difference.
                         </p>
                         <div className="hero-buttons">
                              <button className="download-btn" onClick={handleDownloadResume}>
                                   <svg className="download-svg-icon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                                   </svg>
                                   <span className="download-icon2"></span>
                                   <span className="download-tooltip">Download Resume</span>
                              </button>
                         </div>
                    </div>

                    <div className="hero-right">
                         <div className="hero-graphic">
                              <svg
                                   width="400"
                                   height="400"
                                   viewBox="0 0 400 400"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="animated-hero-svg"
                              >
                                   {/* Animated concentric circles with rotation */}
                                   <circle
                                        cx="200"
                                        cy="200"
                                        r="150"
                                        stroke="var(--accent-light)"
                                        strokeWidth="2"
                                        opacity="0.3"
                                        className="rotating-circle outer-ring"
                                        strokeDasharray="10 5"
                                   />
                                   <circle
                                        cx="200"
                                        cy="200"
                                        r="100"
                                        stroke="var(--accent-light)"
                                        strokeWidth="2"
                                        opacity="0.5"
                                        className="rotating-circle middle-ring"
                                        strokeDasharray="8 4"
                                   />
                                   <circle
                                        cx="200"
                                        cy="200"
                                        r="50"
                                        fill="var(--accent-light)"
                                        opacity="0.8"
                                        className="pulsing-core"
                                   />

                                   {/* Floating tech labels with orbital animation */}
                                   <g className="floating-tech-label orbit-1">
                                        <circle cx="200" cy="80" r="25" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="200" y="88" fontSize="16" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">{'</>'}</text>
                                   </g>

                                   <g className="floating-tech-label orbit-2">
                                        <circle cx="320" cy="140" r="30" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="320" y="148" fontSize="14" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">React</text>
                                   </g>

                                   <g className="floating-tech-label orbit-3">
                                        <circle cx="80" cy="260" r="20" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="80" y="267" fontSize="12" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">TS</text>
                                   </g>

                                   <g className="floating-tech-label orbit-4">
                                        <circle cx="300" cy="300" r="28" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="300" y="307" fontSize="12" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">Node.js</text>
                                   </g>

                                   <g className="floating-tech-label orbit-5">
                                        <circle cx="350" cy="200" r="24" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="350" y="207" fontSize="11" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">Nest.js</text>
                                   </g>

                                   <g className="floating-tech-label orbit-6">
                                        <circle cx="70" cy="150" r="22" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="70" y="157" fontSize="10" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">Python</text>
                                   </g>

                                   <g className="floating-tech-label orbit-7">
                                        <circle cx="250" cy="350" r="26" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="250" y="357" fontSize="11" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">Docker</text>
                                   </g>

                                   <g className="floating-tech-label orbit-8">
                                        <circle cx="130" cy="50" r="23" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="130" y="57" fontSize="10" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">AWS</text>
                                   </g>

                                   <g className="floating-tech-label orbit-9">
                                        <circle cx="370" cy="280" r="21" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="370" y="286" fontSize="9" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">PostgreSQL</text>
                                   </g>

                                   <g className="floating-tech-label orbit-10">
                                        <circle cx="50" cy="330" r="25" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="50" y="337" fontSize="10" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">GraphQL</text>
                                   </g>

                                   <g className="floating-tech-label orbit-11">
                                        <circle cx="340" cy="70" r="20" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="340" y="76" fontSize="9" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">Redis</text>
                                   </g>

                                   <g className="floating-tech-label orbit-12">
                                        <circle cx="90" cy="370" r="22" fill="var(--surface-dark)" opacity="0.9" stroke="var(--accent-light)" strokeWidth="1" />
                                        <text x="90" y="377" fontSize="9" fill="var(--accent-light)" textAnchor="middle" fontWeight="600">K8s</text>
                                   </g>

                                   {/* Additional floating particles */}
                                   <g className="floating-particles">
                                        <circle cx="150" cy="120" r="3" fill="var(--accent-light)" opacity="0.6" className="particle particle-1" />
                                        <circle cx="280" cy="180" r="2" fill="var(--accent-light)" opacity="0.7" className="particle particle-2" />
                                        <circle cx="120" cy="320" r="2.5" fill="var(--accent-light)" opacity="0.5" className="particle particle-3" />
                                        <circle cx="340" cy="250" r="2" fill="var(--accent-light)" opacity="0.8" className="particle particle-4" />
                                        <circle cx="180" cy="340" r="3" fill="var(--accent-light)" opacity="0.6" className="particle particle-5" />
                                   </g>

                                   {/* Connection lines with animation */}
                                   <g className="connection-lines" opacity="0.3">
                                        <line x1="200" y1="200" x2="200" y2="80" stroke="var(--accent-light)" strokeWidth="1" strokeDasharray="5 3" className="connecting-line line-1" />
                                        <line x1="200" y1="200" x2="320" y2="140" stroke="var(--accent-light)" strokeWidth="1" strokeDasharray="5 3" className="connecting-line line-2" />
                                        <line x1="200" y1="200" x2="80" y2="260" stroke="var(--accent-light)" strokeWidth="1" strokeDasharray="5 3" className="connecting-line line-3" />
                                        <line x1="200" y1="200" x2="300" y2="300" stroke="var(--accent-light)" strokeWidth="1" strokeDasharray="5 3" className="connecting-line line-4" />
                                   </g>
                              </svg>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Hero;
