import React, { createContext, useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
// import Compenent1 from './components/Compenent1';
// import Component2 from './components/Component2';

// export const myContext = createContext()

const App = () => {
  // const[contextValue, setContextValue] = useState(10)
  // const[name, setName] = useState("suresh")
  return (
    <div>
      {/* <h1>App Comp</h1> */}
      {/* {contextValue}
      <myContext.Provider value={[contextValue, setContextValue]} >
        <Compenent1 />
        <Component2 />
      </myContext.Provider>
      <myContext.Provider value={[name, setName] } >
      </myContext.Provider> */}

<Product />
<Cart />




    </div>
  );
};

export default App;