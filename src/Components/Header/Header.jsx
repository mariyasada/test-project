import React from 'react'
import { headerConstants } from './Constants'
import "../Header/Header.css";
import {FaMoon,FaSun} from "react-icons/fa"
import { useState } from 'react';
import { useTheme } from '../../Context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { logOut } from '../../actions';

const Header = () => {
    const[isLight,setIsLight]=useState(false);
    const {theme,setTheme}=useTheme();
    const isLoggedIn=useSelector(state=>state.authReducer.isLoggedIn);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const themeClickHandler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
        setIsLight(!isLight);
      };

      const logoutHandler=()=>{
        logOut(dispatch);
        navigate("/");
      }
  return (
    <nav className= {theme==="light"? "Header_container_dark flex-center":"Header_container flex-center"}>
       <div className={theme==="light"? "Header_points_dark flex-center":"Header_points flex-center"}>
       {headerConstants.map((item)=>{
        return( <span key={item} className="Header_items">{item}</span>)
       }
       )}
       {isLoggedIn ?<Button variant="contained" size="small" onClick={logoutHandler}>Logout</Button>:<Button variant="contained" size="small" color="secondary" onClick={()=>navigate("/")}>LogIn</Button>}
       <Link  to="/registration" className="Header_items" style={{color:"white"}}>Register</Link>
        </div> 
        <div className={theme==="light"?"Theme_icon color-yellow":"Theme_icon"}>
            {isLight?<FaSun onClick={themeClickHandler}/>: <FaMoon onClick={themeClickHandler}/>} 
        </div>
        
    </nav>
  )
}

export default Header