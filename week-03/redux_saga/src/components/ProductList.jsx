import { useDispatch } from "react-redux";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: p })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
}
