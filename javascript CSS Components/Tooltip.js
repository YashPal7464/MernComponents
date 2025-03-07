// Tooltip.js
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background: black;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  ${TooltipWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export default function Tooltip({ text, children }) {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText>{text}</TooltipText>
    </TooltipWrapper>
  );
}

// Usage in App.js
// import Tooltip from './Tooltip';
// <Tooltip text="I'm a tooltip!">Hover me</Tooltip>
