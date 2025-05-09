  'use client'

  import { Button } from '@/components/ui/button'
  import Image from 'next/image'
  import React from 'react'

  const Home: React.FC = () => {
    return (
      <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assest/BG.png"
          alt="Background"
          fill
          className="absolute inset-0  -z-10"
          priority
        />
        <div className="absolute inset-0 bg-white/20 dark:bg-[#14213D]/70 backdrop-blur-lg -z-10" />

        {/* Main Content */}
        <div className="flex p-5 justify-center items-center flex-col mt-30 lg:mt-0 lg:flex-row gap-20 lg:gap-70">
          {/* Text Section */}
          <div className="flex flex-col px-26 items-center">
            <div className="flex     flex-col gap-4 text-center lg:text-left">
              <h1 className="text-3xl xl:w-[450px]    sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-black dark:text-white leading-tight">
              Revolutionizing Your World with AI Solutions
              </h1>
              <p className="text-sm max-w-md mx-auto sm:text-md xl:text-md text-gray-700 dark:text-gray-400 ">
                Discover the future of technology with our AI-powered platform designed to enhance your everyday experiences.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button className="bg-[#02D9C0] text-white px-6 py-4 dark:bg-[#8726DC] dark:hover:bg-[#6a1eb0]">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-900 bg-transparent text-gray-900 px-6 py-4 dark:border-white dark:text-white dark:hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Robot Illustration */}
          <div className=" min-h-[500px] w-[500px] relative flex justify-center items-center">
          <div className='absolute w-[300px] h-[300px]  sm:w-[400px] dark:hidden sm:h-[400px]'>
          <Image
              src="/assest/Bg (2).png"
              alt="Dark BG"
              fill
              className="object-contain object-bottom "
              priority
            />
          </div>
          <div className='absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] hidden dark:block '>
          <Image
              src="/assest/Bg (3).png"
              alt="Light BG"
              fill
              className="object-contain  object-bottom "
              priority
            />
          </div>
          <div className='absolute right-[40px] sm:right-[-100px]  h-[700px] w-[700px]  sm:w-[1000px] sm:h-[1000px] '>
          <Image
              src="/assest/robo.png"
              alt="AI Robot"
              fill
              className="object-contain drop-shadow-lg animate-float"
              priority
            />
          </div>
          </div>
        </div>

        {/* Global Styles for Animation */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
        
      </div>
    )
  }

  export default Home
