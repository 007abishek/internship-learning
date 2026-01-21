import React from "react";

type Props<T> = {
  items: T[];
};

function List<T>({ items }: Props<T>) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{String(item)}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return <List items={[1, 2, 3]} />;
}
