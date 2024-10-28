import React from 'react';
import ProductCard from './ProductCard';

const Product = (props) => {
    const productList = [
        {id:1, name:"laptop", price:10000},
        {id:2, name:"iphone", price:50000},
    ]
    return (
        <div>
            {productList.map((product)=>(
                <ProductCard key={product.id} name={product.name} price={product.price} cartFunction={props.cartFunction} />
            ))}
        </div>
    );
};

export default Product;