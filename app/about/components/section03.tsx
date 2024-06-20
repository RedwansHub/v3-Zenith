'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ProcessStructure, ValueStructure } from '@/app/interface'
import { getHomepageData } from '@/app/api/routes'
import { getCoreValueData, getOurProcessData } from '@/app/api/routes/aboutApi'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'
import AnimateGradientText from '@/components/animation/animateGradientText'
import Animateslide from '@/components/animation/Animateslide'
import TypingAnimation from '@/components/animation/TypingAnimation'
import Fade from '@/components/animation/Fade'

type Props = {}

const Section03 = (props: Props) => {

  const [valueData, setValueData] = useState<ValueStructure[]>();
  const [homePageData, setHomePageData] = useState<ValueStructure[]>();
  useEffect(() => {
          const fetchData = async () => {
            try {
                const data: ValueStructure[] = await getCoreValueData();
                const sortedData = data.sort((a, b) => a.id - b.id);
                setValueData(sortedData);

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
            <div className='w-full  flex   justify-between   h-fit '>
                <div className='flex lg:flex-row-reverse gap-24  flex-col lg:p-12 '>
                  <div className=' flex flex-col gap-6 '>
                    <div className='w-full flex flex-col gap-4'>
                      <div className=' w-full flex items-center justify-center py-4'>
                      <AnimateGradientText content={'Our Core Values'} size='Big' duration={2} delay={0.1}/>
                      </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-4 w-f'>
                          {valueData?.map(
                            (item, idx) => (
                              <Card key={item.id} className='flex flex-col p-4 dark:hover:border-white hover:border-primary border-2 border-transparent' >
                                <TypingAnimation color='black' delay={0.1} content={item.title} speed={0.6} size='normal'/>
                                {/* <p className='font-semibold dark:text-white text-lg text-primary'>{item.title}</p> */}
                                <Fade>
                                  <p className='text-sm'>{item.description}</p>
                                </Fade>
                            </Card>
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

export default Section03