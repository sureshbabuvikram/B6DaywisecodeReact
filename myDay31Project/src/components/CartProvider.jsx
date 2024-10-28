import React, { createContext, useState } from 'react';

export const cartContext = createContext();
const CartProvider = ({children}) => {
    const[cart, setCart] = useState([])

    const addToCart=(product)=>{
        setCart((preVal)=>[...preVal, product])
    }
    console.log("cart", cart);
    

    return (
        <div>
            <cartContext.Provider value={{cart, addToCart}} >
                {children}
            </cartContext.Provider>
        </div>
    );
};

export default CartProvider;