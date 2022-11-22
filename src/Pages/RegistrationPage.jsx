import React, { useState } from 'react'
import {Paper, Typography,Box,TextField, Button,useTheme,useMediaQuery} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../actions';

 

const useStyles=makeStyles(theme=>({
loginContainer:{
[theme.breakpoints.down('sm')]:{
    gap:"1rem",
    width:"fit-content",
    height:"28rem"
},
 margin:"3rem auto",
 width:"20rem",
 height:"35rem",
 padding:"2rem",
 display:"flex",
 flexDirection:"column",
 alignItems:'flex-start',
 justifyContent:"flex-start",
 gap:"2rem"
},
FieldBox:{
    width:"100%",
    display:"flex",
    flexDirection:"column",
    gap:"5px"

},
ButtonStyled:{
    marginTop:6,
    width:"100%",
},
BoxInfo:{
    display:"flex",
    width:"100%",
    gap:"2rem",
    alignItems:"center",
    justifyContent:"center",
   
}
  
}))
const RegistrationPage = () => {
    const classes=useStyles();
    const navigate=useNavigate();
    const theme=useTheme();
    const breakpoints=useMediaQuery(theme.breakpoints.down("sm"));
    const [signupData,setSignupData]=useState({firstname:"",lastname:"",email:"",password:""});
    const dispatch=useDispatch();

    const signupChangeHandler = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => ({ ...prevData, [name]: value }));
      };

      const clickHandler=()=>{
        if(signupData.firstname === "" ||
        signupData.lastname === "" ||
        signupData.email === "" ||
        signupData.password === "" )
        {
          console.error("please fill all the details");
        }
        else{
          signUp(signupData,dispatch,navigate);
          navigate("/");
          setSignupData({firstname:"",lastname:"",email:"",password:""})
        }
       
      }

    return (
     <Paper elevation={5}  className={classes.loginContainer}>
      <Typography variant="h6" sx={{fontSize: breakpoints && "15px"}}>SIGN UP</Typography>

      <Box component="div" className={classes.FieldBox}>
       <Typography variant="body2" align='left'>First Name</Typography>
       <TextField id="firstname"  variant="outlined" placeholder='First Name'required  size="small" name="firstname" onChange={signupChangeHandler} value={signupData.firstname}/>
      </Box>

      <Box component="div" className={classes.FieldBox}>
       <Typography variant="body2" align='left'>Last Name</Typography>
       <TextField id="lastname" variant="outlined" placeholder='Last Name' required  size="small" name="lastname" onChange={signupChangeHandler} value={signupData.lastname}/>
      </Box>
  
      <Box component="div" className={classes.FieldBox}>
       <Typography variant="body2" align='left'>Email</Typography>
       <TextField id="email"  variant="outlined" placeholder='Email' required  size="small" name="email" onChange={signupChangeHandler} value={signupData.email}/>
      </Box>
  
      <Box component="div" className={classes.FieldBox}>
       <Typography variant="body2" align='left'>Password</Typography>
       <TextField id="password" variant="outlined" placeholder='Password' type="password" required  size="small" name="password" onChange={signupChangeHandler} value={signupData.password}/>
      </Box>
      <Button variant="contained" className={classes.ButtonStyled} onClick={clickHandler}>SIGNUP</Button>


    <Box component="div" className={classes.BoxInfo} sx={{marginTop :breakpoints ? "0.2rem":"-15px"}}>
     <Typography variant="body2" align='left'>Already Registered?</Typography>
     <Typography variant="body2" align="right"sx={{textDecoration:"underline" ,color:"#0ea5e9",cursor:"pointer"}} onClick={()=>navigate("/")}>Log In Here</Typography>
    </Box>
  
  
      </Paper>
    )
}

export default RegistrationPage