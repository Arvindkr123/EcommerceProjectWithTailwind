import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Footer = () => {

    const socialIconStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
    return (
        <div className='flex items-center justify-around p-2'>
            <div className='flex-1 flex flex-col flex-wrap p-2'>
                {/* Store the Information */}
                <h1 className='text-2xl'>ThakurkeepsCode</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, reprehenderit corrupti ab nam accusantium itaque eveniet porro hic corporis modi illo temporibus earum nihil ducimus aliquam! Omnis incidunt facere aliquam!</p>
                <div className='flex items-center justify-center mt-3 self-start'>
                    <div className={`${socialIconStyle} bg-blue-700`}><FacebookOutlinedIcon /></div>
                    <div className={`${socialIconStyle} bg-orange-500`}><InstagramIcon /></div>
                    <div className={`${socialIconStyle} bg-sky-500`}><TwitterIcon /></div>
                    <div className={`${socialIconStyle} bg-red-500`}><PinterestIcon /></div>
                </div>
            </div>
            <div className='flex-1 flex flex-col p-2'>
                {/* Contact Information */}
                <div className='flex m-3'>
                    <LocationOnOutlinedIcon />
                    <p className='pl-3'>State of Uttar Pradesh</p>
                </div>
                <div className='flex m-3'>
                    <LocalPhoneOutlinedIcon />
                    <p className='pl-3'>+919315207665</p>
                </div>
                <div className='flex m-3'>
                    <EmailOutlinedIcon />
                    <p className='pl-3'>thakurarvindkr10@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
