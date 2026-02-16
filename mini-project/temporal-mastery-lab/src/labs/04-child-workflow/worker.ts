import { Worker } from '@temporalio/worker';
import { NativeConnection } from '@temporalio/worker';

async function run(){
  const connection=await NativeConnection.connect({
    address: '127.0.0.1:7234',
  });

  const worker=await Worker.create({
    connection,
    workflowsPath: require.resolve('./parentWorkflow'),
    taskQueue: 'child-lab',
  });

  console.log('worker started...');
  await worker.run();


}

run().catch(console.error);