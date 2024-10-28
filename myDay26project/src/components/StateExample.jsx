import React, { useState } from 'react';

const StateExample = () => {
    let a=10;

    const [data , setData ] = useState(100)  // data = 100 , setData() -> update

    const handleSubmit=()=>{
        a=a+1;
        console.log(a);//        
    }

    const handleStateSubmit=()=>{
        setData(val => val + 10)
        console.log(data);        
    }
    return (
        <div>
            <h1>State Examples</h1>
            {a}
            <button onClick={handleSubmit}>click</button>
            {data}
            <button onClick={handleStateSubmit}>click</button>
        </div>
    );
};

export default StateExample;