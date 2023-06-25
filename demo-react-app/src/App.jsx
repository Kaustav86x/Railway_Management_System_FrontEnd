import { useState } from 'react'
import './App.css'
import { Navbar } from './Home/Navbar';
import { Body } from './Body/Body';
import { User } from './User/login';

function App() {
  return (
    <>
    <div>
      <Navbar></Navbar>
      <Body></Body>
      <User></User>
    </div>
    </>
  )
}

export default App
