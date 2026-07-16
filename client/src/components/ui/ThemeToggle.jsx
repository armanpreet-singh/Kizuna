import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Sun Icon (Visible in Dark Mode) */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-0"}`}
      >
        <Sun className="w-5 h-5" />
      </span>

      {/* Moon Icon (Visible in Light Mode) */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-100"}`}
      >
        <Moon className="w-5 h-5" />
      </span>

      {/* Invisible placeholder to maintain button size */}
      <span className="w-5 h-5 invisible">
        <Moon className="w-5 h-5" />
      </span>
    </button>
  );
};

export default ThemeToggle;
