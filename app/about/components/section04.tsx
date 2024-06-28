'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { HomepageContent, PhilosStructure } from '@/app/interface'
import { getHomepageData } from '@/app/api/routes'
import Animateslide from '@/components/animation/Animateslide'
import TypingAnimation from '@/components/animation/TypingAnimation'
import AnimateGradientText from '@/components/animation/animateGradientText'

type Props = {}

const Section04 = (props: Props) => {

  const [landingData, setLandingData] = useState<HomepageContent[]>();
  const [homePageData, setHomePageData] = useState<HomepageContent[]>();
  useEffect(() => {
          const fetchData = async () => {
            try {
                const data: HomepageContent[] = await getHomepageData();
                const sortedData = data.sort((a, b) => a.id - b.id);
                const filterd = sortedData.filter( it => it.slug == 'Our Philosophy').map(i => { return i})
                setLandingData(filterd);
                setHomePageData(sortedData);
            } catch (error) {
                console.error('Error fetching Landing data:', error);
            }
          };

          fetchData();
  }, []);

  console.log('landingData');
  console.log(landingData);
  
  return (
    <section id='section04' className='w-full h-full '>
      <div className='w-full lg:p-32 p-8 md:p-24 pr-8 h-full relative overflow-hidden'>
          <div className='w-fit h-fit  '>
           
            <div className='w-full    h-full '>
            {landingData?.map(item => (
                <div key={item.id} className='grid lg:grid-cols-5 grid-cols-1  gap-8 w-full h-full  flex-col lg:p-12 '>
                 
                    <div className='  lg:col-span-3 col-span-1  flex flex-col  '>
                      <div className='lg:w-fit w-full flex flex-col gap-4'>
                        <TypingAnimation color='black' content='Our Approach' size='normal' delay={0.15} speed={1}/>
                        <AnimateGradientText content={item.slug} size='large' duration={2} delay={0.1}/>
                        
                      <Animateslide delay={0.5} side={'down'}>
                          <p>{item.description}</p>
                          </Animateslide>
                      </div>
                    </div>
                    <div className='w-full h-full  col-span-1  lg:col-span-2 '>
                      <Animateslide delay={0.5} side={'up'}>
                        <Image src={item.imageUrl.url} alt='image' width={800} height={800}/>
                      </Animateslide>
                    </div>

                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Section04