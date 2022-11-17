import React from 'react'
import "../HeroSection/HeroSection.css";
import styled from 'styled-components';

const StyledButton=styled.button `
background:`;

const HeroSection = () => {
  return (
    <div className='Image_container flex-center'>
       <div className='Image_holder flex-center'>
        <img className='hero_img' alt="Banner_image" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
       </div>
       <div className='quote_container'>
        <span className='quote'>We’ve got you under our wing.</span>
        <p className='title'>Explore the new Life Insurance policies.</p>
       <StyledButton>Explore</StyledButton>
       </div>
    </div>
  )
}

export default HeroSection