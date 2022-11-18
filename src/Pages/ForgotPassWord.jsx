import React from 'react'
import {Paper, Typography,Box,TextField, Button, useTheme, useMediaQuery, FormGroup, FormControlLabel, Checkbox} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';


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
        marginTop:"-1rem",
        fontSize:"10px"
    }
        
    }))
const ForgotPassWord = () => {
    const classes=useStyles();
    const navigate=useNavigate();
    const theme=useTheme();
    const breakpoints=useMediaQuery(theme.breakpoints.down("sm"));
    
  return (
   <Paper elevation={5}  className={breakpoints? classes.loginContainerSmSize :classes.loginContainer} >
    <Typography variant="h6" align='left' sx={{fontSize:breakpoints && "15px"}}>FORGOT PASSWORD</Typography>

    <Box component="div">
     <Typography variant="body2" align='center' sx={{marginTop:breakpoints && "5px",fontSize:breakpoints && "10px"}}>Enter your email and we'll send you a link to reset your password</Typography>     
    </Box>

    <Box component="div"  sx={{marginTop:breakpoints && "0.8rem",width:"100%"}}>
     <TextField id="outlined-basic" variant="outlined" required placeholder='abc@gmail.com' type="password"  size="small" sx={{width:'100%'}}/>
    </Box>

    <Button variant="contained" className={classes.ButtonStyled} sx={{marginTop:breakpoints ?"0.8rem": "-0.2rem"}}>SUBMIT</Button>

    <Box component="div" className={classes.BoxInfo} sx={{marginTop:breakpoints ? "1rem" :"0.2rem"}} >
     <Typography variant="body2" align="right"sx={{textDecoration:"underline" ,color:"#0ea5e9",cursor:"pointer"}} onClick={()=>navigate("/")}>Back to Login</Typography>
    </Box>

    </Paper>
  )
}

export default ForgotPassWord