import {useState} from "react";
const ControlledInput=()=>{
    const[name,setName]=useState("");

    return(
        <div>
            <h2>Controlled Input</h2>
            <input type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter name"
            />
            <p>You typed: {name}</p>

        </div>
    );
};

export default ControlledInput;