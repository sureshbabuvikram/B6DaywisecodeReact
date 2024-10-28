import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    
    const data = [
        {id:1001 , name:"suresh" , designation:"Senior developer"},
        {id:1002 , name:"renu" , designation:"Junior developer"},
        {id:1003 , name:"rithu" , designation:"Software developer"},
        {id:1004 , name:"sathvik" , designation:"Software developer"},       
    ]
    
   
    return (
        <div>
            <h1>Todo list</h1>
{/* 
            {data.map((item, index)=>{
                return(
                    <>
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                    <li>{item.designation}</li>
                    </>
                )
            })} */}
         
        {data.map((item)=>(
            <TodoItem id={item.id} name = {item.name} designation={item.designation} />
        ))}

        {/* <TodoItem data={data} /> */}
       
        </div>
    );
};

export default TodoList;