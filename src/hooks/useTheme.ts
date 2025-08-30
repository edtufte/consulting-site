import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update CSS custom properties based on theme
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--text-dark', '#ffffff');
      root.style.setProperty('--text-light', '#a0aec0');
      root.style.setProperty('--bg-light', '#1a202c');
      root.style.setProperty('--border-light', '#2d3748');
    } else {
      root.style.setProperty('--text-dark', '#2c3e50');
      root.style.setProperty('--text-light', '#718096');
      root.style.setProperty('--bg-light', '#f7fafc');
      root.style.setProperty('--border-light', '#e2e8f0');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};