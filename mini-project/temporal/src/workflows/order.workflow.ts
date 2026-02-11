import { proxyActivities } from '@temporalio/workflow';

const { reserveInventory, processPayment } = proxyActivities<{
  reserveInventory: (productId: string) => Promise<boolean>;
  processPayment: (amount: number) => Promise<boolean>;
}>({
  startToCloseTimeout: '1 minute',
});

export async function orderWorkflow(productId: string, amount: number) {
  await reserveInventory(productId);
  await processPayment(amount);

  return "Order Completed";
}
