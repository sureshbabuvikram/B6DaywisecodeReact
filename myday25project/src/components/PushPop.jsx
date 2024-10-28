import React from 'react';

const PushPop = () => {
    let users =['suresh' , 'renu', 'rithu' , 'sathvik', 'vikram' ,'mini']; //6 

    const addUser=()=>{
        const ind = users.push("vinish") //4 length -1 
        console.log("Add user -",users[ind -1]);    
          
        
        users.forEach((ele)=>console.log(ele))

        // console.log(users.indexOf('vikram')); // 3  or -1

        const userIndex =users.indexOf('sathvi')

        if(userIndex === -1){
            console.log("users is not in the array");
            
        }else{
            console.log("user in the array"); //3
            
        }
        
    }

    const removeUser = ()=>{
        const remUser = users.pop();
        console.log("rem user - ", remUser);
        users.forEach((ele)=>console.log(ele))        
    }

    const sliceUser=()=>{
        // const sliUser = users.slice(0,4) 
        // const sliUser = users.slice(4) 
        const sliUser = users.slice(2,4) 
        console.log(sliUser);        
    }

    const spliceUser=()=>{
            // const spliUser = users.splice(0,2, "raja", "rani")
            // const spliUser = users.splice(3)
            const spliUser = users.splice(3,2, "raja", "rani")
            console.log(spliUser); //
            console.log(users);   //   
            
    }
    return (
        <div>
            <h1>Pushpop comp</h1>

            <ul>
                {users.map((item, index)=>(
                    
                    <div key={index}>
                        <li>{item}</li>
                    </div>
                
                ))}
            </ul>


            <button onClick={addUser} >Add</button>
            <button onClick={removeUser} >Remove</button>

            <button onClick={sliceUser} >slice</button>
            <button onClick={spliceUser} >splice</button>
        </div>
    );
};

export default PushPop;