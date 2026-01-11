import React, { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return { theme, toggleTheme };
};

export default useTheme;
