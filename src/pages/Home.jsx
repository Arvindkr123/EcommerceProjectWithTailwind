import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar.jsx'
import SliderArrowLeftRight from '../components/SliderArrowLeftRight.jsx'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLatter from '../components/NewsLatter'

const Home = () => {
  return (
    <div>
      <Announce/>
      <Navbar />
      <SliderArrowLeftRight />
      <Categories />
      <Products/>
      <NewsLatter/>
    </div>
  )
}

export default Home
