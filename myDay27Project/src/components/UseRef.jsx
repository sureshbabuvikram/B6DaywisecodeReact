import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    //real time - useRef
    const iRef = useRef()
    const val = useRef(0)

    const[inputValue, setInputValue] = useState('')

    useEffect(()=>{
        iRef.current.focus()
    },[])

    const handleChange=(e)=>{
        console.log("handle change");        
        setInputValue(e.target.value)
        val.current +=1
        console.log(val.current);
        console.log(iRef.current.value);       
    }

    return (
        <div>
            <input type="text" placeholder='Email' ref={iRef} />
            <input type="text" placeholder='password' onChange={handleChange}  />
            {val.current}
        </div>
    );
};

export default UseRef;