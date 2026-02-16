// src/labs/04-child-workflow/parentWorkflow.ts

import { executeChild } from '@temporalio/workflow';
import type { ChildWorkflow } from './childWorkflow';

export async function ParentWorkflow(
  orderId: string,
  amount: number
){
  console.log(`parent workflow started for order: ${orderId}`);

  try{
    const paymentResult=await executeChild<typeof ChildWorkflow>(
      'ChildWorkflow',
      {
        args: [orderId,amount],
        workflowId: `child-${orderId}`,
        
      }
    );

    return{
      orderId,
      status: paymentResult,
    };
  }catch(error){
    return{
      orderId,
      status: 'Payment Failed',
      reason: (error as Error).message,
    };
  }
}