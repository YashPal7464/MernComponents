import React, { useState, useTransition } from "react";

const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);

export default function App() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    startTransition(() => {
      setFiltered(items.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase())));
    });
  };

  return (
    <div className="p-4">
      <input onChange={handleSearch} placeholder="Search..." className="p-2 border" />
      {isPending && <p>Loading...</p>}
      <ul>
        {filtered.slice(0, 20).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
