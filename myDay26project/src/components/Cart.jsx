import React, { useState } from 'react';

const Cart = () => {
    const[item, setitem]= useState(0)
    return (
        <div>
            <h1>Cart Comp</h1>
            <h1> cart value-{item}</h1>
            <button onClick={()=>{setitem(val=>val+1)}} >Add Item</button>
            <button onClick={()=>{setitem(val=>val-1)}} >Remove Item</button>
        </div>
    );
};

export default Cart;