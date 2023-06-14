import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar.jsx'
import SliderArrowLeftRight from '../components/SliderArrowLeftRight.jsx'

const Home = () => {
  return (
    <div>
      <Announce/>
      <Navbar />
      <SliderArrowLeftRight/>
    </div>
  )
}

export default Home
