import { Link } from "react-router-dom";
import AppLayout from "../../components/layout/AppLayout";
import { useGetProductsQuery } from "./productApi";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "./cartSlice";
import { store } from "../../app/store";
export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <AppLayout>
        <p>Loading products...</p>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                className="h-40 mx-auto"
              />
              <h2 className="mt-2 font-medium">
                {product.title}
              </h2>
            </Link>

            <p className="font-bold mt-1">
              ₹ {product.price}
            </p>

            <button
  onClick={() => {
    console.log("CLICKED");
    dispatch(addToCart(product));

    console.log(
      "STATE AFTER DISPATCH:",
      store.getState().cart.items
    );
  }}
>
  Add to Cart
</button>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
