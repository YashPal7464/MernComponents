// InfiniteScroll.js
import { useState, useEffect } from 'react';

export default function InfiniteScroll() {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setItems((prev) => [...prev, ...Array.from({ length: 10 })]);
      }
    });
  }, []);

  return (
    <div>
      {items.map((_, index) => (
        <p key={index}>Item {index + 1}</p>
      ))}
    </div>
  );
}

// Usage in App.js
// import InfiniteScroll from './InfiniteScroll';
// <InfiniteScroll />
