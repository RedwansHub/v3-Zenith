import React from 'react'
import ThemeSwitcher from '../components/Switcher'
import Service01 from './components/service01'
import ServiceScreen from './components/ServiceScreen'
import Footer from '@/components/main/Footer'
import Header from '../components/Header'

type Props = {}

const ServicePage = (props: Props) => {
  return (
    <div className="relative w-full h-full">
        <div className="sticky z-20 top-0">
          <Header  />
        </div>
        <div className='h-full w-full flex flex-col justify-center items-center    '>
            <ServiceScreen />
            {/* <h2>Services</h2> */}
            <Service01 />
        </div>
        <Footer />
    </div>
  )
}

export default ServicePage