import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Navhead from './components/Navhead';
import Home from './components/pages/Home';

export default function App() {
  return (
    <>

    <Navhead/>
    <Routes>
      <Route path='/' element={<Home />} >
        
      </Route>
    </Routes>
    
    </>
  )
}

