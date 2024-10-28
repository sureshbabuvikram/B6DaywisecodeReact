import React from 'react';
import ProductList from './components/ProductList';
import PushPop from './components/PushPop';

const App = () => {
  // const products=[
  //   {id:1001, name:"iphone", price:50000 , category:"Electronics"},
  //   {id:1002, name:"headset", price:5000 , category:"Electronics"},
  //   {id:1003, name:"bat", price:500 , category:"Sports"},
  //   {id:1004, name:"ball", price:50, category:"Sports"},    
  // ]

  // const eleCatElectronics = products.filter((item)=> item.category === "Electronics")
  // const eleCatSport = products.filter((item)=> item.category === "Sports")

  // console.log(eleCatElectronics);
  // console.log(eleCatSport);
  
  // const handleSubmit=(e)=>{ 
  //   const catValue = e.target.value  //Electronics sports
  //   const catArr = products.filter((item)=> item.category === catValue)
  //   console.log(catArr);

  //   const totalPrice = catArr.reduce((tot,product)=>tot + product.price , 0) // 0 + 50000 , 50000+5000
  //   console.log(totalPrice);
    
  // }
  return (
    <div>
      {/* <h1>App Comp</h1>
      {products.map((item)=>(
        <ProductList key={item.id} id={item.id} name={item.name} price={item.price} />
      ))}

      <button value="Electronics" onClick={(e)=>handleSubmit(e)} >Electronics</button>
      <button value="Sports" onClick={(e)=>handleSubmit(e)} >Sports</button> */}

    <PushPop />
    </div>
  );
};

export default App;