import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useState } from 'react'

const Product = ({ item }) => {
  const [hoverEffect, setHoverEffect] = useState(' opacity-0');
  const handleHoverEnter = () => {
    setHoverEffect(' opacity-1 bg-rgba(0,0,0,0.2)')
  }

  const handleHoverExit = () => {
    setHoverEffect(' opacity-0')
  }
  const iconStyle = `h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.2] ease-in duration-100 `;
  return (
    <div className='flex justify-center items-center min-w-[300px] min-h-[350px] overflow-hidden rounded-md shadow-lg relative m-4' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
      <img src={item.src} alt="" />
      <div className={`flex justify-center items-center w-full h-full absolute ${hoverEffect} ease-in duration-300`}>
        <div className={iconStyle}>
          <ShoppingBagOutlinedIcon />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlinedIcon />
        </div>
        <div className={iconStyle}>
          <SearchOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Product
