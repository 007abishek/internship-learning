import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";

// --------------------
// Types
// --------------------
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

// --------------------
// Component
// --------------------
const ProductSection = () => {
  const { user } = useAuth();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.onLine) {
      setError("You are offline. Please check your internet connection.");
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await res.json();
        setProducts(data);
      } catch {
        setError("Unable to load products. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return (
      <div>
        <h3>Products</h3>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Products</h3>

      {user?.isAnonymous && (
        <p style={{ color: "orange" }}>
          Login to unlock full product features
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <img
              src={product.image}
              alt={product.title}
              width={80}
              loading="lazy"
            />
            <h4>{product.title}</h4>
            <p>₹ {product.price}</p>

            {!user?.isAnonymous && <button>Add to Wishlist</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
