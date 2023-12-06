import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import HomePage from './components/home/homePage.js';
import Login from './components/login/login.js';
import Footer from './components/footer/footer.js';
import { Routes, Route } from 'react-router-dom';
import NavLogin from './components/NavLogin/navLogin.js';
import Cadastro from './components/cadastro/cadastro.js';

function App() {
  return <>
    {/* -- Routing das headers -- */}
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/login' element={<NavLogin />} />
      <Route path='/cadastro' element={<NavLogin />} />
    </Routes>
    {/* -- Routing das páginas -- */}
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
    </Routes>
    {/* -- Footer -- */}
    <Footer />
  </>;
}

export default App;
