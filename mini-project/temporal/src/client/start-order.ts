import { Client } from "@temporalio/client";

async function run() {
  const client = new Client();

  const handle = await client.workflow.start("orderWorkflow", {
    args: ["product-1",100],
    taskQueue: "order-queue",  // 🔥 MUST match worker
    workflowId: `order-${Date.now()}`,
  });

  const result = await handle.result();
  console.log(result);
}

run();


//workflow start
//workflowId (idempotency)
//result handling

