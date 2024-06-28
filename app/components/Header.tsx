'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeSwitcher from './Switcher'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import HeadOptions, { SubProps } from './HeadOptions'

type OptionsProps = {
  id: number,
  name: string,
  subOptions?: SubProps[],
  path: string,
}
type Props = {
  delay?: number
}

const Header = ({ delay = 1 }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()

  const navLinks: OptionsProps[] = [
    { id: 1, name: 'Home', path: '/' },
    {
      id: 2, name: 'About', path: '/about',
      subOptions: [
        { id: 1, name: 'Our Process', path: '#OurProcess' },
        { id: 2, name: 'Our Values', path: '#OurValues' },
      ]
    },
    { id: 3, name: 'Projects', path: '/projects' },
    { id: 4, name: 'Services', path: '/services' },
    {
      id: 5, name: 'Support', path: '/contact',
      subOptions: [
        { id: 1, name: 'Contact', path: '/contact' },
        { id: 2, name: 'FAQ', path: '/FAQ' },
      ]
    },
  ]

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className='w-full h-fit relative'>
      <div className='w-full h-fit lg:px-24'>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.6, delay }}
          className='w-full h-full flex justify-between items-center p-4 lg:px-12 bg-white/50 dark:bg-[#242424]/50 backdrop-blur-sm shadow-lg'>
          <Link href='/' className='flex cursor-pointer gap-2 items-center'>
            {theme === 'dark' ?
              <Image src={'/images/logo/white01.svg'} alt='logo' width={35} height={35} />
              : <Image src={'/images/logo/primary.svg'} alt='logo' width={35} height={35} />
            }
            <div className='flex -space-y-2 flex-col'>
              <h2 className='font-semibold text-2xl'>Zenith</h2>
              <h2 className='font-medium text-xs'>Construction</h2>
            </div>
          </Link>
          <div className='flex gap-2'>
            <div className='hidden md:flex items-end justify-center gap-3'>
              {navLinks.map(link => (
                <HeadOptions key={link.id} {...link} />
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
            className='md:hidden flex flex-col items-center bg-primary/10 dark:bg-black/50 text-black dark:text-white backdrop-blur-md shadow-lg p-4 '>
            {navLinks.map(link => (
              <Link
                key={link.id}
                href={link.path}
                onClick={closeMenu}
                className={`w-full text-center font-normal p-2 cursor-pointer ${pathname === link.path ? 'shadow-xl bg-primary text-white font-semibold dark:border-white' : ''}`}>
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Header
