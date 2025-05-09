'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Feature: React.FC = () => {
  return (
    <div className="flex bg-white dark:bg-[#14213D] justify-center items-center py-10 px-4 sm:px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center gap-12 lg:gap-24 relative">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Innovate</p>
          <h1 className="text-3xl sm:text-4xl max-w-md font-bold text-gray-900 dark:text-white leading-tight mt-2">
            Discover Future of AI Technology
          </h1>
          <p className="text-sm text-black  dark:text-white mt-4 max-w-lg mx-auto lg:mx-0">
            Our AI platform harnesses cutting-edge technology to deliver intelligent solutions tailored to your needs.
            Experience seamless integration and unparalleled efficiency like never before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
            <Button variant="outline" className="border border-black  dark:border-white">
              Learn More
            </Button>
            <Button variant="ghost" className="flex  items-center gap-1 text-black dark:text-white">
              Sign up
              <ArrowForwardIosIcon className="text-[8px]" />
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[450px]">
          <div
            className="absolute bg-cover bg-center z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] right-10 sm:right-30 top-20 sm:top-30"
            style={{ backgroundImage: 'url(/assest/Image.png)' }}
          ></div>

          <div
            className="absolute bg-cover bg-center w-full max-w-[200px] h-[400px] sm:max-w-[280px] sm:h-[550px] right-0 top-[-40px]"
            style={{ backgroundImage: 'url(/assest/Image5.png)' }}
          ></div>
        </div>

        {/* Glow Effect */}
        <div className="absolute z-30 left-[-200px] bottom-[-200px] w-[300px] h-[300px] rounded-full bg-[#00f8d3] dark:bg-[#8726DC] opacity-60 blur-3xl pointer-events-none hidden sm:block"></div>
      </div>
    </div>
  )
}

export default Feature
