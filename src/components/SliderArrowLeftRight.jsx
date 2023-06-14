import React, { useState } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { ApiSlides } from '../apifolder/sliderApi';
import './slider.css'
const SliderArrowLeftRight = () => {

    const [slides] = useState(ApiSlides);
    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);
        }
    }

    const prevSlide = () => {
        if (activeSlide === 0) {
            setActiveSlide(slides.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }
    }


    const arrowStyle = `rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer
    rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer`
    return (
        <div className='h-[540px]  bg-white flex items-center justify-between'>
            <div className={arrowStyle}>
                <ArrowBackIosNewOutlinedIcon style={{ fontSize: "50px" }} onClick={prevSlide} />
            </div>

            {
                slides.map((slide, index) => {
                    if (index === activeSlide) {
                        return <div key={index} className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0]  overflow-hidden relative ${slide.background}`}>
                            <div className="slide flex items-center justify-center h-[100%]">
                                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                                    <img className='h-[100%] object-cover' src={`${slide.src}`} alt="" />
                                </div>
                                <div className="des flex flex-col flex-1 place-items-start -ml-11 justify-center">
                                    <h2 className='text-[55px]'>{slide.content.h2}</h2>
                                    <p className='text-[30px]'>{slide.content.p}</p>
                                    <button className='btn'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    }
                })
            }

            <div className={arrowStyle}>
                <ArrowForwardIosOutlinedIcon style={{ fontSize: "50px" }} onClick={nextSlide} />
            </div>
        </div>
    )
}

export default SliderArrowLeftRight
