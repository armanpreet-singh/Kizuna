import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // 1. Check localStorage first
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("kizuna-theme");
      if (storedTheme) return storedTheme;
    }
    // 2. Respect system preference if no stored preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    // 3. Fallback to light
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes first to prevent conflicts
    root.classList.remove("light", "dark");

    // Add the active theme class (required for Tailwind darkMode: 'class')
    root.classList.add(theme);

    // Persist to localStorage
    localStorage.setItem("kizuna-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
