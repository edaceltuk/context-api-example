import React, { useState } from "react";

const Context = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Context.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export { ThemeProvider, Context };
