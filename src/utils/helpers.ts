/**
 * Interface for experience calculation result
 */
export interface ExperienceResult {
     experienceText: string;
     experienceLabel: string;
     fullText: string;
}

/**
 * Calculates years of professional experience from a starting date
 * Only considers months and years, ignoring specific days
 * @param joiningDate - The date when professional experience began (default: May 19, 2025)
 * @returns Object with formatted experience text, label, and full description
 */
export const calculateExperience = (joiningDate: Date = new Date('2025-05-19')): ExperienceResult => {
     const currentDate = new Date();

     // Calculate years and months (ignoring specific days)
     const yearsDiff = currentDate.getFullYear() - joiningDate.getFullYear();
     const monthsDiff = currentDate.getMonth() - joiningDate.getMonth();

     // Calculate total months without day adjustment
     const totalMonths = yearsDiff * 12 + monthsDiff;

     // Convert to years and remaining months
     const years = Math.floor(totalMonths / 12);
     const months = totalMonths % 12;

     // Format the experience string and determine label
     let experienceText: string;
     let experienceLabel: string;
     let fullText: string;

     if (years === 0) {
          if (months === 0) {
               experienceText = "< 1";
               experienceLabel = "Month Experience";
               fullText = "< 1 month";
          } else if (months === 1) {
               experienceText = "1";
               experienceLabel = "Month Experience";
               fullText = "1 month";
          } else {
               experienceText = `${months}`;
               experienceLabel = "Months Experience";
               fullText = `${months} months`;
          }
     } else if (years === 1) {
          if (months === 0) {
               experienceText = "1";
               experienceLabel = "Year Experience";
               fullText = "1 year";
          } else if (months === 1) {
               experienceText = "1.1";
               experienceLabel = "Years Experience";
               fullText = "1 year 1 month";
          } else {
               experienceText = `1.${Math.round((months / 12) * 10)}`;
               experienceLabel = "Years Experience";
               fullText = `1 year ${months} months`;
          }
     } else {
          if (months === 0) {
               experienceText = `${years}`;
               experienceLabel = "Years Experience";
               fullText = `${years} years`;
          } else {
               const decimal = Math.round((months / 12) * 10);
               experienceText = `${years}.${decimal}`;
               experienceLabel = "Years Experience";
               fullText = `${years} years ${months} months`;
          }
     }

     return {
          experienceText,
          experienceLabel,
          fullText
     };
};

/**
 * Updates DOM elements with current experience (for legacy DOM manipulation)
 * This function mimics the original updateExperience function you provided
 * @param joiningDate - The date when professional experience began (default: May 19, 2025)
 */
export const updateExperienceDOM = (joiningDate: Date = new Date('2025-05-19')): void => {
     const experienceData = calculateExperience(joiningDate);

     // Update the DOM elements
     const experienceElement = document.getElementById('experienceYears');
     const labelElement = document.getElementById('experienceLabel');

     if (experienceElement) {
          experienceElement.textContent = experienceData.experienceText;
     }

     if (labelElement) {
          labelElement.textContent = experienceData.experienceLabel;
     }
};

/**
 * Smooth scroll to element with offset for fixed header
 * @param elementId - ID of the element to scroll to
 * @param offset - Offset in pixels (default: 100)
 */
export const smoothScrollTo = (elementId: string, offset: number = 100): void => {
     const element = document.getElementById(elementId);
     if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
               top: offsetPosition,
               behavior: 'smooth'
          });
     }
};

/**
 * Debounce function to limit function calls
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
     func: T,
     wait: number
): ((...args: Parameters<T>) => void) => {
     // Use ReturnType<typeof setTimeout> to correctly type the timeout across environments
     let timeout: ReturnType<typeof setTimeout> | null = null;
     return (...args: Parameters<T>) => {
          if (timeout !== null) {
               clearTimeout(timeout);
          }
          timeout = setTimeout(() => {
               // Call the provided function with the original arguments
               // Parameters<T> preserves the argument types of func
               func(...args);
          }, wait);
     };
};

/**
 * Download file with given URL and filename
 * @param url - URL of the file to download
 * @param filename - Name for the downloaded file
 */
export const downloadFile = (url: string, filename: string): void => {
     const link = document.createElement('a');
     link.href = url;
     link.download = filename;
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
};
