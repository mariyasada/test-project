import { Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import HorizontalCard from '../Components/Card/HorizontalCard';



const ProductsViewInList = () => {
    const productData=useSelector(state=>state.authReducer.products);
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