// FloatingButton.js
import styled from 'styled-components';

const FAB = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #007bff;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function FloatingButton({ onClick }) {
  return <FAB onClick={onClick}>+</FAB>;
}

// Usage in App.js
// import FloatingButton from './FloatingButton';
// <FloatingButton onClick={() => alert('Button Clicked!')} />
