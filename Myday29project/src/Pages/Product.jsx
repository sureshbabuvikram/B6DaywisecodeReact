import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            <h1>Product Page</h1>
            <nav>
            <Link to='productdetail'>Product detail</Link>

            </nav>
            <Outlet />
        </div>
    );
};

export default Product;