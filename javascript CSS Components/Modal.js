// Modal.js
import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const CloseButton = styled.button`
  background: #ff5a5f;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #e0484f;
  }
`;

export default function Modal({ show, onClose, children }) {
  return (
    <Overlay show={show} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </Overlay>
  );
}

// Usage in App.js
// import Modal from './Modal';
// const [isOpen, setIsOpen] = useState(false);
// <button onClick={() => setIsOpen(true)}>Open Modal</button>
// <Modal show={isOpen} onClose={() => setIsOpen(false)}>Hello Modal!</Modal>
