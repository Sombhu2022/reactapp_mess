import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ColorModeSwitcher } from './ColorModeSwitcher.js';

import Home from './components/home.jsx'
import Nev from './components/nev.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Slider from './components/slider.jsx'

import './style/app.scss'
import './style/slider.scss'

function App() {
  return (
<BrowserRouter>
<ColorModeSwitcher  />
<Routes>
  <Route path='/#home' element={<Home/>} />
  <Route path='/Fecilitys' element={<Home/>} />
  <Route path='/Rules' element={<Home/>} />
  <Route path='/Events' element={<Home/>} />
  <Route path='/#About' element={<About/>} />
  <Route path='/#Contact' element={<Contact/>} />
   <Route/>
</Routes>


<Nev/>

<Slider/>
<Home/>
<About/>
<Contact/>

</BrowserRouter>
  );
}

export default App;
