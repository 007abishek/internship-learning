import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import "../styles/product.css";

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
        if (!res.ok) throw new Error();

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
    return <p className="product-status">Loading products...</p>;
  }

  if (error) {
    return <p className="product-error">{error}</p>;
  }

  return (
    <div className="product-container">
      {user?.isAnonymous && (
        <p className="product-guest">
          Login to unlock full product features
        </p>
      )}

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
            />

            <h4>{product.title}</h4>
            <p className="product-price">₹ {product.price}</p>

            {!user?.isAnonymous && (
              <button className="wishlist-btn">
                Add to Wishlist
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
