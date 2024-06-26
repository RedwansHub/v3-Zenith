import splitStringRgx from '@/lib/SplitString'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    content: string
    size: string,
    duration: number,
    delay: number,
}

const sizeClasses2: { [key: string]: string } = {
    small: ' text-sm font-regular',
    medium: 'lg:text-lg text-base font-medium',
    mediumBold: 'lg:text-lg text-base font-semibold',
    semi: 'lg:text-2xl md:text-xl text-lg font-semibold',
    large: 'lg:text-5xl text-3xl font-bold',
    Big: 'lg:text-6xl md:text-5xl text-5xl font-bold',
};
const AnimateGradientText = ({ content, size, delay, duration}: Props) => {
    const text = splitStringRgx(content)
    const characterVariant = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
    } 

    
  return (
    <div>
        <motion.div className={`${sizeClasses2[size]} bg-gradient-to-br dark:from-white/70 from-black/70 dark:to-white/10 to-black/10 text-transparent bg-clip-text `}>
            <motion.h2
                initial='hidden'
                whileInView='visible'
                transition={{ staggerChildren: 0.07 }}
            >
                {text.map((char, index) => (
                    <motion.span
                        key={`${char}-${index}`}
                        variants={characterVariant} 
                        transition={{ duration: 0.1 *  duration}}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h2>
        </motion.div>
    </div>
  )
}

export default AnimateGradientText