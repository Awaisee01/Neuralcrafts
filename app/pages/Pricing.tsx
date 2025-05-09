'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  showBg: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Free Plan',
    price: '$0.00/month',
    features: [
      'Basic AI tools and limited functionality',
      'Access to pre-made templates',
      'Up to 3 projects per month',
    ],
    showBg: true,
  },
  {
    title: 'Premium Plan',
    price: '$29.99/month',
    features: [
      'Full access to all AI tools',
      'Customizable templates and advanced designs',
      'Unlimited projects',
    ],
    showBg: false,
  },
  {
    title: 'Ultra Plan',
    price: '$99.99/month',
    features: [
      'Everything in Premium, plus:',
      'Dedicated account manager',
      'Team collaboration tools',
    ],
    showBg: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="relative flex flex-col overflow-hidden">
      {/* Header Section */}
      <div className="dark:bg-[#14213D] flex flex-col items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto z-10">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Innovate
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Choose the Perfect Plan for Your AI Journey
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            From Starter Tools to Enterprise Solutions, We have Got You Covered.
          </p>
          <div className="flex gap-3 sm:gap-5 justify-center items-center mt-5">
            <Button className="bg-[#02D9C0] text-black dark:bg-[#8726DC] hover:bg-[#02D9C9] dark:text-white rounded-md px-6 py-2 text-sm sm:text-base">
              Monthly
            </Button>
            <Button className="bg-[#D9D4DD] hover:bg-[#D9D4DD] dark:bg-[#5F5E61] text-black dark:text-white rounded-md px-6 py-2 text-sm sm:text-base">
              Yearly
            </Button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16 z-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${index === 1 ? 'md:-mt-16 pb-2 lg:-mt-16' : ''}`}
            >
              <div
                className={`bg-white dark:bg-[#37425a] h-full min-h-[400px] max-h-[420px]
                shadow-[0_0_30px_rgba(2,217,192,0.4)]
                dark:shadow-[0_10px_50px_rgba(135,38,220,0.6)]
                rounded-tl-[20px] rounded-tr-[200px] 
                pt-8 pb-6 px-6 rounded-bl-[20px] rounded-br-[20px]
                flex flex-col`}
              >
                {plan.showBg && (
                  <div className="absolute z-30 h-[400px] w-[300px] md:h-[500px] md:w-[400px] left-1/2 md:left-11/12  -translate-x-1/2 -top-[250px] md:-top-[300px]">
                    <Image
                      src="/assest/Bg (2).png"
                      alt="Light Theme Background"
                      fill
                      className="object-contain object-bottom dark:hidden"
                    />
                    <Image
                      src="/assest/Bg (3).png"
                      alt="Dark Theme Background"
                      fill
                      className="object-contain object-bottom hidden dark:block"
                    />
                  </div>
                )}

                <div className="relative z-10">
                  <p className="text-[#8726DC] text-xl md:text-2xl font-semibold dark:text-[#02D9C0] mb-4">
                    {plan.title}
                  </p>
                  <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-6 md:mb-8">
                    {plan.price}
                  </h1>
                  <p className="font-semibold text-lg mb-4">Features</p>
                  <div className="space-y-4 text-black dark:text-white mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <p key={fIdx} className="flex items-start">
                        <span className="mr-2">•</span> {feature}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="w-full">
                  <Button
                    className={`w-full py-3 md:py-4 text-sm md:text-base ${
                      index === 1
                        ? 'bg-[#02D9C0] dark:bg-[#8726DC] text-white hover:bg-[#02c9b0] dark:hover:bg-[#7a1fd6]'
                        : 'bg-[#D9D4DD] dark:bg-[#5F5E61] text-black dark:text-white hover:bg-[#c9c4cd] dark:hover:bg-[#4f4e50]'
                    } rounded-md transition-colors duration-300`}
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="w-full mt-20 overflow-hidden max-h-[450px]">
        <Image
          src="/assest/style (1).png"
          alt="Dark Theme"
          width={1920}
          height={1080}
          className="w-full h-auto hidden dark:block object-cover object-top"
        />
        <Image
          src="/assest/style.png"
          alt="Light Theme"
          width={1920}
          height={1080}
          className="w-full h-auto dark:hidden object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Pricing;
