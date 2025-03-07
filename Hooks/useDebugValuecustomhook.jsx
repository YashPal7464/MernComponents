import React, { useState, useDebugValue } from "react";

// Custom Hook for Theme
function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useDebugValue(isDark ? "Dark Mode Enabled" : "Light Mode Enabled");

  const toggle = () => setIsDark((prev) => !prev);

  return { isDark, toggle };
}

// Theme Toggle Component
export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className={`p-4 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <button onClick={toggle} className="p-2 border rounded">
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
