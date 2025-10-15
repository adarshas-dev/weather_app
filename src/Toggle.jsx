import { useEffect, useState } from "react";
import "./Toggle.css";

function Toggle() {
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="theme-container">
      <button
        onClick={toggleTheme}
        className="toggle-btn"
        style={{
          backgroundColor: theme === "light" ? "#f9f9f9" : "#121212",
          color: theme === "light" ? "#121212" : "#f9f9f9",
        }}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default Toggle;
