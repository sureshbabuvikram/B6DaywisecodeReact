import React from 'react';
import TodoList from './components/TodoList';
import Product from './components/Product';
// import Header from './components/Header';
// import LandingPage from './components/LandingPage';

const App = () => {
  let initialcartValue = 0;
  
  const cartFunction =(product)=>{
    console.log(product);
    initialcartValue +=1
    console.log(initialcartValue);    
  }
  return (
    <>
      {/* <h1> App Comp</h1> */}
      {/* <Header /> */}
      {/* <LandingPage /> */}

      {/* <TodoList /> */}

      <Product cartFunction={cartFunction} />

    </>
  );
};

export default App;