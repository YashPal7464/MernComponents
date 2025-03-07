import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Countdown: {count}</div>;
}

export default Timer;
