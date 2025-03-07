// Navbar.js
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #007bff;
  color: white;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <h2>Brand</h2>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
}

// Usage in App.js
// import Navbar from './Navbar';
// <Navbar />
