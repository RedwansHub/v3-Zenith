'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeSwitcher from './Switcher'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

type Props = {
  delay?: any
}

const Header = ({ delay }: Props) => {

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
    }

  const closeMenu = () => {
    setMenuOpen(false)
  }
  const { theme, setTheme } = useTheme();
  useEffect( () => {
    
  }, [theme])
  const pathname = usePathname()
  const navLinks = [
    { id: 1, name: 'Home', path: '/'},
    { id: 2, name: 'About', path: '/about'},
    { id: 3, name: 'Portfolio', path: '/portfolio'},
    { id: 4, name: 'Services', path: '/services'},
    { id: 5, name: 'Contact', path: '/contact'},
  ]
  console.log(pathname);
  
  return (
    <div className='w-full h-fit relative'>
        <div className='w-full h-fit lg:px-24 '>
          <motion.div 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.6, delay: delay | 2.8 }}
              className='w-full h-full flex justify-between items-center p-4 lg:px-12 bg-white dark:bg-[#242424]/50 backdrop-blur-sm   shadow-lg'>
            <Link href='/' className='flex cursor-pointer gap-2 items-center '>
              {theme == 'dark' ?
              <Image src={'/images/logo/white01.svg'} alt='image' width={35} height={35} />
              : <Image src={'/images/logo/primary.svg'} alt='image' width={35} height={35} />
              }
              <div className='flex -space-y-2 flex-col'>
                <h2 className='font-semibold text-2xl '>Zenith</h2>
                <h2 className='font-medium text-xs'>Construction</h2>
              </div>
            </Link>
            <div className='flex gap-2'>
              <div className='hidden md:flex items-end justify-center gap-3'>
                {navLinks.map( i => (
                    <Link 
                        key={i.id}
                        href={i.path}
                        className={` font-normal p-1 text-sm cursor-pointer 
                            ${pathname == i.path 
                                ? 'border-b-2  border-primary dark:border-white' : '' }
                            duration-200 ease-in
                            hover:scale-105 hover:font-bold `}>
                        {i.name}
                    </Link>
                ))}
                <div className='w-fit h-full grid place-items-center'>
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
            <div className='md:hidden flex gap-4 items-center'>
              <ThemeSwitcher />
              <button onClick={toggleMenu}>
                {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
              </button>
            </div>
          </motion.div>

          {menuOpen && (
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.5 }}
              className='md:hidden flex flex-col items-center dark:bg-white/50 bg-black/50 dark:text-black text-white backdrop-blur-md  shadow-lg p-4 mt-2'>
              {navLinks.map( i => (
                    <Link 
                        key={i.id}
                        href={i.path}
                        onClick={closeMenu}
                        className={` w-full text-center font-normal p-2 cursor-pointer 
                            ${pathname == i.path 
                                ? 'shadow-xl bg-primary text-white font-semibold dark:border-white' : '' }
                             `}>
                        {i.name}
                    </Link>
                ))}
            </motion.div>
          )}
        </div>
  </div>
)
}

export default Header