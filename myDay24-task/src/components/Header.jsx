import React from 'react';
import './Header.css'

const Header = () => {

    const handleSumit=()=>{
        console.log("button event");
        
    }
    const headingTab = {
        backgroundColor:"yellow",
        color:"green"
    }


    return (
        <div style={{backgroundColor:"green" }}>
            <h1 style={headingTab}>Header Comp</h1>
            <button  onClick={handleSumit} >Click me</button>
        </div>
    );
};

export default Header;