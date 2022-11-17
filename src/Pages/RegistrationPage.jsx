import React from 'react'
import {Paper, Typography,Box,TextField, Button} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

 

const useStyles=makeStyles(theme=>({
loginContainer:{
[theme.breakpoints.down('md')]:{
    gap:"1rem",
    backgroundColor:"red",
    width:"fit-content",
    height:"30rem"

},
 margin:"3rem auto",
 backgroundColor:"red",
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
    marginTop:"-15px"
}
  
}))
const RegistrationPage = () => {
    const classes=useStyles();
    const navigate=useNavigate();
    return (
     <Paper elevation={5}  className={classes.loginContainer}>
      <Typography variant="h6">SIGN UP</Typography>

      <Box component="div" className={classes.FieldBox}>
       <Typography variant="body2" align='left'>First Name</Typography>
       <TextField id="outlined-basic"  variant="outlined" placeholder='First Name'required  size="small"/>
      </Box>

      <Box component="div" className={classes.FieldBox}>
       <Typography variant="body2" align='left'>Last Name</Typography>
       <TextField id="outlined-basic" variant="outlined" placeholder='Last Name' required  size="small"/>
      </Box>
  
      <Box component="div" className={classes.FieldBox}>
       <Typography variant="body2" align='left'>Email</Typography>
       <TextField id="outlined-basic"  variant="outlined" placeholder='Email' required  size="small"/>
      </Box>
  
      <Box component="div" className={classes.FieldBox}>
       <Typography variant="body2" align='left'>Password</Typography>
       <TextField id="outlined-basic" variant="outlined" placeholder='Password' required  size="small"/>
      </Box>
      <Button variant="contained" className={classes.ButtonStyled}>SIGNUP</Button>


    <Box component="div" className={classes.BoxInfo}>
     <Typography variant="body2" align='left'>Already Registered?</Typography>
     <Typography variant="body2" align="right"sx={{textDecoration:"underline" ,color:"#0ea5e9",cursor:"pointer"}} onClick={()=>navigate("/")}>Log In Here</Typography>
    </Box>
  
  
      </Paper>
    )
}

export default RegistrationPage