import React from 'react';
import GrandParentComp from './GrandParentComp';

const TodoItem = (props) => {
    return (
        <div>
            <h1>To do Item</h1>
            <li>{props.id}</li>  
          <li>{props.name}</li>  
          <li>{props.designation}</li>             


            {/* {props.data.map((item, index) => {
                return (
                    <>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.designation}</li>
                    </>
                )
            })} */}

        </div>
    );
};

export default TodoItem;