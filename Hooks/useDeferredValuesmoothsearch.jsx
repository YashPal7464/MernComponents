import React, { useState, useDeferredValue } from "react";

const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);

export default function App() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = items.filter((item) => item.toLowerCase().includes(deferredQuery.toLowerCase()));

  return (
    <div className="p-4">
      <input onChange={(e) => setQuery(e.target.value)} placeholder="Search..." className="p-2 border" />
      <ul>
        {filtered.slice(0, 20).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
