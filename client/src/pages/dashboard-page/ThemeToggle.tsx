import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold text-second-text-color">
        Dark Mode
      </span>
      <button
        onClick={toggleTheme}
        className="w-10 h-5 bg-second-section-divider rounded-full relative"
      >
        <span
          className={`w-4 h-4 bg-third-blue rounded-full absolute top-0.5 left-0.5 transition-transform ${
            isDarkMode ? "translate-x-5" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
