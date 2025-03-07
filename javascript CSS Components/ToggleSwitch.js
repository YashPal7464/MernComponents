// ToggleSwitch.js
import { useState } from 'react';
import styled from 'styled-components';

const Switch = styled.label`
  display: inline-block;
  width: 50px;
  height: 25px;
  background: ${({ on }) => (on ? '#007BFF' : '#ccc')};
  border-radius: 25px;
  position: relative;
  cursor: pointer;
`;

const Handle = styled.span`
  width: 20px;
  height: 20px;
  background: white;
  position: absolute;
  top: 2.5px;
  left: ${({ on }) => (on ? 'calc(100% - 22px)' : '2.5px')};
  border-radius: 50%;
  transition: 0.3s;
`;

export default function ToggleSwitch({ onChange }) {
  const [on, setOn] = useState(false);

  return (
    <Switch on={on} onClick={() => { setOn(!on); onChange(!on); }}>
      <Handle on={on} />
    </Switch>
  );
}

// Usage in App.js
// import ToggleSwitch from './ToggleSwitch';
// <ToggleSwitch onChange={(state) => console.log('Toggled:', state)} />
