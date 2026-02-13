let attemptCounter=0;

export async function processPayment(amount: number){
    attemptCounter++;

    console.log(`Payment attempt ${attemptCounter}`);

    if(attemptCounter<3){
        throw new Error("simulated payment failure");
        
    }
    console.log("Payment succeeded");
    return true;

}