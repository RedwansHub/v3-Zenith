'use client'
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FAQStructure } from '@/app/interface';
import { getFAQData } from '@/app/api/routes';
import TypingAnimation from '../animation/TypingAnimation';
import Animateslide from '../animation/Animateslide';
  
type Props = {}

const Layer05 = (props: Props) => {

    const [questionData, setQuestionsData] = useState<FAQStructure[]>();
    useEffect(() => {
            const fetchData = async () => {
                    try {
                    const data: FAQStructure[] = await getFAQData();
                    // Sort the data by id
                    const sortedData = data.sort((a, b) => a.id - b.id);
                    setQuestionsData(sortedData);

                    } catch (error) {
                    console.error('Error fetching Landing data:', error);
                    }
            };

            fetchData();
    }, []);

  return (
    <div className='w-full h-full'>
        <div className='w-full h-full flex flex-col justify-center items-center p-4 lg:px-48'>
            <div className='w-full py-4  flex flex-col gap-3'>
              <TypingAnimation color='black' content={'Frequently Asked Questions'} size='large' delay={0.05} speed={1}/>
            <p className=' font-light py-4'>Ask Anything you want to know about our services. We are ready to answer all your questions.</p>
            </div>
            <div className=' flex flex-col w-full'>
                {questionData?.map ( (item , idx)=> (
                    <div key={item.id}>
                        <Animateslide delay={0.02 * idx } side='down'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <p className='font-medium text-sm text-left' >
                                            {item.question}
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className='text-left text-[#1d2e38]/80 dark:text-[#e9f6ff]/50'>
                                            {item.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </Animateslide>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Layer05