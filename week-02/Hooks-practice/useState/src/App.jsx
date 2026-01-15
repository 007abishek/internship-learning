import React,{useState} from "react";
const App=()=>{

  const [state,setState]=useState(1);

  const handleAdd=()=>{
    setState(x=>x+1);
  };


return (
<div>
  <h1>{state}</h1>
  <button onClick={handleAdd}>Add</button>
</div>
)
};

export default App;