import React, { createContext, useState, useEffect, useCallback } from 'react';

export type ThemeType = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme1',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    return savedTheme ?? 'theme1';
  });

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove('theme1', 'theme2', 'theme3');
    html.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: ThemeType) => {
    setThemeState(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
