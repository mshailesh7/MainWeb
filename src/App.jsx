
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AboutUs from './pages/AboutUs';
import Contact from "./Components/ContactUs/Contact";
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />  
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
