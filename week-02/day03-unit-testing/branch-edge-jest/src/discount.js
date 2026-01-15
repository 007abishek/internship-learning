function calculateDiscount(price, userType) {
    if (price <= 0) return 0;
  
    if (userType === "student") {
      return price * 0.2;
    }
  
    if (userType === "senior") {
      return price * 0.3;
    }
  
    return price * 0.1;
  }
  
  module.exports = { calculateDiscount };
  