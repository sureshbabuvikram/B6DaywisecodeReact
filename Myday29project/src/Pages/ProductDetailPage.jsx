import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetailPage = () => {
    const navigate = useNavigate()
    const handleSubmit=()=>{
        navigate('/cart')
    }
    return (
        <div>
            <h1>product detail page</h1>
            <button onClick={handleSubmit} >cartpage</button>
        </div>
    );
};

export default ProductDetailPage;