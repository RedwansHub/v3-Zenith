import React from 'react'
import ThemeSwitcher from '../components/Switcher'
import Header from '../components/Header'
import Footer from '@/components/main/Footer'
import AnimateGradientText from '@/components/animation/animateGradientText'
import TypingAnimation from '@/components/animation/TypingAnimation'

type Props = {}

const PortfolioPage = (props: Props) => {
  return (
    <div className="relative w-full h-full">
      <div className="sticky z-20 top-0">
        <Header />
      </div>
      <div className='h-screen w-full flex flex-col gap-4 justify-center items-center    '>
          {/* <AnimateGradientText content={'Portfolio'} size='Big' duration={2} delay={0.1}/> */}
          <TypingAnimation speed={1} color='black' content='Portfolio' delay={0.1} size='Big' />
          <TypingAnimation speed={1} color='black' content='Coming Soon' delay={0.15} size='semi' />
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioPage