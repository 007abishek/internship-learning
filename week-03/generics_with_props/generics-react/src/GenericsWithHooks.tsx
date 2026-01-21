import React,{useEffect,useRef,useState} from "react";
//1.usestate with generics
function UseStateExample(){
    const [numbers,setNumbers]=useState<number[]>([]);

    useEffect(()=>{
        setNumbers([1,2,3]);
    },[]);

    return <p>Numbers: {numbers.join(",")}</p>
}


export default function GenericsWithHooks(){
    return (
        <div style={{padding: 20}}>
            <h2>Generics With hooks</h2>
            <UseStateExample/>
            <UnionStateExample/>
            <RefExample/>
            <CallbackExample/>

        </div>
    );
}

//2.useState with union types

function UnionStateExample(){
    const[value,setValue]=useState<number |null>(null);

    useEffect(()=>{
        setValue(10);
    },[]);

    return <p>Value: {value ?? "Not set"}</p>;
}


//3. useRef with Generics (DOM)

function RefExample(){
    const inputRef=useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[]);

    return <input ref={inputRef} placeholder="Focus me"/>;
}

//4.useCallback with Generics

function CallbackExample(){
    const handleValue=<T,>(value:T)=>{
        console.log(value);
    };
    handleValue("Hello");
    handleValue(123);

    return <p>Check Console</p>;
}