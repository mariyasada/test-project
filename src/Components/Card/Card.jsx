import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = ({Item}) => {
    const theme=useTheme();
    const breakpoints=useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card sx={{ maxWidth:breakpoints?250: 290 }}>
      <Link to={`/product/${Item.id}`}>
      <CardMedia
        component="img"
        alt="product image"
        height={breakpoints ? "130":  "200"}
        sx={{objectFit:'contain'}}
        image={`${Item.image}`}
      />
      </Link>
      <CardContent sx={{display:"flex",alignItems:"flex-start",flexDirection:'column',marginLeft:"1.3rem"}} >
        <Typography gutterBottom variant={breakpoints?"h6":"h5"} component="div">
        {Item.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
        {Item.productName}
        </Typography>
        <Typography variant="body1" sx={{marginTop:'1rem'}}>
        Rs. {Item.Price}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex",alignItems:'flex-start',justifyContent:'space-around'}}>
        <Button size="medium" variant='contained'>ADD TO CART</Button>
        <IconButton aria-label="wishlist">
            <FaHeart/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard