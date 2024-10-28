import React,{useState} from 'react';
import axios from 'axios';

const DeleteProduct = ({fetchData}) => {
    const[id , setId]= useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.delete(`https://671a482eacf9aa94f6aa015e.mockapi.io/products/${id}`)
            console.log(response.data);
             fetchData();           
            
        } catch (error) {
           console.log(error);
            
        }
    }
 
    return (
        <div>
            <h1>Delete products</h1>
            <form onSubmit={handleSubmit}>        

                 <input type='text' value={id} placeholder='Id' 
                 onChange={(e)=>{setId(e.target.value)}} />
            <button type='submit' >Submit</button>
            </form>
        </div>
    );
};

export default DeleteProduct;