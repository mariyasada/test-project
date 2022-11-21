import { Box } from '@mui/material';
import React from 'react'
import HorizontalCard from '../Components/Card/HorizontalCard';
import { productData } from '../Components/Data/productData';


const ProductsViewInList = () => {
    return (
        <Box sx={{display:"flex",flexDirection:"column",margin:"2rem auto"}}>
            {productData.map((Item)=>{
                return( 
                <HorizontalCard Item={Item} key={Item.id}/>
            )
            })}        
      </Box>
  )
}

export default ProductsViewInList