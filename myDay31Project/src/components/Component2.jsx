import React, { useContext } from 'react';
import { myContext } from '../App';
import Component3 from './Component3';

const Component2 = () => {
    const[contextValue, setContextValue] =useContext(myContext)

    const handleSubmit=()=>{
        setContextValue(val=>val-1)
    }
    return (
        <div>
            <h1>Comp2 - {contextValue}</h1>
            <button onClick={handleSubmit} >click</button>

            <Component3 />
        </div>
    );
};

export default Component2;