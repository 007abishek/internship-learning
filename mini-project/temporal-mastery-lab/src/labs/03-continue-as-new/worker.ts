import { Worker } from '@temporalio/worker';
import { NativeConnection } from '@temporalio/worker';

async function run() {
  const connection = await NativeConnection.connect({
    address: '127.0.0.1:7234', // 🔥 Explicit port
  });

  const worker = await Worker.create({
    connection,
    workflowsPath: require.resolve('./workflow'),
    taskQueue: 'continue-as-new-lab',
  });

  console.log('Worker started...');
  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
