import React, { useState } from 'react';
import StateExample from './components/StateExample';
import Cart from './components/Cart';
import UseEffectExample from './components/UseEffectExample';
import UseEffectApi from './components/UseEffectApi';
import UseEffectRealTimt from './components/UseEffectRealTimt';
import Form from './components/Form';

const App = () => {
  const[comp, setComp]= useState(true)

  const handleSubmit=()=>{
    setComp(!comp)
  }
  return (
    <div>
      {/* <h1>App Comp</h1> */}
      {/* <StateExample /> */}
      {/* <Cart /> */}

      {/* <UseEffectExample /> */}
      {/* <UseEffectApi /> */}

      {/* <button onClick={handleSubmit} >{comp ? "mounting" : "unmount"}</button> */}
      {/* {comp && <UseEffectRealTimt />} */}
      {/* <UseEffectRealTimt /> */}

      <Form />
    </div>
  );
};

export default App;