import { Worker } from '@temporalio/worker';
import * as inventory from '../activities/inventory.activity';
import * as payment from  '../activities/payment.activity';
import * as notification from '../activities/notification.activity';
import * as orderActivities from '../activities/order.activities';
import * as hasura from '../activities/hasura.activity';
async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('../workflows/order.workflow'),
    activities:{
       ...hasura,
       ...inventory,
       ...payment,
       ...notification,
       ...orderActivities,
    },
    taskQueue: 'order-queue',
  });
  console.log("Worker Started...");
  await worker.run();
}

run().catch(console.error);
