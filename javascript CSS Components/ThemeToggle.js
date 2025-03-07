// ThemeToggle.js
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const themes = {
  light: { background: '#fff', color: '#000' },
  dark: { background: '#333', color: '#fff' },
};

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={themes[theme]}>
      <Container>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </Container>
    </ThemeProvider>
  );
}

// Usage in App.js
// import ThemeToggle from './ThemeToggle';
// <ThemeToggle />
