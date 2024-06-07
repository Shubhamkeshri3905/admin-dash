import React, { createContext, useState, useContext } from 'react';

// Define a context for theme management
const ThemeContext = createContext();

// Custom hook to consume the theme context
export const useTheme = () => {
    return useContext(ThemeContext);
};

// ThemeProvider component to wrap the entire application
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app ${themeClass}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
