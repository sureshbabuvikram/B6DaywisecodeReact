import React, { useState } from 'react';

const Form = () => {
    
    const[formData, setFormData]= useState(
        {username:'suresh',password:'',email:'',gender:"male"}
)
    // console.log(formData.username);

    const handleSubmit=(e)=>{
            e.preventDefault()
            console.log("registered", formData);
            
    }

    const handleChange=(e)=>{
        const{name , value} = e.target
        setFormData((preData)=>({
            ...preData, [name] : value
        }))
    }
    
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName:</label>
                    <input  
                    type="text" 
                    name="username"
                    value={formData.username}
                    onChange={handleChange} 
                    placeholder='Username'
                     required
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Password'
                    required
                     />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    required />
                </div>

                    <div>
                        <label>Gender</label>
                        <select name='gender' value={formData.gender}  onChange={handleChange} >
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>

                    <button type='submit' >Register</button>
            </form>
        </div>
    );
};

export default Form;