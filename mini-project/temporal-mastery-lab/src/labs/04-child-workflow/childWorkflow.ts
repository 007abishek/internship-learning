// src/labs/04-child-workflow/childWorkflow.ts

import { sleep } from '@temporalio/workflow';

export async function ChildWorkflow(
  orderId: string,
  amount: number
): Promise<string>{
  console.log(`child workflow started for order: ${orderId}`);

  //simulate long running process
  await sleep('2 seconds');

  if(amount<=0){
    throw new Error('Invalid payment amount');
  }

  return `payment successfull for order ${orderId}`;
}
