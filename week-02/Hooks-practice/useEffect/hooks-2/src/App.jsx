import React from "react";
import {useEffect} from "react";
import {useState} from "react";

const App =() =>{
  const [num1,setNum1]=useState(100);
  const [num2,setNum2]=useState(1000);
  useEffect(()=>{
    setNum1(200);
    
    console.log("from useEffect")
    return ()=>{
      setNum1(100); 
      console.log("memory cleaned");
    }
  },[num1,num2]); 

  console.log("num1",num1);

  return (
  <div> 
    <h1>{num1}</h1>
    <button onClick={()=>setNum1((curr)=>curr+1)}>ADD</button>
    <h1>{num2}</h1>
    <button onClick={()=>setNum2((curr)=>curr+1)}>ADD</button>
  </div>
  );
};

export default App;