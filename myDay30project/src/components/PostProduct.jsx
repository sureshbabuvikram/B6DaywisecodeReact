import axios from 'axios';
import React, { useState } from 'react';

const PostProduct = ({fetchData}) => {
    const[Pname, setPname] = useState('')
    const[Pprice, setPprice] = useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response =await axios.post("https://671a482eacf9aa94f6aa015e.mockapi.io/products",
        
                {
                    "Pname": Pname,
                    "Pprice": Pprice,                
                }
            )
            console.log(response.data);            
            fetchData();
        } catch (error) {
            console.log(error);
            
        }
       
    }

   
    return (
        <div>
            <h1>Create Products</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={Pname} placeholder='Pname'
                 onChange={(e)=>{setPname(e.target.value)}} />

                 <input type='number' value={Pprice} placeholder='Pprice'
                 onChange={(e)=>{setPprice(e.target.value)}} />
            <button type='submit' >Submit</button>
            </form>
        </div>
    );
};

export default PostProduct;