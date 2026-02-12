import { Connection, Client } from '@temporalio/client';
import { orderWorkflow } from '../workflows/order.workflow';

async function run() {
  const connection = await Connection.connect();
  const client = new Client({ connection });

  const orderId = `order-${Date.now()}`;

  const handle = await client.workflow.start(orderWorkflow, {
    args: [orderId, 'product-1', 100],   // ✅ ALL 3 ARGS
    taskQueue: 'order-queue',
    workflowId: orderId,
  });

//signal handling check
  // console.log("workflow started:",orderId);
  //wait 2 seconds then cancel
  // setTimeout(async()=>{
  //   console.log("Sending cancel again...");
  //   await handle.signal('cancelorder');
  // },2000);

  
//query handling check
   while(true){ 
    const status=await handle.query('orderStatus');
    console.log("Current Status: ", status);

    if(status === 'COMPLETED' || status==='FAILED'){
         break;
    }
    await new Promise(res => setTimeout(res,1000));
   }
   const result=await handle.result();
   console.log("Final Result:",result);
}

run();
