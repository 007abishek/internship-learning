import { Client, Connection } from '@temporalio/client';

async function run() {
  const connection = await Connection.connect({
    address: 'localhost:7234', // ✅ FIXED PORT
  });

  const client = new Client({ connection });

  const result = await client.workflow.execute('randomWorkflow', {
    taskQueue: 'determinism-queue',
    workflowId: 'random-' + Date.now(),
  });

  console.log("Workflow Result:", result);
}

run().catch(console.error);
