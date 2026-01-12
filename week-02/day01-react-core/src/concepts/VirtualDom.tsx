import {useState} from "react";

const VirtualDom=()=>{
    const [count,setCount]=useState(0);

    return (
        <div>
            <h2> virtual Dom</h2>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>
                Increment
            </button>       
        </div>
    );
};
export default VirtualDom;