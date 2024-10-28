import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// const navStyle={
//     textDecoration:'none',
//     padding:'10px',
//     margin:'5px',
//     color:'black',
//     backgroundColor:'lightgreen',
//     borderRadius:'5px',
// }

const Navbar = () => {
   
    return (
        <div>
            <nav>
            <Link to='/' >Home</Link>
            <Link to='/user' >User</Link>
            <Link to='/condact' >Condact</Link>            
            <Link to='/user/5'  >UserDetail</Link>
            <Link to='/product'  >Product</Link>
            {/* <NavLink to='/condact' activeClassName={navStyle} > Condact </NavLink> */}
            </nav>      

        </div>
    );
};

export default Navbar;