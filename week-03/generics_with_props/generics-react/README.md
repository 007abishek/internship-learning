# Generics with Props (React + TypeScript)

This project demonstrates how **TypeScript generics** are used with **React component props** to create **reusable and type-safe components**.

---

## 📌 What Problem Generics Solve

Without generics, a component works with **only one data type**.  
Generics allow the same component to work with **multiple types** while keeping type safety.

---

## 🧩 Generic Props Example

```tsx
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function GenericList<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
