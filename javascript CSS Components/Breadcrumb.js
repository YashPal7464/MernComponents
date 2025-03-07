// Breadcrumb.js
import styled from 'styled-components';

const BreadcrumbContainer = styled.nav`
  display: flex;
  gap: 10px;
  font-size: 14px;
`;

const Crumb = styled.span`
  color: ${({ active }) => (active ? '#007bff' : '#6c757d')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;

export default function Breadcrumb({ path }) {
  return (
    <BreadcrumbContainer>
      {path.map((item, index) => (
        <Crumb key={index} active={index === path.length - 1}>
          {item}
        </Crumb>
      ))}
    </BreadcrumbContainer>
  );
}

// Usage in App.js
// import Breadcrumb from './Breadcrumb';
// <Breadcrumb path={['Home', 'Products', 'Laptops']} />
