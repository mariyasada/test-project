import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography, useMediaQuery, useTheme,Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const useStyles=makeStyles(theme=>({
    HorizontalCardStyle:{
        display:"flex",
        justifyContent:"flex-start",
        margin:"2rem auto"
    },
    CardContentStyle:{
     display:"flex",
     flexDirection:"column",
     width:'50%',
     alignItems:"flex-start"
    },
    ButtonForSmallScreen:{
        width:"8.5rem",
        height:"2.5rem",
        padding:"3px",
        fontWeight:"bold",
       
    },
    ButtonGap:{
        gap:"3px",
        justifyContent:"center",
        alignItems:"center"
    },
    productNameForSS:{
        whiteSpace:"nowrap",
        width:"12rem",
        fontSize:"20px",
        overflow: "hidden",
        textOverflow: "ellipsis", 
        marginLeft:"-4px"
        
    }
}))

const HorizontalCard = ({Item}) => {
    const classes=useStyles();
    const theme=useTheme();
    const breakpoints=useMediaQuery(theme.breakpoints.down("sm"));
  return (
    
    <Card sx={{ maxWidth:breakpoints?"82vw": "80vw" , maxHeight:200,padding:"10px"}} className={classes.HorizontalCardStyle}>
    <Link to={`/product/${Item.id}`}>
    <CardMedia
      component="img"
      alt="product image"
      height={breakpoints ? "140":  "180"}
      sx={{objectFit:'contain', justifyItems:"flex-start",width:breakpoints?"90px":"300px"}}
      image={`${Item.image}`}
    />
    </Link>
    <Box component="div" className={classes.CardContentStyle}>
    <CardContent sx={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start"}}>
      <Typography gutterBottom variant={breakpoints?"h6":"h5"} component="div">
      {Item.brand}
      </Typography>
      <Typography variant="body2" color="text.secondary" className={breakpoints && classes.productNameForSS} >
      {Item.productName}
      </Typography>
      <Typography variant="body1" sx={{marginTop:'1rem'}}>
      Rs. {Item.Price}
      </Typography>
    </CardContent>
    <CardActions sx={{display:"flex",alignItems:'flex-start',gap:"3rem", justifyContent:"center"}} className={breakpoints && classes.ButtonGap}>
      <Button size="medium" variant='contained' className={breakpoints && classes.ButtonForSmallScreen}>ADD TO CART</Button>
      <IconButton aria-label="wishlist">
          <FaHeart/>
      </IconButton>
    </CardActions>
    </Box>
  </Card>
  )
}

export default HorizontalCard