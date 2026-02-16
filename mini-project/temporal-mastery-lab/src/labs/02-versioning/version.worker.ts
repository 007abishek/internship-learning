import { Worker, NativeConnection } from '@temporalio/worker';
import * as activities from './version.activities';

async function run() {
  try {
    console.log(" Connecting to Temporal on 127.0.0.1:7234...");

    const connection = await NativeConnection.connect({
      address: '127.0.0.1:7234', // matches Docker port mapping
    });

    const worker = await Worker.create({
      connection,
      workflowsPath: require.resolve('./version.workflow'),
      activities,
      taskQueue: 'version-queue',
    });

    console.log(" Version Worker Running on 'version-queue'");
    await worker.run();

  } catch (error) {
    console.error(" Worker crashed:", error);
  }
}

run();
