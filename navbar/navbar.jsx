import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice"; // Adjust path based on your setup
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          LMS Portal
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/courses" className="hover:text-blue-600 font-medium">
            Courses
          </Link>
          <Link to="/about" className="hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 font-medium">
            Contact
          </Link>

          {user ? (
            <>
              <Link to="/profile" className="hover:text-blue-600 font-medium">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-600 font-medium">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-blue-600" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/courses" className="block hover:text-blue-600" onClick={toggleMenu}>
            Courses
          </Link>
          <Link to="/about" className="block hover:text-blue-600" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className="block hover:text-blue-600" onClick={toggleMenu}>
            Contact
          </Link>

          {user ? (
            <>
              <Link to="/profile" className="block hover:text-blue-600" onClick={toggleMenu}>
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="block w-full text-left bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block hover:text-blue-600" onClick={toggleMenu}>
                Login
              </Link>
              <Link
                to="/register"
                className="block bg-blue-600 text-white px-3 py-1 rounded"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
