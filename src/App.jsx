import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import About from './pages/About';
import Offers from './pages/Offers';
import News from './pages/News';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Contacts />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
