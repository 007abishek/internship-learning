import { 
   proxyActivities, 
   defineSignal, 
   setHandler, 
   defineQuery,sleep } from '@temporalio/workflow';

const { 
   createOrder,
   reserveInventory,
   releaseInventory,
   processPayment,
   sendNotification,
   updateOrderStatus
  } = proxyActivities<any>({
          startToCloseTimeout: '1 minute',
          retry:{
            initialInterval: '1 second', //first retry wait
            backoffCoefficient: 2,       //multiply delay by 2
            maximumInterval: '10 seconds', // max delay
            maximumAttempts: 4,           ///total tries
  },
});

//SIGNAL
export const cancelOrderSignal=defineSignal('cancelOrder');

//QUERY
export const orderStatusQuery= defineQuery<string>('orderStatus');


export async function orderWorkflow(
    orderId:string,
    productId: string, 
    amount: number
  ) {
  let status='CREATED';
  let cancelled=false;


  //SIGNAL handler
  setHandler(cancelOrderSignal,()=>{
    cancelled=true;
  });

  //query handler

  setHandler(orderStatusQuery, ()=> status);



  //1 create order in db
  await  createOrder(orderId,productId,amount);
  try{
   //2 reserve inventory
  status='RESERVING';
  await updateOrderStatus(orderId,status);
  await sleep('3 seconds');
  await reserveInventory(productId);

  if(cancelled) throw new Error('Order Cancelled');
   

  //3 process payment
  status='PAYING';
  await updateOrderStatus(orderId,status);
  await processPayment(amount);

  if(cancelled) throw new Error('Order Cancelled');


  //4 completed
  status='COMPLETED';
  await updateOrderStatus(orderId,status);
  await sendNotification("Order successful have a good day");

  
  

  return status;
}catch(error){
    
  //if cancelled manually
  if(cancelled){
    status='CANCELLED';
    await releaseInventory(productId);
    await updateOrderStatus(orderId,status);
    return status;
  }

  //if payment failed
  
  //compensation logic
  status='FAILED';
  await releaseInventory(productId);
  await updateOrderStatus(orderId,status);

  return status;
}
}
