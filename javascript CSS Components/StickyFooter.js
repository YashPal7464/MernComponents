// StickyFooter.js
import styled from 'styled-components';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #007bff;
  color: white;
  text-align: center;
  padding: 10px;
`;

export default function StickyFooter() {
  return <Footer>© 2025 Your Website</Footer>;
}

// Usage in App.js
// import StickyFooter from './StickyFooter';
// <StickyFooter />
