import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ProgressBar: React.FC = () => {
     const progress = useScrollProgress();

     return (
          <div className="progress-container">
               <div
                    className="progress-bar"
                    id="scrollProgress"
                    style={{ width: `${progress}%` }}
               />
          </div>
     );
};

export default ProgressBar;
