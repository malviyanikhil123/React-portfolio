import toast from 'react-hot-toast';

/**
 * Utility functions for consistent toast notifications across the application
 */

// Toast style configuration that matches your theme
const getToastStyles = (borderColor: string) => ({
     background: 'var(--surface-dark)',
     color: 'var(--neutral-text-dark)',
     border: `1px solid ${borderColor}`,
     borderRadius: 'var(--border-radius-lg)',
     fontSize: '14px',
     padding: '12px 16px',
     maxWidth: '400px',
     boxShadow: 'var(--shadow-medium)',
});

/**
 * Success notification
 */
export const showSuccessToast = (message: string, duration = 3000) => {
     return toast.success(message, {
          duration,
          style: getToastStyles('var(--accent-light)'),
          iconTheme: {
               primary: 'var(--accent-light)',
               secondary: 'var(--surface-dark)',
          },
     });
};

/**
 * Error notification
 */
export const showErrorToast = (message: string, duration = 4000) => {
     return toast.error(message, {
          duration,
          style: getToastStyles('#ff6b6b'),
          iconTheme: {
               primary: '#ff6b6b',
               secondary: 'var(--surface-dark)',
          },
     });
};

/**
 * Loading notification
 */
export const showLoadingToast = (message: string) => {
     return toast.loading(message, {
          style: getToastStyles('var(--accent-dark)'),
     });
};

/**
 * Info notification
 */
export const showInfoToast = (message: string, duration = 3000) => {
     return toast(message, {
          duration,
          style: getToastStyles('var(--primary-light)'),
          icon: 'ℹ️',
     });
};

/**
 * Custom notification with custom icon
 */
export const showCustomToast = (message: string, icon: string, duration = 3000) => {
     return toast(message, {
          duration,
          style: getToastStyles('var(--border-dark)'),
          icon,
     });
};

/**
 * Download notification with progress simulation
 */
export const showDownloadToast = (fileName: string, downloadFn: () => void) => {
     const loadingToast = showLoadingToast(`Preparing ${fileName} download...`);

     setTimeout(() => {
          try {
               downloadFn();
               toast.dismiss(loadingToast);
               showSuccessToast(`${fileName} downloaded successfully! 📄`);
          } catch (error) {
               toast.dismiss(loadingToast);
               showErrorToast(`Failed to download ${fileName}. Please try again.`);
          }
     }, 1000);
};

/**
 * Email sending notification
 */
export const showEmailToast = {
     sending: () => showLoadingToast('Sending your message...'),
     success: (name: string) => showSuccessToast(`Thanks ${name}! Your message has been sent successfully. 🚀`, 4000),
     error: () => showErrorToast('Failed to send message. Please try again or contact me directly.', 5000),
     configError: () => showErrorToast('Email service not configured. Please contact directly.', 5000),
};

/**
 * Form validation toasts
 */
export const showValidationToast = {
     required: (field: string) => showErrorToast(`${field} is required.`, 3000),
     email: () => showErrorToast('Please enter a valid email address.', 3000),
     minLength: (field: string, length: number) => showErrorToast(`${field} must be at least ${length} characters.`, 3000),
};

/**
 * Feature notifications
 */
export const showFeatureToast = {
     comingSoon: () => showInfoToast('This feature is coming soon! 🚀', 3000),
     underMaintenance: () => showInfoToast('This feature is under maintenance. Please try again later.', 4000),
     betaFeature: () => showInfoToast('This is a beta feature. Feedback is welcome! 🧪', 4000),
};

/**
 * Theme change notification
 */
export const showThemeChangeToast = (isDark: boolean) => {
     const theme = isDark ? 'dark' : 'light';
     const icon = isDark ? '🌙' : '☀️';
     showCustomToast(`Switched to ${theme} mode`, icon, 2000);
};
