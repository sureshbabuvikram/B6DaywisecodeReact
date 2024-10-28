import React, { useReducer, useState } from 'react';
import ReducerAction from './ReducerAction/ReducerAction';

const UseReducer = () => {
    const [state, dispatch] = useReducer(ReducerAction , 0);   

    return (
        <div>
            <button onClick={()=>{dispatch({type:"ADD" , payload:2})}} >ADD</button>
            <button onClick={()=>{dispatch({type:"SUB" , payload:4})}} >SUB</button>
            <div>
                {state}
            </div>
        </div>

    );
};

export default UseReducer;