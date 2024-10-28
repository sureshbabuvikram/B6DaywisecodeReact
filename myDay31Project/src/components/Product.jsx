import React, { useContext } from 'react';
import { cartContext } from './CartProvider';

const Product = () => {
    const{addToCart} = useContext(cartContext)
    const products=[{id:1,name:"laptop",price:10000},
        {id:2,name:"iPhone",price:50000},
        {id:3,name:"tap",price:7000}]
    return (
        <div >
            <h1 style={{textAlign:"center"}} >Products</h1>
             <div style={{display:"flex", gap:"40px"}}>
            {products.map((item)=>(
                <>
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                    <button onClick={()=>{addToCart(item)}} >Add to cart</button>
                </div>
            </>))}
        </div>
        </div>
       
    );
};

export default Product;