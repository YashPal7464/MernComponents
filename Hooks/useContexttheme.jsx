import React, { createContext, useContext, useState } from "react";

// Creating Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "bg-white text-black" : "bg-black text-white"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Custom Hook for Theme
export function useTheme() {
  return useContext(ThemeContext);
}

// Button Component Using Theme
function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme} className="p-2 m-2 border rounded">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// App Component
export default function App() {
  return (
    <ThemeProvider>
      <h1 className="text-xl p-4">React Context API Example</h1>
      <ThemeButton />
    </ThemeProvider>
  );
}
