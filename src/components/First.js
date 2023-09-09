import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';

import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Restaurant from './Restaurant';
import DosaPlaza from './Restaurants/DosaPlaza';
import Calorie from './Restaurants/Calorie';
import Hexagon from './Restaurants/Hexagon';
import LT6 from './Restaurants/LT6';
import Rankol from './Restaurants/Rankol';
import AgainEat from './Restaurants/AgainEat';


const First = () => {
    return (
      <>
      <Router>
        <Navbar/>
          <Routes>
           <Route exact path='/' element={<Home/>} />
           <Route exact path='/About' element={<About/>} />
           <Route exact path='/Contact' element={<Contact/>} />
           <Route exact path='/Restaurant' element={<Restaurant/>} />
           <Route exact path='/Restaurants/DosaPlaza.js' element={<DosaPlaza/>} />
           <Route exact path='/Restaurants/Calorie.js' element={<Calorie/>} />
           <Route exact path='/Restaurants/Hexagon.js' element={<Hexagon/>} />
           <Route exact path='/Restaurants/LT6.js' element={<LT6/>} />
           <Route exact path='/Restaurants/Rankol.js' element={<Rankol/>} />
           <Route exact path='/Restaurants/AgainEat.js' element={<AgainEat/>} />
          </Routes>
      </Router>
      </>
    )
  }
  
  export default First