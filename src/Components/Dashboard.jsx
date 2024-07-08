import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
function Dashboard() {
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <div className="flex justify-center h-screen align-middle bg-[url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover">
            <div className='bg-[#0009] p-4 flex flex-row justify-center w-1/3 h-1/2 self-center rounded-xl'>
                <div className='flex flex-col justify-center w-1/4 self-center'>
                    <h1 className='text-8xl self-center'>DashBoard</h1>
                    <div className='text-white text-3xl w-1/3'>Hello {user.username}</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard    