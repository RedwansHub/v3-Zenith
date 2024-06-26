'use client'

import { getProjectsData } from '@/app/api/routes/projectsApi';
import { projectStructure } from '@/app/interface';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { ProjectContainer } from './ProjectContainer';
import { StopwatchIcon } from '@radix-ui/react-icons'
type Props = {}

const OnGoingTemplate = (props: Props) => {
  const [homePageData, setHomePageData] = useState<projectStructure[]>();
  useEffect(() => {
          const fetchData = async () => {
            try {
                const data: projectStructure[] = await getProjectsData();
                setHomePageData(data);
            } catch (error) {
                console.error('Error fetching Landing data:', error);
            }
          };

          fetchData();
  }, []); 

  console.log(homePageData);
  
  return (
    <div className='w-full h-full'>
      {homePageData?.map(item => (
        <div key={item.id} className='w-full h-full grid lg:grid-cols-6  md:grid-cols-4 grid-cols-1 py-8 gap-2'>
          <div className='w-full h-full col-span-4 pb-6 lg:col-span-2 flex flex-col gap-4'>
              <h2 key={item.id} className='font-semibold text-xl pt-4'>
                  {item.name}
              </h2>
              <p>
                {item.description}
              </p>
              <div className='w-full flex gap-4 items-center'>
                <p className='text-sm w-fit font-semibold '>
                  Location
                </p>  
                <p className='p-2 px-4 text-sm '>
                  Mogadishu
                </p>  
              </div>
              <p className='p-2 px-4 flex gap-2 border-[#033f63] duration-300 ease-in-out  hover:text-white text-sm w-fit rounded-md border hover:bg-[#033f63]'>
                <StopwatchIcon />
                On-Going 
              </p>  
          </div>
          <div className='w-full flex  h-fit col-span-4 p-4 dark:border-white/20 rounded-sm'>
            <ProjectContainer images={item.images} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default OnGoingTemplate