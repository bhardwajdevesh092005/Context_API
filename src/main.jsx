import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Components/Login.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './Components/Dashboard.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element ={<App/>}>
        <Route path='' element={<Login/>}/>
        <Route path='dashboard' element = {<Dashboard/>}/>
      </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
