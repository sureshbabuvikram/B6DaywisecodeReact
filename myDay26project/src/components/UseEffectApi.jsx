//0%
import React, { useEffect, useState } from 'react';

const UseEffectApi = () => {
    const [userdata, setUserData]= useState([])

    useEffect(()=>{
       fetchData()
    },[])

    const fetchData=async()=>{
        await fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then(data=>setUserData(data))  
        .catch((err)=>console.log(err))
        // console.log(data);        
    }
    return (
        <div>
            {userdata.name}
            {userdata.email}
            {/* {userdata.address.city} */}
        </div>
    );
};

export default UseEffectApi;