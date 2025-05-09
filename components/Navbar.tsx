'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import Toggle from '@/app/Toggle'

type NavItem = {
  name: string
  href: string
}

export default function Navbar()  {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev)
  }

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Blog', href: '/blog' },
    { name: 'More', href: '/more' },
  ]

  if (!mounted) return null

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/assest/Vector.png"
                alt="Neuralcrafts Logo"
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="ml-3 text-xl font-bold dark:text-white text-black">
                Neuralcrafts
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="cursor-pointer dark:text-white text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                    {item.name}
                  </span>
                </Link>
              ))}
              <Button className="bg-transparent text-black hover:text-white hover:bg-black border-black border dark:border-white px-8 dark:text-white dark:bg-transparent">
                Join
              </Button>
              <Button className="bg-black text-white hover:text-black hover:bg-transparent border border-black dark:bg-white px-6 dark:text-black">
                Sign Up
              </Button>
              <Toggle />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <Toggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md dark:text-white text-black hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <CloseIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                <span className="block dark:text-white text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                  {item.name}
                </span>
              </Link>
            ))}
            <div className="pt-4 pb-2 flex justify-center space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
