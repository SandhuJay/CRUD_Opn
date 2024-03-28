import { useState } from 'react'

import './App.css'
import AddUser from './components/AddUser'
import NavBar from './components/NavBar'
import UserList from './components/UserList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser'
import Home from './components/Home'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path ="/" element ={<Home />}/>
      <Route path ="all" element ={ <UserList/>}/>
      <Route path ="/add" element ={<AddUser/>}/>
      <Route path ="/edit/:id" element ={<EditUser/>}/>
    
     
     
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
