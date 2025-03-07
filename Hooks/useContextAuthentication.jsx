import React, { createContext, useContext, useState } from "react";

// Create Authentication Context
const AuthContext = createContext();

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook for Auth
export function useAuth() {
  return useContext(AuthContext);
}

// Profile Component
function Profile() {
  const { user, login, logout } = useAuth();

  return (
    <div className="p-4">
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout} className="p-2 border rounded">Logout</button>
        </div>
      ) : (
        <button onClick={() => login("John Doe")} className="p-2 border rounded">Login</button>
      )}
    </div>
  );
}

// App Component
export default function App() {
  return (
    <AuthProvider>
      <h1 className="text-xl p-4">Authentication with Context</h1>
      <Profile />
    </AuthProvider>
  );
}
