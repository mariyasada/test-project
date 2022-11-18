import { Grid, useMediaQuery, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import ProductCard from '../Components/Card/Card'
import { productData } from '../Components/Data/productData'




const useStyles=makeStyles(theme=>({
    GridStyle:{
     
    },
}))

const ProductListingPage = () => {
    const theme=useTheme();
    const breakpoints=useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container spacing={4} columns={15} sx={{marginTop:'2rem'}} justifyContent="center">
        {productData.map((Item)=>{
            return( 
            <Grid item xs={12} md={4} key={Item.id}>
            <ProductCard  Item={Item} key={Item.id} />
        </Grid>)
        })}        
    </Grid>
  )
}

export default ProductListingPage