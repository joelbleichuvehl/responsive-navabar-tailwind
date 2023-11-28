'use client'
import Image from 'next/image'
import Logo from '@/public/assets/logo.png'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [viewMobileMenu, setViewMobileMenu] = useState(false)

  return (
    <nav className='bg-gray-800 min-h-[40px]'>
      <div className='h-full items-center flex w-[95%] md:w-[80%] mx-auto px-4 sm:px-6 lg:px-'>
        <div className='flex items-center gap-16 justify-between  w-full'>
          <div className='flex items-center  '>
            <a href='/' className='flex-shrink-0'>
              <Image src={Logo} alt='Logo' className='w-14' priority={true} />
            </a>
          </div>

          <div className='hidden md:block'>
            <div className='flex items-center space-x-4'>
              <a
                href='#'
                className='text-white hover:bg-gray-500 px-3 py-2 text-sm transition duration-200 ease-in-out'
              >
                Sobre
              </a>
              <a
                href='#'
                className='text-white hover:bg-gray-500 px-3 py-2 text-sm transition duration-200 ease-in-out'
              >
                Sobre
              </a>
            </div>
          </div>

          <div className='flex items-center mt-1  text-white rounded hover:bg-gray-700 md:hidden  '>
            <button type='button' onClick={() => setViewMobileMenu(!viewMobileMenu)}>
              {!viewMobileMenu ? (
                <Menu size={32} className='animate-waving-hand' />
              ) : (
                <X size={32} className='animate-waving-hand' />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${viewMobileMenu ? 'block' : 'hidden '} md:hidden  mt-2  animate-slide-down `}>
        <div className=' flex flex-col py-3'>
          <a href='#' className='text-white hover:bg-gray-500 px-3 py-2 text-sm transition duration-200 ease-in-out'>
            Sobre
          </a>
          <a href='#' className='text-white hover:bg-gray-500 px-3 py-2 text-sm transition duration-200 ease-in-out'>
            Contato
          </a>
        </div>
      </div>
    </nav>
  )
}
