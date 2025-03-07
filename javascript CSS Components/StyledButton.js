// StyledButton.js
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ primary }) => (primary ? '#007BFF' : '#6c757d')};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#5a6268')};
  }
`;

export default Button;

// Usage in App.js
// import Button from './StyledButton';
// <Button primary>Primary Button</Button>
// <Button>Secondary Button</Button>
