import React, { useState } from 'react';
import {Paper, Typography,Box,TextField, Button, useTheme, useMediaQuery, FormGroup, FormControlLabel, Checkbox} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { logInHandler } from '../actions';
import { useDispatch } from 'react-redux';


const useStyles=makeStyles(theme=>({
loginContainer:{
 margin:"3rem auto",
 width:"20rem",
 height:"20rem",
 padding:"2rem",
 display:"flex",
 flexDirection:"column",
 alignItems:'flex-start',
 justifyContent:"flex-start",
 gap:"1.4rem"
},
loginContainerSmSize:{
 margin:"2rem auto",
 width:"15rem",
 height:"20rem",
 padding:"1rem",
 alignItems:"flex-start",
 gap:"2rem"
 
},
FieldBox:{
    width:"100%",
    display:"flex",
    flexDirection:"column",
    gap:"5px"
},
ButtonStyled:{
    width:"100%",
},
BoxInfo:{
    display:"flex",
    width:"100%",
    gap:"2rem",
    alignItems:"center",
    justifyContent:"center",
},
forgotPassBox:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    fontSize:"10px"
}
    
}))

const LoginPage = () => {
    const classes=useStyles();
    const navigate=useNavigate();
    const theme=useTheme();
    const breakpoints=useMediaQuery(theme.breakpoints.down("sm"));
    const [loginData,setLogInData]=useState({email:"",password:""});
    const dispatch=useDispatch();

    const logInChangeHandler = (e) => {
        const { name, value } = e.target;
        setLogInData((prevData) => ({ ...prevData, [name]: value }));
      };

      const clickHandler=()=>{
        if(
        loginData.email === "" ||
        loginData.password === "" )
        {
          console.error("please fill all the details");
        }
        else{
          logInHandler(loginData,dispatch,navigate);
         setLogInData({email:"",password:""})
        }
        
      }

  return (
   <Paper elevation={5}  className={breakpoints? classes.loginContainerSmSize :classes.loginContainer} >
    <Typography variant="h6" align='left' sx={{fontSize:breakpoints && "15px"}}>LOGIN</Typography>

    <Box component="div" className={classes.FieldBox} sx={{marginTop:breakpoints && "0.8rem"}}>
     <Typography variant="body2" align='left'>Email</Typography>
     <TextField id="email"  variant="outlined"  placeholder='email'required  size="small" name="email" onChange={logInChangeHandler} value={loginData.email} />
    </Box>

    <Box component="div" className={classes.FieldBox} sx={{marginTop:breakpoints && "0.8rem"}}>
     <Typography variant="body2" align='left'>Password</Typography>
     <TextField id="password" variant="outlined" required placeholder='Password' type="password"  size="small" name="password" onChange={logInChangeHandler} value={loginData.password}/>
    </Box>

    <Box component="div" className={classes.forgotPassBox} sx={{marginTop:breakpoints ?"4px": "-12px"}}>
    <FormGroup sx={{fontSize:breakpoints ?"4px":"8px"}}>
        <FormControlLabel control={<Checkbox  sx={{ '& .MuiSvgIcon-root': { fontSize: breakpoints && 15 } }}/>} label="Remember Me" size="small"/>
    </FormGroup>
     <Typography variant="body2" align="right"sx={{textDecoration:"underline" ,color:"#0ea5e9",cursor:"pointer",marginLeft:"4px",fontSize:breakpoints && "10px"}} onClick={()=>navigate("/forgotpassword")}>Forgot Password?</Typography>
    </Box>

    <Button variant="contained" className={classes.ButtonStyled} sx={{marginTop:breakpoints ?"0.8rem": "-1rem"}}onClick={clickHandler}>LOG IN</Button>

    <Box component="div" className={classes.BoxInfo} sx={{marginTop:breakpoints ? "1rem" :"-1rem"}} >
     <Typography variant="body2" align='left'>New User?</Typography>
     <Typography variant="body2" align="right"sx={{textDecoration:"underline" ,color:"#0ea5e9",cursor:"pointer"}} onClick={()=>navigate("/registration")}>Register Here</Typography>
    </Box>



    </Paper>
  )
}

export default LoginPage