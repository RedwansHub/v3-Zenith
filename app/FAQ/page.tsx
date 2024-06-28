'use client'

import Drawers from '@/components/common/Drawers'
import Question from '@/components/common/Question'
import Layer05 from '@/components/layers/layer05'
import Footer from '@/components/main/Footer'
import { Button } from '@/components/ui/button'
import Camera from '@radix-ui/react-label'
import Header from '../components/Header'

 
const QuestionPage = () => {
  
 
  return (
    <div className="relative w-full h-screen">

        <div className="sticky z-20 top-0">
          <Header />
        </div>
        <div className='h-full flex flex-col justify-center items-center overflow-hidden w-full '>
            <Layer05 /> 
            <div className='w-full h-fit py-8 flex  justify-center items-center'>
            <Question />
            </div>
        </div>  
      <Footer />
    </div>
  )
}


export default QuestionPage
