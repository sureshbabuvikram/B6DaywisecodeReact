import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import User from './Pages/User';
import UserDetailPage from './Pages/UserDetailPage';
import Condact from './Pages/Condact';
import Navbar from './components/Navbar';
import NoMatchRoute from './Pages/NoMatchRoute';
import Product from './Pages/Product';
import ProductDetailPage from './Pages/ProductDetailPage';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />   
          <Route path='/user'  element={<User />} />   
          <Route path='/user/:id' element={<UserDetailPage />} />  
          <Route path='/condact' element={<Condact />} />

          <Route path='/product' element={<Product />} >
                <Route path='productdetail' element={<ProductDetailPage />}  />
          </Route>

          <Route path='/cart' element={<Cart />} />


          <Route path='*' element={<NoMatchRoute />  } />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;