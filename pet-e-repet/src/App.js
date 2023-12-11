import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import HomePage from './components/home/homePage.js';
import Login from './components/login/login.js';
import Footer from './components/footer/footer.js';
import { Routes, Route } from 'react-router-dom';
import NavLogin from './components/navLogin/navLogin.js';
import Cadastro from './components/cadastro/cadastro.js';
import ProdutosCachorro from './components/produtos/produtosCachorro.js';
import ProdutosGato from './components/produtos/produtosGato.js';
import ProdutosAves from './components/produtos/produtoAve.js';
import ProdutosCasaLazer from './components/produtos/produtosCasaLazer.js';
import ProdutosOutros from './components/produtos/produtosOutros.js';
import ProdutosPeixes from './components/produtos/produtosPeixe.js';

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
      <Route path='/cachorros' element={<ProdutosCachorro />} />
      <Route path='/gatos' element={<ProdutosGato />} />
      <Route path='/aves' element={<ProdutosAves />} />
      <Route path='/casaelazer' element={<ProdutosCasaLazer />} />
      <Route path='/outros' element={<ProdutosOutros />} />
      <Route path='/peixes' element={<ProdutosPeixes />} />
    </Routes>
    {/* -- Footer -- */}
    <Footer />
  </>;
}

export default App;
