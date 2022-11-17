import React from 'react'
import { headerConstants } from './Constants'
import "../Header/Header.css";
import {FaMoon,FaSun} from "react-icons/fa"
import { useState } from 'react';
import { useTheme } from '../../Context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const[isLight,setIsLight]=useState(false);
    const {theme,setTheme}=useTheme();

    const themeClickHandler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
        setIsLight(!isLight);
      };
  return (
    <nav className= {theme==="light"? "Header_container_dark flex-center":"Header_container flex-center"}>
       <div className={theme==="light"? "Header_points_dark flex-center":"Header_points flex-center"}>
       {headerConstants.map((item)=>{
        return( <span key={item} className="Header_items">{item}</span>)
       }
       )}
       <Link  to="/" className="Header_items" style={{color:"white"}}>Login</Link>
       <Link  to="/registration" className="Header_items" style={{color:"white"}}>Register</Link>
        </div> 
        <div className={theme==="light"?"Theme_icon color-yellow":"Theme_icon"}>
            {isLight?<FaSun onClick={themeClickHandler}/>: <FaMoon onClick={themeClickHandler}/>} 
        </div>
        
    </nav>
  )
}

export default Header