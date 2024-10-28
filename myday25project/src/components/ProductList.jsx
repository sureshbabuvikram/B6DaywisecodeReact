import React from 'react';

const ProductList = (props) => {
    return (
        <div>
            <h1>Product list</h1>
            <li>{props.id}</li>
            <li>{props.name}</li>
            <li>{props.price}</li>
            {/* <li>{props.category}</li> */}
        </div>
    );
};

export default ProductList;