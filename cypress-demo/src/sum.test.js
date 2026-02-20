import { sum } from "../sum";

test("testing function",()=>{
    const result=sum(3,5);
      
    expect(result).toBe(8);

});