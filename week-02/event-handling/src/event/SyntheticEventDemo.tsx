import React from "react";

const SyntheticEventDemo=()=>{
    const handleClick=(event: React.MouseEvent<HTMLButtonElement>)=>{
        console.log("Event type:",event.type);
        console.log("Target:",event.target);
    };

    return(
        <div>
            <h2>Synthetic Event</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};
export default SyntheticEventDemo;
