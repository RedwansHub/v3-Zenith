'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ServStructure } from '@/app/interface'
import { getServicesData } from '@/app/api/routes/servicesRoute'

type Props = {}

const ServiceScreen = (props: Props) => {


    const [newData, setData] = useState<ServStructure[]>();
    useEffect(() => {
            const fetchData = async () => {
                    try {
                    const data: ServStructure[] = await getServicesData();
                    // Sort the data by id
                    setData(data);

                    } catch (error) {
                    console.error('Error fetching Landing data:', error);
                    }
            };

            fetchData();
    }, []);

  return (
    <div className='w-full h-fit  '>
        {newData?.map( item => (
            <div key={item.title} className='w-full h-full gap-1 pt-24 flex justify-end items-center flex-col'>
              <div className='w-full flex h-fit justify-center items-center'>
          
               <div className='w-full h-fit flex justify-center items-center gap-6 flex-col'>
                    <motion.div 
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease:'easeInOut' }}
                        className='flex justify-center items-center w-full h-fit'>
                            <h2 className='text-4xl font-semibold'>{item.title}</h2>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease:'easeInOut' }}
                        className='flex justify-center items-center lg:w-[50%] w-full px-4 text-center h-fit'>
                            <h2>{item.description}</h2>
                    </motion.div>
              </div>
               </div>

            </div>
        ))}
    </div>
  )
}

export default ServiceScreen