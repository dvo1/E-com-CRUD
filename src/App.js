import React from 'react'
import './App.css'
import {  Route, Switch, Routes, Redirect } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'



const App = () => {
  return (
    <div className='App'>
      
        <Navbar/>
        
        <Routes>
          <Route path='/cart' element = {<Cart/>}/>
          {/* <Route path='/not-found' element = {<NotFound/>}/> */}
          <Route path='/' element = {<Home/>}/>
          {/* <Redirect to = '/not-found'/> */}
        </Routes>
    </div>
  )
}

export default App