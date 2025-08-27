import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { showEmailToast } from '../utils/toastUtils';
import type { ContactForm } from '../types';

const Contact: React.FC = () => {
     const [formData, setFormData] = useState<ContactForm>({
          name: '',
          email: '',
          message: ''
     });
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target;
          setFormData(prev => ({
               ...prev,
               [name]: value
          }));
     };

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setIsSubmitting(true);
          setSubmitStatus('idle');

          // Show loading toast
          showEmailToast.sending();

          try {
               // Initialize EmailJS (you'll need to add your keys to .env)
               const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
               const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
               const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

               if (!publicKey || !serviceId || !templateId) {
                    console.warn('EmailJS configuration missing. Please check your .env file.');
                    setSubmitStatus('error');
                    showEmailToast.configError();
                    return;
               }

               await emailjs.send(
                    serviceId,
                    templateId,
                    {
                         from_name: formData.name,
                         from_email: formData.email,
                         message: formData.message,
                         to_name: 'Nikhil Malviya'
                    },
                    publicKey
               );

               setSubmitStatus('success');
               const userName = formData.name;
               setFormData({ name: '', email: '', message: '' });

               // Show success toast
               showEmailToast.success(userName);

          } catch (error) {
               console.error('EmailJS error:', error);
               setSubmitStatus('error');
               showEmailToast.error();
          } finally {
               setIsSubmitting(false);
          }
     };

     return (
          <section id="contact" className="contact">
               <h2>Get In Touch</h2>
               <p className="contact-intro">
                    Ready to collaborate on something amazing? <strong>Let's build the future together.</strong>
               </p>
               <p className="contact-subtitle">
                    Whether you have a project in mind, want to discuss opportunities, or just want to connect,
                    I'd love to hear from you.
               </p>

               <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                    {/* Name input field */}
                    <div className="form-group">
                         <div className="input-icon">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" />
                                   <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="currentColor" />
                              </svg>
                         </div>
                         <input
                              type="text"
                              name="name"
                              id="contact-name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder=" "
                         />
                         <label htmlFor="contact-name">Your Name</label>
                    </div>

                    {/* Email input field */}
                    <div className="form-group">
                         <div className="input-icon">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                   <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" fill="none" />
                              </svg>
                         </div>
                         <input
                              type="email"
                              name="email"
                              id="contact-email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder=" "
                         />
                         <label htmlFor="contact-email">Your Email</label>
                    </div>

                    {/* Message textarea field */}
                    <div className="form-group">
                         <div className="input-icon">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" fill="none" />
                              </svg>
                         </div>
                         <textarea
                              name="message"
                              id="contact-message"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              rows={5}
                              placeholder=" "
                         />
                         <label htmlFor="contact-message">Your Message</label>
                    </div>

                    {/* Submit button */}
                    <button
                         type="submit"
                         className="contact-btn glass-btn"
                         disabled={isSubmitting}
                    >
                         <span className="button-text">
                              {isSubmitting ? 'Sending...' : 'Send Message'}
                         </span>
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor" />
                         </svg>
                    </button>

                    {/* Status messages */}
                    {submitStatus === 'success' && (
                         <div className="form-status success">
                              Message sent successfully! I'll get back to you soon.
                         </div>
                    )}
                    {submitStatus === 'error' && (
                         <div className="form-status error">
                              Failed to send message. Please try again or email me directly.
                         </div>
                    )}
               </form>
          </section>
     );
};

export default Contact;
