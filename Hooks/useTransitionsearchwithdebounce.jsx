import React, { useState, useTransition } from "react";

const names = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

export default function App() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(names);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    startTransition(() => {
      setFiltered(names.filter((name) => name.includes(e.target.value)));
    });
  };

  return (
    <div className="p-4">
      <input onChange={handleSearch} placeholder="Search..." className="p-2 border" />
      {isPending && <p>Loading...</p>}
      <ul>
        {filtered.slice(0, 10).map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
