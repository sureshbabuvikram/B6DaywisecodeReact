import React, { useCallback, useMemo, useState } from 'react';

const CallbackMemo = () => {
    const[count, setCount]= useState(0)
    const[searchItem, setSearchItem] =useState('')
    const[items, setItems]= useState(['Mens', 'women', 'kids', 'electronics', 'fancy'])

    const filterItems = useMemo(()=>{
        console.log("filter");
        
        return items.filter(item => item.toLowerCase()
        .includes(searchItem.toLowerCase()))
    },[items, searchItem])

    const handleChange=useCallback((e)=>{
        setSearchItem(e.target.value)
        console.log("search items");
        
    },[])
  
    return (
        <div>
            <input type="text"
            name='searchitem'
            value={searchItem} 
            onChange={handleChange}
            placeholder='Search'/>

            <ul>
                {filterItems.map((item, index)=>(<>
                    <div key={index}>
                    <li>{item}</li>
                    </div>
                </>))}
            </ul>

            <button onClick={()=>{setCount(val=> val +1)}} >count - {count}</button>
            
        </div>
    );
};

export default CallbackMemo;