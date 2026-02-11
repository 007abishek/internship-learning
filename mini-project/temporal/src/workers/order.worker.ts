import { Worker } from '@temporalio/worker';
import * as activities from '../activities/order.activities';

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('../workflows/order.workflow'),
    activities,
    taskQueue: 'order-queue',
  });

  await worker.run();
}

run().catch(console.error);
