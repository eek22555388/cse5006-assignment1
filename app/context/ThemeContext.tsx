"use client";

import { createContext, useContext, useState, useEffect } from "react";

// 1. Describe the shape of what we're sharing
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// 2. Create the context (empty container for now)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. The Provider: holds the state and shares it
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  // On first load, read saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    }
  }, []);

  // Whenever theme changes, apply it to <html> and save it
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. A helper so components can grab the theme easily
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}