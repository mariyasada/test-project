import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import TabComponent from '../Components/TabComponent/TabComponent'
import ProductListingPage from './ProductListingPage';
import ProductsViewInList from './ProductsViewInList';


const ProductPage = () => {
   const [view,setView]=useState("Grid");
   const theme=useTheme();
    const breakpoints=useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    <Box className='flex-center gap-2 mt-2'>
        <Typography sx={{fontSize:breakpoints && "12px" ,marginLeft:breakpoints && "3px"}}>Select View of Product Page:</Typography>
        <TabComponent view={view} setView={setView}/>
    </Box>
    <Box>
    {view==="Grid" ? <ProductListingPage/> :
    <ProductsViewInList/>}
    </Box>
    </>
  )
}

export default ProductPage