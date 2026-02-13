import { Connection, Client } from '@temporalio/client';
import { continueAsNewWorkflow } from './workflow';

async function run() {

  const connection = await Connection.connect({
    address: '127.0.0.1:7234', // 🔥 Explicit port
  });

  const client = new Client({
    connection,
  });

  await client.workflow.start(continueAsNewWorkflow, {
    workflowId: 'continue-as-new-demo',
    taskQueue: 'continue-as-new-lab',
    args: [0],
  });

  console.log('Workflow started');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
