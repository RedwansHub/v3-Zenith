'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { HomepageContent } from '@/app/interface'
import { getHomepageData } from '@/app/api/routes'
import Animateslide from '../animation/Animateslide'
import TypingAnimation from '../animation/TypingAnimation'
import AnimateGradientText from '../animation/animateGradientText'
import Link from 'next/link'

type Props = {}

const Layer02 = (props: Props) => {

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

  console.log(landingData);
  
  return (
    <div className='w-full h-screen '>
      <div className='w-full lg:p-32 md:p-24 h-full relative overflow-hidden'>
          <div className='w-fit h-fit  '>
           
            <div className='w-full  flex items-center px-4 justify-between   h-full '>
            {landingData?.map(item => (
              
                <div key={item.id} className='flex w-full lg:flex-row flex-col lg:p-12 '>
                 
                  <div className=' flex flex-col gap-6 '>
                  
                    <div className='lg:w-[80%] w-full flex flex-col gap-4'>
                      <TypingAnimation color='black' content={'About us'} size='normal' delay={0.018} speed={1}/>
                      <TypingAnimation color='black' content={'Who We Are'} size='Big' delay={0.1} speed={2}/>
                      {/* <div className='bg-gradient-to-r dark:from-white/80 from-black/80 dark:to-white/40 to-black/40 bg-clip-text text-transparent'>
                          <p className='lg:text-6xl text-6xl  font-bold'>Who we are</p>  
                      </div> */}
                      <Animateslide delay={0.04} side='down'>
                        <p>{item.description}</p>
                      </Animateslide>
                      <div className='flex gap-5 items-center'>
                      <Animateslide delay={0.3} side='right'>
                        <h1 className='dark:text-white/50 text-black/50 text-sm'>Based in</h1>
                      </Animateslide>
                      <Animateslide delay={0.4} side='left'>
                        <h1 className='text-sm font-light'>Mogadishu, Somalia</h1>
                      </Animateslide>
                      </div>
                    </div>
                    <Animateslide delay={0.4} side='down'>
                      <div className='w-fit h-full p-2'>
                          <Link href={'/about'} className='w-full p-12 h-full cursor-pointer hover:bg-black dark:hover:bg-white  bg-primary text-white dark:hover:text-black hover:text-white duration-300 ease-in-out' >
                            More about us
                          </Link>
                      </div>
                    </Animateslide>
                  </div>
                    <div className='w-full py-4 '>
                  <Animateslide delay={0.4} side='up'>
                      <Image src={item.imageUrl.url} alt='image' width={400} height={400}/>
                  </Animateslide>
                    </div>

                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Layer02