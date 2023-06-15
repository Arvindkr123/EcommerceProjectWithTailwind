import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import NewsLatter from '../components/NewsLatter'
import Footer from '../components/Footer'
import Counter from '../components/Counter'

const ProductPage = () => {
    return (
        <div>
            <Announce />
            <Navbar />
            <div className='flex justify-center '>
                <div className='flex flex-1 items-center justify-center'>
                    <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
                        className="product_img w-[80%] h-[80%] rounded-lg hover:scale-[1.1] ease-in duration-300"
                        alt="product_image" />
                </div>
                <div className='flex-[1.3] flex items-start justify-items-start flex-col mt-[5rem]'>
                    <h1 className='title text-[40px]'>Creamy Hoody Original</h1>
                    <p className='pr-[8rem] text-justify mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, eum possimus ipsam nam sit, nemo molestias assumenda asperiores earum odio architecto aliquam soluta optio unde harum dolor! Laboriosam, perferendis repudiandae.
                    </p>
                    <p className='mt-7 text-3xl'>Price : <b>$70</b></p>
                    <div className=' flex text-2xl mt-7 items-center'>
                        Colors
                        <div className='hover:border-[#8a4af3]  bg-red-400 w-[3rem] h-[3rem] border-2 cursor-pointer ml-5 rounded-full'></div>
                        <div className='hover:border-[#8a4af3]  bg-blue-400 w-[3rem] h-[3rem] border-2 cursor-pointer ml-5 rounded-full'></div>
                        <div className='hover:border-[#8a4af3]  bg-yellow-400 w-[3rem] h-[3rem] border-2 cursor-pointer ml-5 rounded-full'></div>
                    </div>
                    <div className='mt-7 text-2xl '>
                        Size
                        <select className='ml-5 border-2 border-silver'>
                            <option selected disabled>Select</option>
                            <option value={"Small"}>Small</option>
                            <option value={"Medium"}>Medium</option>
                            <option value={"Large"}>Large</option>
                        </select>
                    </div>
                    <div className='mt-5'>
                    <Counter/>
                    </div>
                    <button className='btn mt-5'>Add To Cart</button>
                </div>
            </div>
            <NewsLatter />
            <Footer />
        </div>
    )
}

export default ProductPage
