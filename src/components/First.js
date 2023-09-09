import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';

import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Restaurant from './Restaurant';


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
          
          </Routes>
      </Router>
      </>
    )
  }
  
  export default First