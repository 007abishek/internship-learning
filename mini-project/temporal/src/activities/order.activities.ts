export async function reserveInventory(productId: string) {
  console.log("Reserving inventory for", productId);
  return true;
}

export async function processPayment(amount: number) {
  console.log("Processing payment of", amount);
  return true;
}
