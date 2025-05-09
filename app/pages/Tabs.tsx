import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Tabs: React.FC = () => {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 max-w-7xl w-full">
        <div className="flex flex-col gap-4 max-w-md text-center lg:text-left">
          <Button className="bg-[#02D9C0] mb-8 p-5 text-white dark:bg-[#8726DC] w-fit self-center lg:self-start">
            Tools
          </Button>
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight">
            Empower Your Creativity with AI-Driven Tools
          </h1>
          <p className="text-sm  leading-relaxed text-gray-700 dark:text-gray-300">
            Harness the transformative power of AI to streamline complex
            processes, boost creativity, and deliver unmatched results across
            industries.
          </p>
        </div>
        <div className="w-full max-w-[800px]">
          {/* Galaxy for Light Theme */}
          <Image
            src="/assest/Galaxy.png"
            alt="Light Theme"
            width={800}
            height={800}
            className="w-full h-auto object-cover object-top dark:hidden"
          />

          {/* Tab for Dark Theme */}
          <Image
            src="/assest/tab.png"
            alt="Dark Theme"
            width={800}
            height={800}
            className="w-full h-auto object-cover object-top hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
