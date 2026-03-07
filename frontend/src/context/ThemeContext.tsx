"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("squirtle");

  useEffect(() => {
    const savedTheme = localStorage.getItem("pokemon-theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  function changeTheme(newTheme: string) {
    setTheme(newTheme);

    localStorage.setItem("pokemon-theme", newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);