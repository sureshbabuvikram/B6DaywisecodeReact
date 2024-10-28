import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Getproducts from './components/Getproducts';
import PostProduct from './components/PostProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';

const App = () => {
  const[products, setProducts]= useState([])

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async()=>{
    try {
      const response = await axios.get('https://671a482eacf9aa94f6aa015e.mockapi.io/products')
      setProducts(response.data)
      console.log(products);
    } catch (error) {
      console.log(error);      
    }     
  }
  console.log(products);

  return (
    <div>
      <h1>App</h1>
      <Getproducts products={products} />
      <PostProduct fetchData={fetchData} />
      <UpdateProduct fetchData={fetchData} />
      <DeleteProduct fetchData={fetchData}/>
    </div>
  );
};

export default App;