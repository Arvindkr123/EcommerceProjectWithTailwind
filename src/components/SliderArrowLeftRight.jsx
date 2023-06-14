import React from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const SliderArrowLeftRight = () => {
    const arrowStyle = `rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer
    rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer`
    return (
        <div className='h-[540px]  bg-white flex items-center justify-between'>
            <div className={arrowStyle}>
                <ArrowBackIosNewOutlinedIcon style={{ fontSize: "50px" }} />
            </div>
            <div className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0]  overflow-hidden relative bg-[#ff8c00]">
                <div className="slide flex items-center justify-center h-[100%]">
                    <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                        <img className='h-[100%] object-cover' src="https://t4.ftcdn.net/jpg/02/72/00/05/240_F_272000531_2ef7ZThrO48Rqu9weMubN5Hns7AyHKJ9.jpg" alt="" />
                    </div>
                    <div className="des flex flex-col flex-1 place-items-start -ml-11 justify-center">
                        <h2 className='text-[55px]'>Hey this is an awesome deal today </h2>
                        <p className='text-[30px]'>Upto 40% off</p>
                        <button className='btn'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className={arrowStyle}>
                <ArrowForwardIosOutlinedIcon style={{ fontSize: "50px" }} />
            </div>
        </div>
    )
}

export default SliderArrowLeftRight
