//install dependencies

npm init -y
npm install @temporalio/client @temporalio/worker @temporalio/workflow
npm install ts-node typescript


//today learned
workflow retry policy

inside our workflow we have

const activities = proxyActivities<typeof payment>({
  startToCloseTimeout: '5 seconds',
  retry: {
    maximumAttempts: 3,
  },
});


//workflow is durable

even if 
   worker crashes
   process restarts
   machine restarts

   temporal will continue from last state

   because of deterministic replay

//retry happends  server side

they are happening in temporal server

worker just executes attempt number given by server

this simulates real payment service.
//payment api fails twice
//network unstanle
//third attempt succeeds

temporal handles it automatically

//Deterministic

workflow code must  be pure and deterministic

inside workflow: 
    1.) no math.randowm()
    2.) no date.now()
    3.) no external api calls
    4.) db calls
    5.) no mutable global state


workflows are replayed

temporal rebuilds state by replaying workflow from history

//workflow=state machine reconstructed from events
