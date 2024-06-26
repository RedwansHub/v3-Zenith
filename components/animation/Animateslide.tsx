'use client'

import React, { useEffect, useState, useRef} from 'react'
import { AnimatePresence, motion, useInView, useAnimation } from 'framer-motion'

type Props = {
    children: React.ReactNode,
    side: string
    delay: number | 0.5
   
}

const Animateslide = ({children, delay, side}: Props) => {

    const target = useRef(null)
    const controls = useAnimation()
    const View = useInView(target)
    const RevealRight = {
        hidden: { opacity: 0, x: -300},
        visible: { opacity: 1, x: 0}
    } 
    const RevealLeft = {
        hidden: { opacity: 0, x: 300},
        visible: { opacity: 1, x: 0}
    } 
    const RevealUp = {
        hidden: { opacity: 0, y: 300},
        visible: { opacity: 1, y: 0}
    } 
    const RevealDown = {
        hidden: { opacity: 0, y: -300},
        visible: { opacity: 1, y: 0}
    } 

    useEffect(() =>  {
        if(View) controls.start('visible')
        else controls.start('hidden')
    },[View, controls])

  return (
    <div ref={target} className='overflow-hidden ' >
       <motion.div variants={
        side === 'left' ? RevealLeft : side === 'right' ? RevealRight : side === 'up' ? RevealUp : RevealDown
       } initial= "hidden" animate={controls} transition={{delay: delay, duration: 1}}>
            {children}
        </motion.div>
    </div>
  )
}

export default Animateslide