export async function reserveInventory(productId: string):Promise<boolean>{
    console.log(`Reserving inventory for  ${productId}`);
    return true;
}
export async function releaseInventory(productId: string):Promise<void>{
    console.log(`Releasing inventory for ${productId}`);
}
//activities run outside workflow
//They can fail
//They are retried automatically