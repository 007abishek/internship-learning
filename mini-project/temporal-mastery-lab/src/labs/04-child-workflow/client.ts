// src/labs/04-child-workflow/client.ts

import { Connection, Client} from '@temporalio/client';


async function run(){
  const connection =await Connection.connect({
    address: '127.0.0.1:7234',

  });

  const client=new Client({connection});

  const handle=await client.workflow.start('ParentWorkflow',{
     args:['order-200',1000],
     taskQueue: 'child-lab',
     workflowId: 'parent-order-200',
  });

  const result=await handle.result();

  console.log('Final Result:',result);
}

run().catch((err) =>{
  console.error('Error:',err);
  process.exit(1);
});