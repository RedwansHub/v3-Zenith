'use client'

import { getHomepageData } from '@/app/api/routes';
import { getOurServicesData } from '@/app/api/routes/servicesRoute';
import { HomepageContent, ServiceStructure } from '@/app/interface';
import React, { useEffect, useState } from 'react'
import Animateslide from '../animation/Animateslide';
import Fade from '../animation/Fade';
import TypingAnimation from '../animation/TypingAnimation';

type Props = {}

const Layer01 = (props: Props) => {

  const [newData, setData] = useState<HomepageContent[]>();
  useEffect(() => {
          const fetchData = async () => {
          try {
            const data: HomepageContent[] = await getHomepageData();
            const sortedData = data.sort((a, b) => a.id - b.id);
            const filtered = sortedData.filter((a) => a.id == 1).map( item => { return item});
            setData(filtered);
          } catch (error) {
            console.error('Error fetching Landing data:', error);
          }
        };
        fetchData();
  }, []);
  
  return (
    <div className='w-full backgroundImage h-screen grid place-items-center'>
      <div className='flex flex-col gap-5 items-center justify-center'>
        {newData?.map( item => (
          <div key={item.id} className='flex flex-col gap-5 w-fit  items-center justify-center'>
            <div className='gap-4 flex justify-center items-center px-4'>
              <Fade>
                <div className=' dark:bg-black/40 p-6 dark:text-white text-primary flex  flex-col justify-center items-center bg-white/70 backdrop-blur-sm'>
                  <TypingAnimation color='black' content={item.name} size='large' delay={0.08} speed={1}/>

                  <div className='pt-4 lg:w-[605px] w-fit text-center'>
                    <Animateslide side='down' delay={0.8}>
                      <h2 className='text-sm text-black dark:text-white/90  font-semibold'>{item.description}</h2>
                    </Animateslide>
                  </div>
                </div>
              </Fade>
            </div>
            <Animateslide side='up' delay={1}>
              <div className='p-3 px-6 w-fit dark:bg-black/20 hover:bg-primary dark:hover:bg-white dark:hover:text-black font-semibold hover:font-semibold hover:text-white cursor-pointer bg-white/80 backdrop-blur-sm'>
                <h2 className='text-sm '>Read More</h2>
              </div>
            </Animateslide>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Layer01