import { sleep } from '@temporalio/workflow';

export async function randomWorkflow(): Promise<string> {
  const value = Math.random(); // ❌ Dangerous

  console.log("Random value:", value);

  await sleep('1 second');

  if (value > 0.5) {
    return "BIG";
  }

  return "SMALL";
}
