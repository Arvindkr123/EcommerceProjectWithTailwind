import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar.jsx'
import SliderArrowLeftRight from '../components/SliderArrowLeftRight.jsx'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Announce/>
      <Navbar />
      <SliderArrowLeftRight />
      <Categories/>
    </div>
  )
}

export default Home
