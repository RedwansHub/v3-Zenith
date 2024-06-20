'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import React, { useEffect, useState } from 'react'
import { Contact02Structure, ProcessStructure, contactStructure } from '../interface';
import { getContact02Data } from '../api/routes/contactApi';
import { Card } from '@/components/ui/card';
import { getContactInfoData } from "../api/routes";
import { RxInstagramLogo } from "react-icons/rx";
import { MdOutlineContentCopy, MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import toast from "react-hot-toast";
import Animateslide from "@/components/animation/Animateslide";
import TypingAnimation from "@/components/animation/TypingAnimation";

type Props = {}

const ContactInfo = (props: Props) => {
    const [skillsData, setSkills] = useState<Contact02Structure[]>([]);
    const [isOpen, setIsOpen] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data: Contact02Structure[] = await getContact02Data();
          const sortedData = data.sort((a, b) => a.id - b.id);
        
          setSkills(sortedData);
        } catch (error) {
          console.error('Error fetching Landing data:', error);
        }
      };
  
      fetchData();
    }, []);

    
  const [contactData, setContactData] = useState<contactStructure[]>();
    useEffect(() => {
        const fetchData = async () => {
        try {
            const data: contactStructure[] = await getContactInfoData();
                // Sort the data by id
                // const sortedData = data.find((a,b) => a.id - b.id);
                setContactData(data);
        } catch (error) {
            console.error('Error fetching Landing data:', error);
        }
        };
        fetchData();
    }, []);

     
    const HandleCopy = ( item : string, text : string ) => {
        navigator.clipboard.writeText(text);
        toast.success(`${item} Copied`)
    }

    const hanldeClick = (id: any) => {
        if(isOpen === id) setIsOpen(null)
            else setIsOpen(id)
    }

  return (
    <div className='h-full w-full'>
        <div className=' pt-24 flex gap-4 flex-col'>
        <TypingAnimation color='black' content={'Get in touch with us'} size='xlarge' delay={0.018} speed={1}/>

            <h2 className='text-4xl font-semibold'></h2>
            <Animateslide delay={0.2} side='down'>
                <p className='text-sm'>
                    We&apos;d love to hear from you! Whether you are a client looking to build a project, an investor, a potential worker, or just seeking information, we are here to help.
                </p>
                
            </Animateslide>
        </div>
        
        <div className=' grid'>
            {skillsData.map( (item, idx) => (
                <div key={item.id} className='h-fit w-full'>
                    <Animateslide delay={0.2 * idx} side='up'>

                       <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h2 className='font-semibold text-lg'>{item.title}</h2>
                            </AccordionTrigger>
                                <AccordionContent>
                                    <h2 className='font-medium text-xs'>{item.desc}</h2>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>     
                    </Animateslide>

                </div>
            ))}
        </div>
        <div className="gap-2 grid-cols-1 grid lg:grid-cols-2">
            {contactData?.map( (item, idx) => (
                <div key={idx} className='grid grid-cols-1 py-6 h-fit w-full gap-2  '>
                    <Animateslide delay={0.2 } side='right'>
                        <Card 
                            onClick={() => HandleCopy('Contact Email' , item.email)}  
                            className=' flex items-center hover:bg-primary dark:hover:bg-white/70 hover:text-white dark:bg-white/5 bg-black/5 duration-300 ease-in-out cursor-pointer     h-fit gap-2 p-3 '>
                            <MdOutlineMailOutline size={20} />
                                <div className=' flex gap-4 relative'>
                                    <p className='lg:text-xs text-sm '>{item.email}</p>
                                
                                </div>
                        </Card>
                    </Animateslide>
                    <Animateslide delay={0.4 } side='right'>
                        <Card 
                            onClick={() => HandleCopy('Spport Number' , item.number)}  
                            className=' flex items-center hover:bg-primary dark:hover:bg-white/70 hover:text-white dark:bg-white/5 bg-black/5 duration-300 ease-in-out cursor-pointer     h-fit gap-2 p-3 '>
                            <MdOutlinePhoneEnabled size={20} />
                                    <p className='lg:text-xs text-sm '>{item.number}</p>
                                
                        </Card>
                    </Animateslide>
                    <Animateslide delay={0.8 } side='right'>
                        <Card 
                            onClick={() => HandleCopy('Office Address' ,item.office)}  
                            className=' flex items-center hover:bg-primary dark:hover:bg-white/70 hover:text-white dark:bg-white/5 bg-black/5 duration-300 ease-in-out cursor-pointer     h-fit gap-2 p-3 '>
                            <VscLocation  size={20}/>
                            <p className='lg:text-xs text-sm '>{item.office}</p>
                                
                        </Card>
                    </Animateslide>
                </div>
            ))}
            <div>

            </div>
        </div>
    </div>
  )
}

export default ContactInfo