'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ProcessStructure } from '@/app/interface'
import { getHomepageData } from '@/app/api/routes'
import { getOurProcessData } from '@/app/api/routes/aboutApi'
import { Separator } from '@/components/ui/separator'
import AnimateGradientText from '@/components/animation/animateGradientText'
import Animateslide from '@/components/animation/Animateslide'
import Fade from '@/components/animation/Fade'

type Props = {}

const Section02 = (props: Props) => {

  const [processData, setProcessData] = useState<ProcessStructure[]>();
  const [homePageData, setHomePageData] = useState<ProcessStructure[]>();
  useEffect(() => {
          const fetchData = async () => {
            try {
                const data: ProcessStructure[] = await getOurProcessData();
                setProcessData(data);
            } catch (error) {
                console.error('Error fetching Landing data:', error);
            }
          };

          fetchData();
  }, []);

  
  return (
    <div className='w-full h-fit '>
      <div className='w-full lg:p-32 md:p-24 p-8 pr-8 h-full relative overflow-hidden'>
          <div className='w-fit h-fit  '>
            <div className='w-full  flex   justify-between   h-full '>
                <div className='flex lg:flex-row-reverse gap-24  flex-col lg:p-12 '>
                  <div className=' flex flex-col gap-6 '>
                    <div className='w-full flex flex-col gap-4'>
                      
                      <AnimateGradientText content={'Our Process'} size='Big' duration={2} delay={0.1}/>

                        <Fade>
                          <Separator className='dark:bg-white/10 bg-black/20 ' />
                        </Fade>

                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-48 gap-12 w-full'>
                          {processData?.map(
                            item => (
                              <div key={item.title} className='flex flex-col gap-4' >
                                <Animateslide delay={0.1} side={'up'}>
                                  <p className='font-semibold dark:text-white text-2xl text-primary'>{item.title}</p>
                                </Animateslide>
                                <Fade>
                                  <p className='text-sm'>{item.paragraph}</p>
                                </Fade>
                            </div>
                          ))}
                        </div>
                    </div>
                  </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section02