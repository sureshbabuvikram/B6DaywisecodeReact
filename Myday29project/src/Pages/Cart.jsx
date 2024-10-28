import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Cart page</h1>         
            <button onClick={()=>{navigate('/')}} >Home</button>   
        </div>
    );
};

export default Cart;