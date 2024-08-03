import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginregister from './Loginregister'

function App() {
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Loginregister/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
