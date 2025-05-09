import React from 'react'
import Navbar from '@/components/Navbar'
import Home from './pages/Home'
import Feature from './pages/Feature'
import Discover from './pages/Discover'
import Pricing from './pages/Pricing'
import Tabs from './pages/Tabs'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div className='overflow-hi'>
      <Navbar/>
      <Home/>
      <Feature/>
      <Discover/>
      <Pricing/>
      <Tabs/>
      <Footer/>
     
    </div>
  )
}

export default page