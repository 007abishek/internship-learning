import React,{useState,useRef} from "react";

const App=()=>{
  const[input,setInput]=useState("");
  const inputRef=useRef();

  console.log("Getting rendered");

  useEffect(()=>{
    inputRef.current=input;
  },[input]);


  const display =() =>{
     console.log(inputRef.current);
  };
  return(
   <div>
     <h1>Input</h1>
     <input  
        ref={inputRef}
        type="text" 
        value={input} 
        onChange={(event)=>setInput(event.target.value) }
     />
     <p>My name is {input}</p>
     <p>my name is {inputRef.current}</p>
     <button onClick={display} > show Input</button>
    </div>
  );
};

export default App;