import { useState, useEffect } from 'react';
import { calculateExperience } from '../utils/helpers';
import type { ExperienceResult } from '../utils/helpers';

/**
 * Custom React hook to dynamically calculate and update experience
 * Updates monthly to keep the experience current (since we only calculate by month/year)
 * @param joiningDate - The date when professional experience began (default: May 19, 2025)
 * @returns ExperienceResult object with current experience data
 */
export const useExperience = (joiningDate: Date = new Date('2025-05-19')): ExperienceResult => {
     const [experience, setExperience] = useState<ExperienceResult>(() =>
          calculateExperience(joiningDate)
     );

     useEffect(() => {
          // Update once per month since we only calculate by month/year
          const now = new Date();
          const currentMonth = `${now.getFullYear()}-${now.getMonth()}`;
          const lastUpdateMonth = localStorage.getItem('experience-last-update-month');

          if (lastUpdateMonth !== currentMonth) {
               const newExperience = calculateExperience(joiningDate);
               setExperience(newExperience);
               localStorage.setItem('experience-last-update-month', currentMonth);
          }
          // No interval needed, only update on mount if month changed
     }, [joiningDate]);

     return experience;
};

/**
 * Alternative hook that updates experience more frequently (every hour)
 * Useful for testing or when you want more frequent updates
 * Since calculation is now month/year based, frequent updates are less critical
 * @param joiningDate - The date when professional experience began
 * @returns ExperienceResult object with current experience data
 */
export const useRealTimeExperience = (joiningDate: Date = new Date('2025-04-19')): ExperienceResult => {
     const [experience, setExperience] = useState<ExperienceResult>(() =>
          calculateExperience(joiningDate)
     );

     useEffect(() => {
          // Function to update experience
          const updateExperience = () => {
               const newExperience = calculateExperience(joiningDate);
               setExperience(newExperience);
          };

          // Update experience immediately
          updateExperience();

          // Set up interval to update every hour (3600000 milliseconds)
          // Since we calculate by month/year, hourly updates are sufficient
          const intervalId = setInterval(updateExperience, 3600000);

          // Cleanup interval on component unmount
          return () => clearInterval(intervalId);
     }, [joiningDate]);

     return experience;
};
