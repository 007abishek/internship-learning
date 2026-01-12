import {useState} from "react";
const EventHandlers =() =>{
    const [count,setcount]=useState(0);
    const handleIncrement=()=>{
        setcount(count+1);
    };

    return(
        <div>
            <h2>Event Handlers</h2>
            <p>Count:{count}</p>
            <button onClick={handleIncrement}>
                Increment

            </button>
        </div>
    );
};
export default EventHandlers;