import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [count, setcount]= useState(0)
    const [item, setItem] = useState(0)
    console.log("outside log");
    
   useEffect(()=>{
    //mounting phase
    console.log("useEffect log");
    // setcount(val=>val+1)    
   },[item])
    return (
        <div>
            <h1>  Count value - {count}</h1>
            <h1>  Item value - {item}</h1>
            <button onClick={()=>{setcount(count+1)}} >cilck</button>
            <button onClick={()=>{setItem(item+1)}} >cilck</button>
        </div>
    );
};

export default UseEffectExample;