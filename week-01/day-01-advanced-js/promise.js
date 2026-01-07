/**
 * Promise Example
 * Cleaner alternative to callback hell
 */

function fakeRequestPromise(task, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
  
        if (success) {
          console.log(task);
          resolve();
        } else {
          reject("Something went wrong");
        }
      }, delay);
    });
  }
  
  fakeRequestPromise("Task 1 done", 1000)
    .then(() => fakeRequestPromise("Task 2 done", 1000))
    .then(() => fakeRequestPromise("Task 3 done", 1000))
    .then(() => console.log("All tasks completed"))
    .catch(error => console.error(error));
  