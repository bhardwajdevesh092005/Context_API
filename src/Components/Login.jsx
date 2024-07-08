import React, { useState } from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react';
import { createBrowserRouter, createRoutesFromElements, Link, Route, Router } from 'react-router-dom';
function Login()
{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {user,setUser} = useContext(UserContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password});
        console.log(user);
    }
    return(
        <div className="flex justify-center h-screen align-middle bg-[url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover">
            <div className='bg-[#0009] p-4 flex flex-row justify-center w-1/3 h-1/2 self-center rounded-xl'>
                <div className='flex flex-col justify-center w-1/4 self-center'>
                    <h1 className='text-8xl self-center'>LOGIN</h1>
                    <input type="text" name="username"  className= "bg-white text-xl rounded-xl p-2 m-2 self-center" onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder= "UserName"id="username" />
                    <input type="password" name="password" className= "bg-white text-xl rounded-xl p-2 m-2 self-center" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Password' id="password" />
                    <button className='bg-blue-600 p-2 text-xl rounded-xl text-white self-center' onClick={handleSubmit}><Link to={"dashboard"}>Submit</Link></button>
                </div>
            </div>
        </div>
  )
}

export default Login