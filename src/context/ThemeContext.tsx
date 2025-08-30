import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Theme } from '../types';

interface ThemeContextType {
     theme: Theme['mode'];
     toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
     const context = useContext(ThemeContext);
     if (context === undefined) {
          throw new Error('useTheme must be used within a ThemeProvider');
     }
     return context;
};

interface ThemeProviderProps {
     children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
     const [theme, setTheme] = useState<Theme['mode']>(() => {
          const savedTheme = localStorage.getItem('portfolio-theme');
          return (savedTheme as Theme['mode']) || 'light';
     });

     const toggleTheme = () => {
          setTheme(prevTheme => {
               const newTheme = prevTheme === 'light' ? 'dark' : 'light';
               localStorage.setItem('portfolio-theme', newTheme);
               return newTheme;
          });
     };

     useEffect(() => {
          // Set both class and data-theme for backward compatibility
          document.body.className = theme === 'light' ? 'light-mode' : '';
          document.documentElement.setAttribute('data-theme', theme);
     }, [theme]);

     const value: ThemeContextType = {
          theme,
          toggleTheme,
     };

     return (
          <ThemeContext.Provider value={value}>
               {children}
          </ThemeContext.Provider>
     );
};
