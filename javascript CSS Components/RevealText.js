// RevealText.js
import styled from 'styled-components';

const Text = styled.span`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function RevealText({ children }) {
  return <Text>{children}</Text>;
}

// Usage in App.js
// import RevealText from './RevealText';
// <RevealText>Hello World!</RevealText>
