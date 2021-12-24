import React from 'react';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

import RegisterSuccess from '../src/components/RegisterSuccess';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
export default function App() {

  return (
    <Router>
      <Navbar />
     <div>
       <nav>
         <ul>
     
           {/* <li><Link to="/success">Register Success Page</Link></li>
           <li><Link to="/form" >Register Page</Link></li>
           <li><Link to="/nav" >New Navbar</Link></li>
           <li><Link to="/about">About</Link></li> */}
         </ul>
       </nav>

       <Routes >
         <Route path="success" element={<RegisterSuccess/>}></Route>
         <Route path="form" element={<Form/>}></Route>
         <Route path="navbar"  element={<Navbar />}></Route>
         <Route path="about" element={<About/>}></Route>
       </Routes >
     </div> 
   
    </Router>
  );
}


