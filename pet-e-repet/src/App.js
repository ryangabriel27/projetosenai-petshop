import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import HomePage from './components/home/homePage.js';
import Login from './pages/login.js';
import Header2 from './components/header2/header2.js';
import { Routes, Route } from 'react-router-dom';


function App() {
  // let header;
  // switch (window.location.pathname) {
  //   case '/': header = <Header />
  //     break;
  //   case '/login': header = <Header2 />
  //     break;
  // }
  return <>
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/login' element={<Header2 />} />
    </Routes>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </>;
}

export default App;
