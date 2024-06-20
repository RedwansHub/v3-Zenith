'use client'

import React, { useEffect, useState, useRef} from 'react'
import { AnimatePresence, motion, useInView, useAnimation } from 'framer-motion'

type Props = {
    children: React.ReactNode,
    width? : "fit-content" | "100%";
}

const Reveal = ({children, width}: Props) => {

    const target = useRef(null)
    const controls = useAnimation()
    const View = useInView(target)
    const variantReveal = {
        hidden: { opacity: 0, width: '100%'},
        animate: { opacity: 1, width: 0}
    } 

    useEffect(() =>  {
        if(View) controls.start('visible')
        else controls.start('hidden')
    },[View, controls])

  return (
    <div className='relative'  ref={target} style={{ position: "relative", width, overflow: 'hidden' }}>
       <motion.div variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1}
        }} initial= "hidden" animate={controls} transition={{delay: 0.5, duration: 1}}>
            {children}
        </motion.div>
        <motion.div variants={{
            hidden: {top: 0},
            visible: {top: '100%'}
        }} initial= "hidden" animate={controls} transition={{ ease:"easeIn", duration: 1}}
            className='absolute top-2 bottom-4 left-0 right-0 z-auto bg-[#033f63]'
        />
    </div>
  )
}

export default Reveal