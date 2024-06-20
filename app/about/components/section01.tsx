'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { HomepageContent } from '@/app/interface'
import { getHomepageData } from '@/app/api/routes'
import Reveal from '@/components/animation/Reveal'
import TypingAnimation from '@/components/animation/TypingAnimation'
import AnimateText from '@/components/animation/AnimateText'
import Animateslide from '@/components/animation/Animateslide'
import AnimateGradientText from '@/components/animation/animateGradientText'

type Props = {}

const Section01 = (props: Props) => {

  const [landingData, setLandingData] = useState<HomepageContent[]>();
  const [homePageData, setHomePageData] = useState<HomepageContent[]>();
  useEffect(() => {
          const fetchData = async () => {
            try {
                const data: HomepageContent[] = await getHomepageData();
                const sortedData = data.sort((a, b) => a.id - b.id);
                const filterd = sortedData.filter( it => it.id == 2).map(i => { return i})
                setLandingData(filterd);
                setHomePageData(sortedData);
            } catch (error) {
                console.error('Error fetching Landing data:', error);
            }
          };

          fetchData();
  }, []); 

  
  return (
    <div className='w-full h-full '>
      <div className='w-full lg:p-32 p-8 md:p-24 pr-8 h-full relative overflow-hidden'>
          <div className='w-fit h-fit  '>
           <>
              <div className='w-full  flex   justify-between   h-full '>
              {landingData?.map(item => (
                  <div key={item.id} className='flex lg:flex-row-reverse gap-24  flex-col lg:p-12 '>
                  
                    <div className=' flex flex-col gap-6 '>
                      <div className='lg:w-[80%] w-full flex flex-col gap-4'>
                        <p className='font-semibold dark:text-white text-lg text-primary'></p>
                            <TypingAnimation color='black' content='About us' size='normal' delay={0.2} speed={1}/>
                        
                          <AnimateGradientText content={'Who we are'} size='Big' duration={2} delay={0.1}/>
                        
                        <AnimateText content={item.description} size='small' duration={1} delay={0.5}/>
                        {/* <p>{item.description}</p> */}
                        <div className='w-fit flex flex-col py-8 gap-2'>
                            <div className='flex gap-5 items-center '>
                          <Animateslide delay={0.5} side={'toLeft'}>
                                <h1 className='dark:text-white/50 text-black/50 text-sm'>Based in</h1>
                          </Animateslide>
                          <Animateslide delay={0.5} side={'fromRight'}>
                                <h1 className='text-sm font-light'>Mogadishu, Somalia</h1>
                          </Animateslide>
                            </div>
                          <div className='flex gap-5 items-center '>
                          <Animateslide delay={0.5} side={'toLeft'}>
                              <h1 className='dark:text-white/50 text-black/50 text-sm'>Founded</h1>
                          </Animateslide>
                          <Animateslide delay={0.5} side={'fromRight'}>
                              <h1 className='text-sm font-light'>2024</h1>
                          </Animateslide>
                          </div>
                        </div>
                      </div>
                    </div>
                      <div className='w-full h-full '>
                        {/* <Reveal> */}
                        <Animateslide delay={0.5} side={'fromRight'}>
                          <Image src={item.imageUrl.url} alt='image' width={400} height={400}/>
                        </Animateslide>
                      </div>

                  </div>
                ))}
              </div>
           </>
        </div>
      </div>
    </div>
  )
}

export default Section01