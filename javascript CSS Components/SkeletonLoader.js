// SkeletonLoader.js
import styled from 'styled-components';

const Skeleton = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '20px'};
  background: linear-gradient(90deg, #eee, #ddd, #eee);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 5px;
  
  @keyframes shimmer {
    from {
      background-position: -200% 0;
    }
    to {
      background-position: 200% 0;
    }
  }
`;

export default Skeleton;

// Usage in App.js
// import Skeleton from './SkeletonLoader';
// <Skeleton width="80%" height="20px" />
