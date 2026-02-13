import { Client, Connection } from '@temporalio/client';

async function run() {
  // 1️⃣ Create connection first
  const connection = await Connection.connect({
    address: 'localhost:7234', // default Temporal port is 7233
  });

  // 2️⃣ Pass connection to Client
  const client = new Client({ connection });

  const handle = await client.workflow.start('orderWorkflow', {
    taskQueue: 'mastery-queue',
    args: [500],
    workflowId: `mastery-${Date.now()}`,
  });

  console.log("Workflow started:", handle.workflowId);

  const result = await handle.result();
  console.log("Result:", result);
}

run().catch(console.error);
