import { useState, useEffect } from 'react';
import { calculateExperience } from '../utils/helpers';
import type { ExperienceResult } from '../utils/helpers';

/**
 * Custom React hook to dynamically calculate and update experience
 * Updates every hour to keep the experience current
 * @param joiningDate - The date when professional experience began (default: May 19, 2025)
 * @returns ExperienceResult object with current experience data
 */
export const useExperience = (joiningDate: Date = new Date('2025-05-19')): ExperienceResult => {
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
          const intervalId = setInterval(updateExperience, 3600000);

          // Cleanup interval on component unmount
          return () => clearInterval(intervalId);
     }, [joiningDate]);

     return experience;
};

/**
 * Alternative hook that updates experience more frequently (every minute)
 * Useful for testing or when you want real-time updates
 * @param joiningDate - The date when professional experience began
 * @returns ExperienceResult object with current experience data
 */
export const useRealTimeExperience = (joiningDate: Date = new Date('2025-05-19')): ExperienceResult => {
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

          // Set up interval to update every minute (60000 milliseconds)
          const intervalId = setInterval(updateExperience, 60000);

          // Cleanup interval on component unmount
          return () => clearInterval(intervalId);
     }, [joiningDate]);

     return experience;
};
