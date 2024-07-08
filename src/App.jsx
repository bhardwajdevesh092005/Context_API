import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <UserContextProvider>
      <Outlet/>
    </UserContextProvider>
  )
}
export default App
