/**
 * Callback Example
 * A function passed as an argument and executed later
 */

function onComplete() {
    console.log("Task completed successfully");
  }
  
function performTask(taskName, callback) {
console.log(`Starting: ${taskName}`);

setTimeout(() => {
    console.log(`Finished: ${taskName}`);
    callback();
}, 1000);
}

performTask("Download File", onComplete);
  