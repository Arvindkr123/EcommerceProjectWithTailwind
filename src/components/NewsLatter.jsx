import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const NewsLatter = () => {
    return (
        <div className='flex  justify-center items-center h-[350px] w-full flex-col bg-[#c4a4f9]'>
            <h1 className='font-bold text-4xl'>NEWSLETTER</h1>
            <h2 className='text-xl mt-2'>Alawys in  touch with us, for your favourites products ..</h2>
            <div className='flex mt-[3rem] items-center justify-between bg-white border-[#cccccc] rounded-[5px] overflow-hidden  min-w-[30rem] min-h-[2rem]'>
                <input type="email" placeholder='email' className='outline-none pl-[20px] border-none flex-[7]' />
                <button className='flex-1 bg-[#4caf50] h-full'>
                    <SendOutlinedIcon className='text-white'/>
                </button>
            </div>
        </div>
    )
}

export default NewsLatter
