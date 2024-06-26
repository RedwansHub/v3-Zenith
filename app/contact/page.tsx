import React from 'react'
import ThemeSwitcher from '../components/Switcher'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import Header from '../components/Header'
import Footer from '@/components/main/Footer'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div className='h-full w-full '>
      <div className="relative w-full h-full">
        <div className="sticky z-20 top-0">
          <Header />
        </div>
        <div className='h-full w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 pt-8 p-3 lg:px-24 gap-6 '>
            <ContactInfo />
            <ContactForm />
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default ContactPage