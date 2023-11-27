import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import HomePage from './components/home/homePage.js';
import Login from './pages/login.js';
<<<<<<< HEAD
import Header2 from './components/NavLogin/navLogin.js';
=======
import Header2 from './components/header2/header2.js';
>>>>>>> db7bdcc36626be1101025be977cdb56d8ade38e3
import Footer from './components/footer/footer.js';
import { Routes, Route } from 'react-router-dom';


function App() {
  return <>
    {/* -- Routing das headers -- */}
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/login' element={<Header2 />} />
    </Routes>
    {/* -- Routing das páginas -- */}
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
<<<<<<< HEAD
    {/* -- Footer -- */}
    <Footer />
=======
    <Footer/>
>>>>>>> db7bdcc36626be1101025be977cdb56d8ade38e3
  </>;
}

export default App;
