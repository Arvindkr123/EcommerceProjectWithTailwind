import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import NewsLatter from '../components/NewsLatter'
import Footer from '../components/Footer'

const CategoryPage = () => {
    return (
        <div>
            <Announce />
            <Navbar></Navbar>
            <div className='flex flex-col p-5 border-[5px] border-black'>
                <h1 className='text-3xl'>Men's Cloth</h1>
                <div className='flex items-center justify-between mt-3'>
                    <div className='flex'>
                        <p>Filter by </p>
                        <select className='ml-3 border-2 border-silver'>
                            <option selected disabled>Size</option>
                            <option value={"Small"}>Small</option>
                            <option value={"Medium"}>Medium</option>
                            <option value={"Large"}>Large</option>
                        </select>
                        <select className='ml-3 border-2 border-silver'>
                            <option selected disabled>Color</option>
                            <option value={"Yellow"}>Yellow</option>
                            <option value={"Blue"}>Blue</option>
                            <option value={"Red"}>Red</option>
                        </select>
                    </div>
                    <div className='flex'>
                        <p>Sort by</p>
                        <select className='ml-3 border-2 border-silver'>
                            <option selected disabled>Size</option>
                            <option value={"first"}>Newset (first)</option>
                            <option value={"oldset"}>oldset (first)</option>
                            <option value={"price"}>Price (Asc)</option>
                            <option value={"price"}>Price (Dsc)</option>
                        </select>
                    </div>
                </div>
            </div>
            <Products />
            <NewsLatter />
            <Footer />
        </div>
    )
}

export default CategoryPage
