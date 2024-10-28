import React, { useContext } from 'react';
import { myContext } from '../App';

const Compenent1 = () => {
    const[contextValue, setContextValue] = useContext(myContext)
    const handleSubmit=()=>{
        setContextValue(val=>val+1)
    }
    return (
        <div>
            <h1>Comp1 - {contextValue}</h1>
            <button onClick={handleSubmit} >click</button>
        </div>
    );
};

export default Compenent1;