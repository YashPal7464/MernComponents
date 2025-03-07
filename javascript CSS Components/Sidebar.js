// Sidebar.js
import { useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: ${({ open }) => (open ? '250px' : '0')};
  height: 100%;
  background: #007bff;
  color: white;
  overflow: hidden;
  transition: 0.3s;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 20px;
`;

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      <SidebarContainer open={open}>Menu Items Here</SidebarContainer>
    </>
  );
}

// Usage in App.js
// import Sidebar from './Sidebar';
// <Sidebar />
