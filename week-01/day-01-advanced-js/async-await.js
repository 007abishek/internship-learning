/**
 * async / await Example
 
 */

function fakeRequestPromise(task, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(task);
        resolve();
      }, delay);
    });
  }
  
  async function runTasks() {
    try {
      await fakeRequestPromise("Task 1 done", 1000);
      await fakeRequestPromise("Task 2 done", 1000);
      await fakeRequestPromise("Task 3 done", 1000);
      console.log("All tasks completed");
    } catch (error) {
      console.error(error);
    }
  }
  
  runTasks();
  