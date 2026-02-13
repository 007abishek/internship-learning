import { proxyActivities, patched } from '@temporalio/workflow';

const { stepOne, stepTwo } = proxyActivities<any>({
  startToCloseTimeout: '1 minute',
});

export async function versionWorkflow() {
  console.log("Running workflow...");

  await stepOne();
//   await stepTwo(); //break versioning

  // 🔥 VERSION SAFE CHANGE
//   if (patched('add-step-two')) {
//     await stepTwo();
//   }

  if(patched('add-step-two')){
    await stepTwo();
  }

  return "completed safely";
}
