import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import HomePage from './components/home/homePage.js';
import Login from './pages/login.js';
import Header2 from './components/header2/header2.js';
import Slider from './components/carousel/slider.js';
import InfoHome from './components/infoHome/infoHome.js';
import Footer from './components/footer/footer.js';
import { Routes, Route } from 'react-router-dom';


function App() {
  return <>
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/login' element={<Header2 />} />
    </Routes>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Routes>
      <Route path='/' element={<Slider />} />
    </Routes>
    <Routes>
      <Route path='/' element={<InfoHome />} />
    </Routes>
    <Routes>
      <Route path='/' element={<Footer />}></Route>
    </Routes>
  </>;
}

export default App;
