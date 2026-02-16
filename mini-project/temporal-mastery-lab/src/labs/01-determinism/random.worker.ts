import { Worker, NativeConnection } from '@temporalio/worker';

async function run() {
  console.log(" Starting Determinism Worker...");

  const connection = await NativeConnection.connect({
    address: 'localhost:7234', // your docker port
  });

  const worker = await Worker.create({
    connection,
    workflowsPath: require.resolve('./random.workflow'), //  correct path
    taskQueue: 'determinism-queue',
  });

  console.log(" Worker Running...");
  await worker.run();
}

run().catch((err) => {
  console.error(" Worker crashed:", err);
});
