import { proxyActivities } from '@temporalio/workflow';

const { processPayment } = proxyActivities<{
    processPayment:(amount: number) => Promise<boolean>;

}>({
    startToCloseTimeout:'1 minute',
    retry:{
        initialInterval: '1 second',
        backoffCoefficient: 2,

        maximumInterval: '10 seconds',
        maximumAttempts: 5,
        
    },
});

export async function orderWorkflow(amount: number){
    await processPayment(amount);
    return "order Completed";
}

