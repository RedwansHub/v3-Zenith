'use client'
import React from 'react'
import ThemeSwitcher from '../components/Switcher'
import Section01 from './components/section01'
import Section02 from './components/section02'
import Section03 from './components/section03'
import Section04 from './components/section04'
import { AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '@/components/main/Footer'

type Props = {}

const AboutPage = (props: Props) => {
  return (
      <div className="relative w-full h-full">
        <div className="sticky z-20 top-0">
          <Header />
        </div>
          <Section01 />
          <Section02 />
          <Section03 />
          <Section04 />
      <Footer />
      </div>
  )
}

export default AboutPage