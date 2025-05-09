'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Image from 'next/image'

// Define the structure of each card
interface Card {
  img: string
  title: string
  desc: string
}

const Discover: React.FC = () => {
  const cards: Card[] = [
    {
      img: '/assest/Vector.png',
      title: 'Automated Insights for Smarter Decision Making',
      desc: 'Unlock valuable insights with our AI-driven analytics.',
    },
    {
      img: '/assest/Vector.png',
      title: 'Intelligent Workflow Automation',
      desc: 'Streamline your operations with intelligent process automation.',
    },
    {
      img: '/assest/Vector.png',
      title: 'AI-Powered Personalization',
      desc: 'Deliver tailored experiences using machine learning.',
    },
  ]

  return (
    <div className="flex justify-center items-center relative">
      <div className="dark:bg-[#14213D] flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-20 min-h-screen overflow-hidden">
        {/* Glow Effect */}
        <div>
          <div className="absolute right-[10px] bottom-[-150px] w-[400px] h-[400px] rounded-full bg-[#00f8d3] dark:bg-[#8726DC] opacity-30 blur-3xl pointer-events-none z-40 hidden sm:block"></div>
        </div>

        {/* Header Text */}
        <div className="text-center max-w-xl z-10">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Innovate</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Discover Our Cutting-Edge AI Solutions
          </h1>
          <p className="text-sm sm:text-base  text-gray-600 dark:text-gray-400">
            Our platform harnesses the power of AI to transform your business processes. Experience seamless integration and enhanced productivity like never before.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 z-10 w-full max-w-7xl">
          {cards.map((card, index) => (
            <div key={index} className="p-6 flex flex-col items-center text-center">
              <div className="relative mb-8">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={30} 
                  height={30} 
                  className="object-contain rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 z-10">
          <Button variant="outline" className="border border-black dark:border-white">
            Learn More
          </Button>
          <Button variant="ghost" className="flex items-center gap-1">
            Ghost
            <ArrowForwardIosIcon className="text-xs" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Discover
