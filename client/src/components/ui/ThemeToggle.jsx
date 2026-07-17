import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative p-2 rounded-lg text-typography-secondary hover:bg-surface-high hover:text-typography-primary transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-bg"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Sun Icon (Visible in Dark Mode) */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <Sun className="w-5 h-5" />
      </span>

      {/* Moon Icon (Visible in Light Mode) */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <Moon className="w-5 h-5" />
      </span>

      {/* Invisible placeholder to maintain consistent button dimensions */}
      <span className="w-5 h-5 invisible" aria-hidden="true">
        <Moon className="w-5 h-5" />
      </span>
    </button>
  );
};

export default ThemeToggle;
