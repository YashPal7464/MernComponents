// ProgressBar.js
import styled from 'styled-components';

const ProgressWrapper = styled.div`
  width: 100%;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: ${({ progress }) => progress}%;
  height: 20px;
  background: #007bff;
  transition: width 0.3s ease-in-out;
`;

export default function Progress({ progress }) {
  return (
    <ProgressWrapper>
      <ProgressBar progress={progress} />
    </ProgressWrapper>
  );
}

// Usage in App.js
// import Progress from './ProgressBar';
// <Progress progress={70} />
