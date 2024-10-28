import React from 'react';

const ProductCard = (props) => {
    const addToCart = ()=>{
        const proDetail = {
            name:props.name,
            price:props.price        }

    props.cartFunction(proDetail)

    }

    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <button onClick={addToCart} >add to cart</button>
        </div>
    );
};

export default ProductCard;