'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '@/components/main/Footer'
import TypingAnimation from '@/components/animation/TypingAnimation'
import { projectStructure } from '../interface'
import { getProjectsData } from '../api/routes/projectsApi'
import { DialogDemo } from './components/ProjectDialog'
import Animateslide from '@/components/animation/Animateslide'

type Props = {}

const PortfolioPage = (props: Props) => {
  const [homePageData, setHomePageData] = useState<projectStructure[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: projectStructure[] = await getProjectsData();
        setHomePageData(data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="sticky z-20 top-0">
        <Header />
      </div>
      <div className='w-full h-screen px-5 py-12 lg:px-24 md:px-12 flex flex-col gap-4 justify-center items-center'>
        <div className='w-full flex h-fit flex-col py-4'>
          <TypingAnimation speed={1} color='black' content='Our Projects' delay={0.1} size='semi' />
        </div>
        <div className='w-full h-full  '> 
        <Animateslide delay={0.1 } side='down'>
            <DialogDemo />
        </Animateslide>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioPage
