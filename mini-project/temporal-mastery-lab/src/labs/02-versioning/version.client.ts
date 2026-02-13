import { Client, Connection } from '@temporalio/client';

async function run() {
  try {
    console.log("🔌 Connecting to Temporal on 127.0.0.1:7234...");

    const connection = await Connection.connect({
      address: '127.0.0.1:7234',
    });

    const client = new Client({ connection });

    console.log("🚀 Starting Version Workflow...");

    const result = await client.workflow.execute('versionWorkflow', {
      taskQueue: 'version-queue',
      workflowId: 'version-workflow-' + Date.now(),
    });

    console.log("✅ Workflow result:", result);

  } catch (error) {
    console.error("❌ Client failed:", error);
  }
}

run();
