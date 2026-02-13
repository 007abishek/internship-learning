import { Worker, NativeConnection } from '@temporalio/worker';
import * as payment from '../activities/payment.activity';

async function run() {
  // ✅ Connect to correct host port (7234)
  const connection = await NativeConnection.connect({
    address: 'localhost:7234',
  });

  const worker = await Worker.create({
    connection, // 👈 just added this
    workflowsPath: require.resolve('../workflows/order.workflow'),
    activities: {
      ...payment,
    },
    taskQueue: 'mastery-queue',
  });

  console.log("🚀 Worker started on mastery-queue");
  await worker.run();
}

run().catch((err) => {
  console.error("Worker failed:", err);
});
