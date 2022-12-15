import React, { useState } from "react";

import menuItems from "./MenuItems";
import "./Navbar.css";
import Home from "./Home";


import Passwords from "./Passwords";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



const Navbar = () => {
  const [active, setActive] = useState(false);
  

  const handleClick = () => {
    setActive(!active);
  };
  

  return (
    <div className = "flexbox" >
    <Router>
    <nav className="navbar" >
      <h1 className="navbar-logo">
         Yoga Classes Registration
      </h1>
      <div className="menu-icon" onClick={handleClick}>
      
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"} onClick={handleClick}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link  to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
     
    </nav>
   
    <Routes>
        
          <Route path="/home" element={  <Home />}/>
          <Route path="/Passwords" element={  <Passwords />}/>
         
        </Routes>

        
      
    </Router>
    
    </div>
  );
};

export default Navbar;
