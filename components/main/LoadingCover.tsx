'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Counter from './Counter';
import Image from 'next/image';
import TypingAnimation from '../animation/TypingAnimation';


type Props = {
    loading: any
}
export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {duration: 1, delay: 0.2}
    },
    exit: {
        opacity: 0,
        transition: {duration: 1, delay: 0.2}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        opacity: 0,
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}


const LoadingCover = ({loading}: Props) => {

    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    const [isDone, setIsDone] = useState(false);

    const handleComplete = (done: boolean) => {
        setIsDone(done);
        loading(done)
    };

    return (
        <>
            <AnimatePresence mode='wait'>
                <motion.div variants={slideUp}  initial="initial" exit="exit" className={'introduction '}>

                <motion.div className='w-full h-full relative'>
                    <motion.div 
                        animate={{ height: '100%'}}
                        initial={{ height: 0 }}
                        transition={{ duration: 2, delay:5, ease: 'easeInOut'}}
                        className='w-full h-full bg-white z-50 absolute'>
                    </motion.div>
                    <motion.div 
                        variants={opacity} initial="initial" animate="enter" exit={'exit'}
                        transition={{ duration: 2, ease : 'easeInOut' }}
                        className='flex w-full flex-col h-full justify-center items-center   gap-16'>
                        <div className='flex justify-center items-center gap-4'>
                            <motion.div 
                                initial={{scale: 0,  rotate: '-180deg', opacity: 0}}
                                animate={{scale: 1,  rotate: '0deg', opacity: 1 } }
                                transition={{ duration: 2, delay: 3}}
                                className='w-full'>
                                    <Image src={'/images/Logo.svg'} alt='image' width={60} height={60}
                                        className=''
                                    />
                            </motion.div>
                                
                            <div>
                                <TypingAnimation content='Zenith' delay={0.2} size='xxlarge' color='primary' speed={2}/>
                                <TypingAnimation content='Construction' delay={0.4} size={'medium'} color='primary' speed={2}/>
                            </div>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ duration: 1}}
                            className='w-full  flex justify-center items-center '>
                            <Counter complete={handleComplete}  initialSpeed={60} finalSpeed={20} /> 
                        </motion.div>
                    </motion.div>
                </motion.div>
                
                </motion.div>

            </AnimatePresence>
        </>
    )
}

export default LoadingCover