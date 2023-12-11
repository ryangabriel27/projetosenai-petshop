import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import HomePage from './components/home/homePage.js';
import Login from './components/login/login.js';
import Footer from './components/footer/footer.js';
import { Routes, Route } from 'react-router-dom';
import NavLogin from './components/NavLogin/navLogin.js';
import Cadastro from './components/cadastro/cadastro.js';
import Produtos from './components/produtos/produtos.js';

function App() {
  return <>
    {/* -- Routing das headers -- */}
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/cachorros' element={<Header />} />
      <Route path='/gatos' element={<Header />} />
      <Route path='/aves' element={<Header />} />
      <Route path='/casaelazer' element={<Header />} />
      <Route path='/outros' element={<Header />} />
      <Route path='/peixes' element={<Header />} />
      <Route path='/login' element={<NavLogin />} />
      <Route path='/cadastro' element={<NavLogin />} />
    </Routes>
    {/* -- Routing das páginas -- */}
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/cachorros' element={<Produtos categoria="Cachorro"/>} />
      <Route path='/gatos' element={<Produtos categoria="Gato"/>} />
      <Route path='/aves' element={<Produtos categoria="Aves"/>} />
      <Route path='/casaelazer' element={<Produtos categoria="Casa & Lazer"/>} />
      <Route path='/outros' element={<Produtos categoria="Outros"/>} />
      <Route path='/peixes' element={<Produtos categoria="Peixes"/>} />
    </Routes>
    {/* -- Footer -- */}
    <Footer />
  </>;
}

export default App;
