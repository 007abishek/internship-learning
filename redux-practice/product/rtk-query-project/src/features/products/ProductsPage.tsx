import { useGetProductsQuery } from "./productsApi";
import { useCart } from "../../hooks/useCart";
import type { Product } from "./types";

export default function ProductsPage() {
  const { data, isLoading, error } = useGetProductsQuery();
  const { items, add, remove } = useCart();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  console.log("Cart items:", items);

  return (
    <div>
      <h3>Cart Items: {items.length}</h3>

      {data?.map((product: Product) => {
        const isInCart = items.some(
          (item) => item.id === product.id
        );

        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>₹ {product.price}</p>

            {!isInCart ? (
              <button onClick={() => add(product)}>
                Add
              </button>
            ) : (
              <button onClick={() => remove(product.id)}>
                Remove
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
