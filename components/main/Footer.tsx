
'use client'
import toast from 'react-hot-toast'
import React, { useEffect, useState } from 'react'
import { FooterStructure, contactStructure } from '@/app/interface'
import { getContactInfoData, getFooterData } from '@/app/api/routes'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from 'react-icons/md'
import { RxInstagramLogo } from "react-icons/rx";
import { VscLocation } from "react-icons/vsc";
import { MdOutlineContentCopy } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";
import Animateslide from '../animation/Animateslide'
type Props = {}

const Footer = (props: Props) => {
    const HandleCopy = ( item : string, text : string ) => {
        navigator.clipboard.writeText(text);
        toast.success(`${item} Copied`)
    }

    
    const [contactData, setContactData] = useState<contactStructure[]>();
    const [footerData, setFooterData] = useState<FooterStructure[]>();
  
    useEffect(() => {
            const fetchData = async () => {
              try {
                const data: FooterStructure[] = await getFooterData();
                setFooterData(data);
              } catch (error) {
                  console.error('Error fetching Landing data:', error);
              }
            };
            fetchData();
    }, []);

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

  return (
    <div>
        <div className='w-full h-full flex  py-2 flex-col bg-[#033f63] text-white lg:px-44 px-3   items-center'>
            <div className='flex w-full h-full lg:flex-row md:flex-row flex-col  justify-between items-center  gap-2 '>
                <div className='flex gap-2   lg:justify-start justify-center   items-center  h-fit lg:h-full  w-fit    '>
                    {footerData?.map( item => (
                        <Animateslide key={item.heading}  delay={0.2  } side='down'>
                        <div className='flex h-fit lg:h-full py-4  justify-center flex-col gap-2'>
                            
                            <Link href={'/'} className='w-fit'>
                                <Image src={item.logo.url} alt='image' width={120} height={120} />
                            </Link>
                            <div className='h-fit space-y-2'>
                                <p className='font-medium lg:pl-0 pl-2 text-sm lg:w-[400px]'>
                                    {item.description}
                                </p>
                            </div>
                            <div>
                                {contactData?.map( x => (
                                        <div key={x.instagram} className=' flex items-center  w-fit h-fit gap-2 '>
                                            <div onClick={() => HandleCopy('Instagram' , x.instagram)}  
                                                className='group flex gap-4  cursor-pointer relative'>
                                                <RxInstagramLogo size={20} />
                                                <p className='absolute lg:text-xs text-sm top-6 w-[200px]  hidden group-hover:block cursor-pointer'>
                                                    {x.instagram}
                                                </p>
                                            </div>
                                            <div onClick={() => HandleCopy('linkedin' , x.linkedin)}  
                                                className='group flex gap-4  cursor-pointer relative'>
                                                <CiLinkedin size={24} />
                                                <p className='absolute lg:text-xs text-sm w-[200px]   top-6 hidden group-hover:block cursor-pointer'>
                                                    {x.linkedin}
                                                </p>
                                            </div>
                                            <div onClick={() => HandleCopy('Whatsapp' , x.whatsapp)}  
                                                className='group flex gap-4  cursor-pointer relative'>
                                                <IoLogoWhatsapp size={24} />
                                                <p className='absolute lg:text-xs text-sm w-[110px]   top-6 hidden group-hover:block cursor-pointer'>
                                                    {x.whatsapp}
                                                </p>
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </Animateslide>
                    ))}
                </div>
                <div className='flex lg:w-fit w-full sm:flex-row flex-col  lg:h-full h-fit  py-2 justify-center lg:justify-end gap-6'>
                    <div className=' h-full lg:p-2 p-1 flex flex-col gap-2 w-fit -2'>
                    <Animateslide delay={0.2} side='left'>
                        <h1 className='p-1 font-medium text-white/60'>Contact Us</h1>
                    </Animateslide>
                        <div className='  flex  gap-1 flex-col '>
                            {contactData?.map( item => (
                                <div key={item.title} className='grid grid-cols-1 h-fit   w-full  gap-1 '>
                                    <Animateslide delay={0.2} side='down'>
                                        <div className=' flex items-center   w-fit h-fit gap-2 p-1 '>
                                            <MdOutlineMailOutline size={20} />
                                                <div 
                                                    onClick={() => HandleCopy('Contact Email' , item.email)}  
                                                    className='group flex gap-4 hover:border-white/30 border-b cursor-pointer border-transparent relative'>
                                                    <p className='lg:text-xs text-sm '>{item.email}</p>
                                                    <MdOutlineContentCopy 
                                                        className='absolute right-[-20px] top-1 hidden group-hover:block cursor-pointer' 
                                                        color='gray' 
                                                        size={10} 
                                                    />
                                                </div>
                                        </div>
                                    </Animateslide>
                                    <Animateslide delay={0.2} side='down'>
                                        <div className=' flex items-center  w-fit h-fit gap-2 p-1 '>
                                            <MdOutlinePhoneEnabled size={20} />
                                                <div 
                                                    onClick={() => HandleCopy('Contact Number' , item.number)}  
                                                    className='group flex gap-4 hover:border-white/30 border-b cursor-pointer border-transparent relative'>
                                                    <p className='lg:text-xs text-sm '>{item.number}</p>
                                                    <MdOutlineContentCopy 
                                                        className='absolute right-[-20px] top-1 hidden group-hover:block cursor-pointer' 
                                                        color='gray' 
                                                        size={10} 
                                                    />
                                                </div>
                                        </div>
                                    </Animateslide>
                                    <Animateslide delay={0.2} side='down'>
                                    
                                    <div className=' flex items-center  w-fit h-fit gap-2 p-1 '>
                                        <VscLocation color='white' size={20}/>
                                            <div 
                                                onClick={() => HandleCopy('Office Address' , item.office)}  
                                                className='group flex gap-4 hover:border-white/30 border-b cursor-pointer border-transparent relative'>
                                                <p className='lg:text-xs text-sm '>{item.office}</p>
                                                <MdOutlineContentCopy 
                                                    className='absolute right-[-20px] top-1 hidden group-hover:block cursor-pointer' 
                                                    color='gray' 
                                                    size={10} 
                                                />
                                            </div>
                                    </div>
                                    </Animateslide>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=' h-full lg:p-2 p-1 flex flex-col text-left  xs:text-center gap-2 w-fit '>
                        <Animateslide delay={0.2} side='left'>
                            <h1 className='p-1 font-medium text-white/60'>Useful Links</h1>
                        </Animateslide>
                        <div className='  flex  gap-1 flex-row  sm:flex-col flex-wrap'>
                            <Animateslide delay={0.2} side='left'>
                                <a href='/' className='font-medium p-1 text-sm lg:text-xs hover:scale-105 duration-200 hover:font-bold cursor-pointer '>Home</a>
                            </Animateslide>
                            <Animateslide delay={0.2} side='left'>
                                <a href='/about' className='font-medium p-1 text-sm lg:text-xs hover:scale-105 duration-200 hover:font-bold cursor-pointer '>About</a>
                            </Animateslide>
                            <Animateslide delay={0.2} side='left'>
                            <a href='/portfolio' className='font-medium p-1 text-sm lg:text-xs hover:scale-105 duration-200 hover:font-bold cursor-pointer '>Portfolio</a>
                            </Animateslide>
                            <Animateslide delay={0.2} side='left'>
                            <a href='/services' className='font-medium p-1 text-sm lg:text-xs hover:scale-105 duration-200 hover:font-bold cursor-pointer '>Services</a>
                            </Animateslide>
                            <Animateslide delay={0.2} side='left'>
                            <a href='/askQuestion' className='font-medium p-1 text-sm lg:text-xs hover:scale-105 duration-200 hover:font-bold cursor-pointer '>FAQ</a>
                            </Animateslide>
                            <Animateslide delay={0.2} side='left'>
                            <a href='/contact' className='font-medium p-1 text-sm lg:text-xs hover:scale-105 duration-200 hover:font-bold cursor-pointer '>Contact</a>
                            </Animateslide>
                        </div>
                    </div>
                </div>
            </div>
           <h2 className='font-medium text-xs py-4 text-white/55'>All rights Reserved. @ 2024 Zenith Construction</h2>

        </div>
    </div>
  )
}

export default Footer