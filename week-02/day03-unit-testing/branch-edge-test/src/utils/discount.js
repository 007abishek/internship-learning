export function calculateDiscount(price, type) {
    if (price <= 0) {
      return 0;
    }
  
    if (type === "student") {
      return price * 0.2;
    }
  
    if (type === "senior") {
      return price * 0.3;
    }
  
    return price * 0.1;
  }
  