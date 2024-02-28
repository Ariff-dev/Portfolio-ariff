'use client'

import { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { IoCloseSharp } from 'react-icons/io5'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isMenuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='flex items-center justify-between pt-4'>
      <div className=''>
        <p className='font-semibold text-3xl'>ArDev</p>
      </div>
      <div className=' md:hidden' onClick={isMenuOpen}>
        <IoMenu size={32} />
      </div>
      <div
        className={
          isOpen
            ? 'fixed right-0 top-0 p-4 bg-color-bg w-1/2 min-h-screen ease-in duration-300 transition-all'
            : 'fixed right-[-1000px]'
        }
      >
        <div className='flex justify-end ' onClick={isMenuOpen}>
          <IoCloseSharp size={32} />
        </div>
        <ul className='flex flex-col gap-4 text-color-text-sub'>
          <li className='text-white underline decoration-1'>Home</li>
          <li>Credenciales</li>
          <li>Proyectos</li>
          <li>Blog</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className='hidden md:flex'>
        <ul className='flex items-center gap-4 text-color-text-sub'>
          <li className='text-white'>Home</li>
          <li>Credenciales</li>
          <li>Proyectos</li>
          <li>Blog</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className='md:flex items-center justify-center w-32  hidden'>
        <p className='bg-color-bg-secundary  rounded-2xl p-2'>Hablemos</p>
      </div>
    </nav>
  )
}
