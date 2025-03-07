import React, { useImperativeHandle, useRef, useState, forwardRef } from "react";

// Custom Input Component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => (inputRef.current.value = ""),
  }));

  return <input ref={inputRef} className="p-2 border rounded" placeholder="Type here..." />;
});

// Parent Component
export default function App() {
  const inputRef = useRef();

  return (
    <div className="p-4">
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()} className="m-2 p-2 border rounded">
        Focus Input
      </button>
      <button onClick={() => inputRef.current.clear()} className="m-2 p-2 border rounded">
        Clear Input
      </button>
    </div>
  );
}
