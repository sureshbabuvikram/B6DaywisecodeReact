import React, { useEffect, useState } from 'react';
import UserList from './UserList';
import axios from 'axios';

const UseEffectRealTimt = () => {

    const[users, setUser] = useState([]);
    const[loading , setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetchData();

        const intervalTri = setInterval(()=>{
            console.log("data fetching");            
        }, 2000)

        return()=>{
                console.log("clear up");
                clearInterval(intervalTri)                
        }
    },[])

    const fetchData =async()=>{
        try {
            // const response = await fetch("https://jsonplaceholder.typicode.com/users")
            // const data =await response.json()

            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUser(response.data)
            setLoading(false)
            
        } catch (error) {
            console.log(error); // dev
            setError(error)    // user        
        }
    }

    if(loading){
        return <div>Loading......</div>
    }

    if(error){
        return <div>Error:{error}</div>
    }



    return (
        <div>
            {/* conditional render */}
            {users.length>0 ?(
                users.map((user)=>(
                    <>
                    <div key={user.id}>
                     <UserList user={user}  />
                    </div>
                    </>
                ))
            ):(<div> no users  </div>)}
        </div>
    );
};

export default UseEffectRealTimt;