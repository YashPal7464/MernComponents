import React, { useState, useDebugValue } from "react";

// Custom Hook
function useAuthStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useDebugValue(isLoggedIn ? "User Logged In" : "User Logged Out");

  const toggleLogin = () => setIsLoggedIn((prev) => !prev);

  return { isLoggedIn, toggleLogin };
}

// Component Using Custom Hook
export default function App() {
  const { isLoggedIn, toggleLogin } = useAuthStatus();

  return (
    <div className="p-4">
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <button onClick={toggleLogin} className="p-2 border rounded">
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
