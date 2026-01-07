/**
 * Callback Hell (Pyramid of Doom)
 * Shows why callbacks are hard to maintain
 */
function fakeRequest(task,delay,callback){
    setTimeout(()=>{
        console.log(task);
        callback();
    },delay);
}
  
fakeRequest("Task 1 done",1000,()=>{
    fakeRequest("Task 2 done",1000,()=>{
        fakeRequest("Task 3 done",1000,()=>{
            fakeRequest("Task 4 done",1000,()=>{
                console.log("All tasks completed");
            });
        });
    });
});