import React from 'react';

const Mens = () => {
    let price=5000;
    const handleSumit=()=>{
        console.log("simple function call");
        
    }
    return (
        <div>
            <p style={{backgroundColor:"green"}} >Mens Comp</p>
            <button onClick={handleSumit} > Click</button>
            {price}
        </div>
    );
};

export default Mens;