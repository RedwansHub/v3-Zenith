'use client'
import { getOurServicesData, getServicesData } from '@/app/api/routes/servicesRoute';
import { ServStructure, ServiceStructure } from '@/app/interface';
import React, { useEffect, useState } from 'react'
import ServiceSheets from '../common/ServiceSheets';
import Drawers from '../common/Drawers';
import Animateslide from '../animation/Animateslide';
import TypingAnimation from '../animation/TypingAnimation';

type Props = {}

const Layer03 = (props: Props) => {

  const [newData, setData] = useState<ServiceStructure[]>();
  useEffect(() => {
          const fetchData = async () => {
          try {
            const data: ServiceStructure[] = await getOurServicesData();
            const sortedData = data.sort((a, b) => a.id - b.id);
            setData(sortedData);
          } catch (error) {
            console.error('Error fetching Landing data:', error);
          }
        };
        fetchData();
  }, []);

  return (
    <div className='w-full lg:h-screen h-full '>
      <div className='w-full h-full flex flex-col gap-5 justify-center items-center'>
      <TypingAnimation color='black' content={'Our Services'} size='large' delay={0.05} speed={1}/>
        <div className='w-full h-fit lg:px-48 p-4 gap-2'>
            <div className=' grid lg:grid-cols-2 grid-cols-1 col-span-4 h-full w-full gap-6'>
              {newData?.map( i => (
                <div key={i.id} className='w-full h-full'>
                    <Animateslide side='down' delay={0.2 * i.id}>
                      <div className=' relative group  border-black/10 dark:border-white/10  dark:hover:border-white hover:border-primary h-full border-2 w-full hover:cursor-pointer' key={i.id}>
                        <ServiceSheets title={i.title} id={i.id} description={i.description} subDescription={i.subDescription} img={i.image} icon={i.icon}/>
                      </div>
                    </Animateslide>
                </div>
              ))}
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default Layer03