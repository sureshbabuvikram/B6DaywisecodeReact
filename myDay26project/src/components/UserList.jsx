import React from 'react';

const UserList = ({user}) => {
    return (
        <div>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.username}</li>

                {/* <img src={user.image} alt="" />
                <h3>{user.title}</h3>
                <h2>{user.price}</h2>
                <p>{user.description}</p>
                <button>add to cart</button> */}


        </div>
    );
};

export default UserList;