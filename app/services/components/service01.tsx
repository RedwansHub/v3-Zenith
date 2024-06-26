'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ServiceSkillStructure, ServiceStructure } from '@/app/interface'
import { getOurServicesData, getOurServicesSkillsData } from '@/app/api/routes/servicesRoute'
import ServiceSkills from './ServiceSkills'
import Animateslide from '@/components/animation/Animateslide'
import TypingAnimation from '@/components/animation/TypingAnimation'

type Props = {}

const Service01 = (props: Props) => {

  const [landingData, setLandingData] = useState<ServiceStructure[]>();
  const [skills, setSkills] = useState<ServiceSkillStructure[]>();
  useEffect(() => {
          const fetchData = async () => {
            try {
                const data: ServiceStructure[] = await getOurServicesData();
                const sortedData = data.sort((a, b) => a.id - b.id);

                setLandingData(sortedData);
            } catch (error) {
                console.error('Error fetching Landing data:', error);
            }
          };

          fetchData();
  }, []);
 
  
  return (
    <div className='w-full h-full '>
      <div className='w-full lg:p-24 p-6 md:p-24 pr-8 h-full relative overflow-hidden'>
        <div className='w-fit h-fit  '>
          <div className='w-full  flex flex-col gap-4  justify-between   h-full '>
            {landingData?.map(item => (
              <div key={item.id} className='flex  lg:flex-row gap-24  flex-col lg:p-12 '>
                
                <div className=' flex flex-col gap-6 '>
                  <div className='w-fit flex flex-col gap-4'>
        
                    <div className='flex lg:flex-row flex-col gap-6 w-fit h-full items-start'>
                      <div className='w-fit h-fit '>
                        <Animateslide delay={0.01} side='left'>
                          <Image src={item.icon.url} alt='image' width={80} height={80}/>
                        </Animateslide>
                      </div>
                      
                      <div className='w-full flex flex-col gap-3 h-full'>
                        <div className='lg:w-[80%]  w-full flex-col flex gap-3'>
                          <TypingAnimation color='black' content={item.title} size='normal' delay={0.018} speed={1}/>
                          <TypingAnimation color='black' content={item.description} size='medium' delay={0.019} speed={1}/>
                        </div>
                        <div className='w-full lg:grid flex flex-col h-full lg:grid-cols-2 gap-2  '>
                          <ServiceSkills current={item.title} />
                          <div className='w-full h-fit flex'>
                            <Animateslide delay={0.2} side='left'>
                                <Image src={item.image.url} alt='image' width={600} height={600}/>
                            </Animateslide>

                          </div>
                        </div>
                      </div>

                    </div>
        
                  </div>
                  <div>
                  </div>  
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service01