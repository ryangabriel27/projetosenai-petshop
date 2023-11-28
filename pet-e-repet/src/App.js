import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import HomePage from './components/home/homePage.js';
import Login from './pages/login.js';
import Footer from './components/footer/footer.js';
import { Routes, Route } from 'react-router-dom';
import navLogin from './components/NavLogin/navLogin.js';


function App() {
  return <>
    {/* -- Routing das headers -- */}
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/login' element={<navLogin />} />
    </Routes>
    {/* -- Routing das páginas -- */}
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    {/* -- Footer -- */}
    <Footer />
    <Footer />
  </>;
}

export default App;
