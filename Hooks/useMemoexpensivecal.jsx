import { useMemo, useState } from "react";

function ExpensiveComputation() {
  const [count, setCount] = useState(0);

  const squared = useMemo(() => {
    console.log("Computing...");
    return count ** 2;
  }, [count]);

  return (
    <div>
      <p>Squared: {squared}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExpensiveComputation;
