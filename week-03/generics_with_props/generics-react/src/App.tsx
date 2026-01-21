import React from "react";
import GenericsWithHooks from "./GenericsWithHooks";
type ListProps<T>={
  items:T[];
}


function List<T>({items}:ListProps<T>){
  return (
    <ul>
      {items.map((item,i)=>(
        <li key={i}>{String(item)}</li>
      ))}
    </ul>
  );
}

export default function App(){
  return (
    <div>
      <h2>React Generics Running</h2>
      <List items={[1,2,3]}/>
      <List items={["A","B","C"]}/>

      <GenericsWithHooks/>
      
    </div>
  );
}