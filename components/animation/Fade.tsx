'use client'

import React, { useEffect, useRef} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

type Props = {
    children: React.ReactNode,
}

const Fade = ( { children } : Props) => {

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
    <div  ref={target} >
       <motion.div variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1}
        }} initial= "hidden" animate={controls} transition={{delay: 0.8, ease:'easeInOut', duration: 1}}>
            {children}
        </motion.div>
    </div>
  )
}

export default Fade