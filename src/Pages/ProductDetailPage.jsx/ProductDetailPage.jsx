import { Box, Typography, CardMedia, Button, IconButton, useTheme, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'







const useStyles=makeStyles(theme=>({
    papercontainer:{
        display:"flex",
        flexDirection:"row",
        height:"100%",
    },
    imageOuterContainer:{
        display:"flex",
        alignItems:"flex-start",
        padding:"10px",
        width:"100%",
        height:"100%",
        gap:"2rem"
    },
    columnImageContainer:{
        width:"20rem",
        height:'100%',
        padding:'8px',
        display:'flex',
        flexDirection:'column',
        gap:"1rem",
        
    },
    productImageInColumn:{
      width:"20rem",
      height:"20rem",
      backgroundColor:"pink"
    },
    
}))

const ProductDetailPage = () => {
    const productData=useSelector(state=>state.authReducer.products);
    const classes=useStyles();
    const { productId } = useParams();
    const theme=useTheme();
    const breakpoints=useMediaQuery(theme.breakpoints.down("sm"));

    const getProductDetails = (products, productId) => {
        return products.find((product) => product.id === productId);
      };
    
      let productToShow = getProductDetails(productData, productId);
      const [mainImg, setMainImg] = useState(productToShow?.image);

      useEffect(() => {
        setMainImg(productToShow?.image);
      }, [productToShow?.image]);

  return (
    
        <Box component="div" sx={{margin:"2rem",display:"flex",flexFlow:"row wrap"}} >
           <Box sx={{height:"fit-content",width:breakpoints ?"90vw":"100%"}}>
            <Box component="div" className={classes.imageOuterContainer} sx={{width:breakpoints ?"80%":"100%"}}>
                <Box component="div" className={classes.columnImageContainer} >
                        <Box component="div" >
                        <CardMedia
                            component="img"
                            alt="product image"
                            height={breakpoints?"100":"150"}
                            width={breakpoints?"100":"150"}
                            sx={{objectFit:'contain',cursor:"pointer"}}
                            image={`${productToShow?.image}`}
                            onClick={() => setMainImg(productToShow?.image)}
                            

                        />
                        </Box>
                        <Box>
                        <CardMedia
                            component="img"
                            alt="product image"
                            height={breakpoints?"100":"150"}
                            width={breakpoints?"100":"150"}
                            sx={{objectFit:'contain',cursor:"pointer"}}
                            image={`${productToShow?.img1}`}
                            onClick={() => setMainImg(productToShow?.img1)}
                        />
                        </Box>
                        <Box >
                        <CardMedia
                            component="img"
                            alt="product image"
                            height={breakpoints?"100":"150"}
                            width={breakpoints?"100":"150"}
                            sx={{objectFit:'contain',cursor:"pointer"}}
                            image={`${productToShow?.img2}`}
                            onClick={() => setMainImg(productToShow?.img2)}
                        />
                        </Box>
                </Box>
           
                <Box>
                        <CardMedia
                                    component="img"
                                    alt="product image"
                                    height= {breakpoints?"400":"480"}
                                    width= {breakpoints?"290":"350"}
                                    sx={{objectFit:'contain',cursor:"pointer"}}
                                    image={`${mainImg}`}
                                />
                </Box>
            </Box>
          </Box>
          <Box>
            <Box component="div" sx={{height:"fit-content",width:breakpoints?"300px":"600px",marginLeft:breakpoints ?"1rem":"4rem",marginTop:"2rem",padding:"8px"}} >
                <Typography  gutterBottom variant={breakpoints ?"h6":'h4'} align="left">{productToShow?.productName}</Typography>
                <Typography gutterBottom variant='body2' align="left">{productToShow?.brand}</Typography>
                <Typography gutterBottom variant={breakpoints?"h6":'h5'} align="left">Rs. {productToShow?.Price}</Typography>
                <Typography gutterBottom variant='subtitle2' align="left">{productToShow?.description}</Typography>
                       
               <Box component="div" sx={{display:"flex",alignItems:'flex-start',justifyContent:'flex-start',padding:"10px",gap:"3rem"}}>
                        <Button size="medium" variant='contained'>ADD TO CART</Button>
                        <IconButton aria-label="Wishlist">
                            <FaHeart/>
                        </IconButton>
                </Box>
            </Box>
          </Box>
        </Box>
    
  )
}

export default ProductDetailPage