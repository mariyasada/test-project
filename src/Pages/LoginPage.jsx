import React from 'react';
import {Paper, Typography,Box,TextField, Button} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
 

const useStyles=makeStyles(theme=>({
loginContainer:{
 margin:"3rem auto",
 backgroundColor:"white",
 width:"20rem",
 height:"20rem",
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
    marginTop:"-15px"
}
    
}))

const LoginPage = () => {
    const classes=useStyles();
    const navigate=useNavigate();
  return (
   <Paper elevation={5}  className={classes.loginContainer}>
    <Typography variant="h6">LOGIN</Typography>

    <Box component="div" className={classes.FieldBox}>
     <Typography variant="body2" align='left'>Email</Typography>
     <TextField id="outlined-basic"  variant="outlined"  placeholder='email'required  size="small"/>
    </Box>

    <Box component="div" className={classes.FieldBox}>
     <Typography variant="body2" align='left'>Password</Typography>
     <TextField id="outlined-basic" variant="outlined" required placeholder='Password'  size="small"/>
    </Box>
    <Button variant="contained" className={classes.ButtonStyled}>LOG IN</Button>

    <Box component="div" className={classes.BoxInfo}>
     <Typography variant="body2" align='left'>New User?</Typography>
     <Typography variant="body2" align="right"sx={{textDecoration:"underline" ,color:"#0ea5e9",cursor:"pointer"}} onClick={()=>navigate("/registration")}>Register Here</Typography>
    </Box>



    </Paper>
  )
}

export default LoginPage