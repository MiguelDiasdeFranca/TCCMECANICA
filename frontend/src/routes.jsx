import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/landingpage/landing.jsx'
import Login2 from './pages/login2/App.jsx'; 
import Login from './pages/login/login.jsx'



export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element ={<Login/>}/>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login2" element={<Login2 />} />

      </Routes>
    </Router>
  );
}
