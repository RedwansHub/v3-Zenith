import React from 'react'
import ThemeSwitcher from '../components/Switcher'
import Header from '../components/Header'
import Footer from '@/components/main/Footer'
import AnimateGradientText from '@/components/animation/animateGradientText'
import TypingAnimation from '@/components/animation/TypingAnimation'
import { ProjectContainer } from './components/ProjectContainer'
import ProjectTab from './components/projectTabs'
import OnGoingTemplate from './components/OnGoingTemplate'
import CompletedTemplate from './components/CompletedTemplate'

type Props = {}
export type ProjectItem = {
  id: any,
  name: any,
  func: React.ReactNode
}

const PortfolioPage = (props: Props) => {

  const items: ProjectItem[] = [
    {
      id: 1, name: 'On-going Projects', func: <OnGoingTemplate />
    },
    {
      id: 2, name: 'Completed Projects', func: <CompletedTemplate />
    },
  ]

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="sticky z-20 top-0">
        <Header />
      </div>
      <div className=' w-full h-screen px-5 py-12 lg:px-24 md:px-12 flex flex-col  gap-4 justify-between border-4 items-center    '>
          <div className='w-full flex h-fit flex-col py-4'>
            <TypingAnimation speed={1} color='black' content='Our Projects' delay={0.1} size='semi' />
            {/* <TypingAnimation speed={1} color='black' content='Coming Soon' delay={0.15} size='medium' /> */}
          </div>
          <div className='w-full h-full col-span-2'>
              <ProjectTab data={items}  />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioPage