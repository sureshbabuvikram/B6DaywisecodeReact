import React, { useContext } from 'react';
import { myContext } from '../App';
import Component4 from './Component4';

const Component3 = () => {
    const[contextValue, setContextValue] = useContext(myContext)
    const handleSubmit=()=>{
        setContextValue(0)
    }
    return (
        <div>
            <h1>Comp3 - {contextValue}</h1>
            <button onClick={handleSubmit} >click</button>
            <Component4 />
        </div>
    );
};

export default Component3;