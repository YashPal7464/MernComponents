import { useMemo, useState } from "react";

function FilterList() {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Cherry", "Date"];

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <ul>{filteredItems.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

export default FilterList;
