import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { FaHeart } from 'react-icons/fa'





const useStyles=makeStyles(theme=>({
    GridStyle:{
     
    },
}))
const ProductCard = ({Item}) => {
    const theme=useTheme();
    const breakpoints=useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card sx={{ maxWidth:breakpoints?250: 290 }}>
      <CardMedia
        component="img"
        alt="product image"
        height={breakpoints ? "130":  "200"}
        sx={{objectFit:'contain'}}
        image={`${Item.image}`}
      />
      <CardContent>
        <Typography gutterBottom variant={breakpoints?"h6":"h5"} component="div">
        {Item.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {Item.productName}
        </Typography>
        <Typography variant="body1" sx={{marginTop:'1rem'}}>
        Rs. {Item.Price}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex",alignItems:'flex-start',justifyContent:'space-around'}}>
        <Button size="medium" variant='contained'>ADD TO CART</Button>
        <IconButton aria-label="delete">
            <FaHeart/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard