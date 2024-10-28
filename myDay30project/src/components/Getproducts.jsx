import React from 'react';
import './GetProducts.css';

const Getproducts = ({products}) => {
    return (
        <div className='product-container' >
            {products.map((item)=>(
                <>
                <div key={item.id} className='product-card'>
                    <img src={item.Pimg} alt="" style={{height:"200px", width:'250px'}} />
                    <h3>{item.id}</h3>
                    <h3>{item.Pname} : {item.Pprice}</h3>
                </div>
                </>
            ))}
            
        </div>
    );
};

export default Getproducts;