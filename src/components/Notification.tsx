import React, { useEffect } from 'react';
import type { NotificationProps } from '../types';

const Notification: React.FC<NotificationProps> = ({
     message,
     type,
     isVisible,
     onClose
}) => {
     useEffect(() => {
          if (isVisible) {
               const timer = setTimeout(() => {
                    onClose();
               }, 5000);

               return () => clearTimeout(timer);
          }
     }, [isVisible, onClose]);

     if (!isVisible) return null;

     const getIcon = () => {
          switch (type) {
               case 'success':
                    return (
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" fill="none" />
                         </svg>
                    );
               case 'error':
                    return (
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" fill="none" />
                         </svg>
                    );
               case 'info':
               default:
                    return (
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" fill="none" />
                         </svg>
                    );
          }
     };

     return (
          <div className={`notification notification--${type} ${isVisible ? 'notification--visible' : ''}`}>
               <div className="notification__icon">
                    {getIcon()}
               </div>
               <div className="notification__message">
                    {message}
               </div>
               <button
                    className="notification__close"
                    onClick={onClose}
                    aria-label="Close notification"
               >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" />
                    </svg>
               </button>
          </div>
     );
};

export default Notification;
