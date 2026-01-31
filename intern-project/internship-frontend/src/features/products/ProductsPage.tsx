import { useGetProductsQuery } from "./productApi";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "./cartSlice";

export default function ProductsPage() {
  const { data } = useGetProductsQuery();
  const dispatch = useAppDispatch();

  return (
    <div className="p-6">
      {data?.map((p) => (
        <div key={p.id}>
          {p.title}
          <button
            onClick={() => dispatch(addToCart(p))}
            className="ml-2 bg-black text-white px-2"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
