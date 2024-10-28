import React, { useContext } from 'react';
import { cartContext } from './CartProvider';

const Cart = () => {
    const { cart } = useContext(cartContext)
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Cart Page</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }} >

                {cart.map((item) => (<>
                    <div key={item.id} >
                        <h3>{item.name}</h3>
                        <h2>{item.price}</h2>
                    </div>
                </>))}

            </div>
        </div>

    );
};

export default Cart;