import React from "react";


const Navbar=()=>{

    return (
    <div>
        <h1>Grony </h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
    

        </ul>
    </div>
    );
};

export default Navbar;