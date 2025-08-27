import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
     const { theme, toggleTheme } = useTheme();

     return (
          <label className="theme-switch">
               <input
                    type="checkbox"
                    className="theme-switch__checkbox"
                    id="theme-toggle"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
               />
               <div className="theme-switch__container">
                    <div className="theme-switch__clouds"></div>
                    <div className="theme-switch__circle-container">
                         <div className="theme-switch__sun-moon-container">
                              <div className="theme-switch__moon">
                                   <div className="theme-switch__spot"></div>
                                   <div className="theme-switch__spot"></div>
                                   <div className="theme-switch__spot"></div>
                              </div>
                         </div>
                    </div>
               </div>
          </label>
     );
};

export default ThemeToggle;
