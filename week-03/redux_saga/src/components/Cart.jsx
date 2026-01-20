import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const { cartItems, error } = useSelector(
    state => state.cart
  );
  const dispatch = useDispatch();

  return (
    <>
      <h2>Cart</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {cartItems.map(item => (
        <div key={item.id}>
          {item.name}
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item.id,
              })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}
