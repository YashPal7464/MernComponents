import React, { useDeferredValue, useState } from "react";

const names = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

export default function App() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = names.filter((name) => name.includes(deferredQuery));

  return (
    <div className="p-4">
      <input onChange={(e) => setQuery(e.target.value)} placeholder="Search..." className="p-2 border" />
      <ul>
        {filtered.slice(0, 10).map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
