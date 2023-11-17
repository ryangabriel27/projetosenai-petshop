import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import HomePage from './components/home/homePage.js';
import { Slider } from './components/carousel/slider.js';

function App() {
  return (
    <><Header></Header>
      <HomePage></HomePage>
      <Slider></Slider>
    </>
  );
}

export default App;
