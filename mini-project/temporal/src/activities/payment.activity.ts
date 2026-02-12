export async function processPayment(amount: number): Promise<boolean>{
    console.log(`Processing payment of ${amount}`);
   // simulate failure
    if(Math.random() < 0.5){
        throw new Error("Payment failed");
    }
    // throw new Error("Always fail");

    return true;
}