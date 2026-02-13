import { continueAsNew } from '@temporalio/workflow';

export async function continueAsNewWorkflow(
  iteration: number = 0
): Promise<string> {

  console.log("Iteration:", iteration);

  if (iteration >= 5) {
    console.log("Triggering Continue-As-New...");
    await continueAsNew<typeof continueAsNewWorkflow>(0);
    return "never reached";
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return continueAsNewWorkflow(iteration + 1);
}
