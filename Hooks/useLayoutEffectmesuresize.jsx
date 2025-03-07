import React, { useLayoutEffect, useRef, useState } from "react";

function MeasureComponent() {
  const divRef = useRef();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (divRef.current) {
      setSize({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div>
      <div ref={divRef} className="p-4 border" style={{ width: "200px", height: "100px" }}>
        Resize Me!
      </div>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}

export default function App() {
  return <MeasureComponent />;
}
