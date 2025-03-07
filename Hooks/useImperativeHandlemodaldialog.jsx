import React, { useRef, forwardRef, useImperativeHandle, useState } from "react";

// Modal Component
const Modal = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <p>Modal Content</p>
        <button onClick={() => setIsOpen(false)} className="mt-2 p-2 border rounded">Close</button>
      </div>
    </div>
  ) : null;
});

// Parent Component
export default function App() {
  const modalRef = useRef();

  return (
    <div className="p-4">
      <button onClick={() => modalRef.current.open()} className="p-2 border rounded">Open Modal</button>
      <Modal ref={modalRef} />
    </div>
  );
}
