import { useCart } from "../../hooks/useCart";

export default function CartPage() {
  const { items } = useCart();

  if (items.length === 0) return <p>Cart is empty</p>;

  return (
    <div>
      <h2>Cart</h2>
      {items.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
