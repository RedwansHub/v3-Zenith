'use client'

import { getKeyServicesData } from "@/app/api/routes/servicesRoute"
import { ServiceSkillStructure } from "@/app/interface"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import Image from "next/image"
  
import React, { useEffect, useState } from 'react'
import ListDrop from "./ListDrop"
import ListItemDrop from "./ListDrop"
import Link from "next/link"

type Props = {
    title: any,
    subDescription: any,
    id: any,
    description: any,
    img: any,
    icon: any,

}

const ServiceSheets = ({
    title,
    description,
    subDescription,
    id,
    img,
    icon
}: Props) => {

    const { theme } = useTheme()
    const [newData, setData] = useState<ServiceSkillStructure[]>();
    
    useEffect(() => {
            const fetchData = async () => {
            try {
              const data: ServiceSkillStructure[] = await getKeyServicesData();
              const sortedData = data.sort((a, b) => a.id - b.id);
              setData(sortedData);
            } catch (error) {
              console.error('Error fetching Landing data:', error);
            }
          };
          fetchData();
    }, []);
  return (
        <Sheet >
        <SheetTrigger>
            <div className="p-4 relative w-full h-full flex gap-4 items-center ">
                
                <div className=" flex flex-col text-left gap-4 h-full ">
                    <h2 className="font-semibold">{title}</h2>
                    <p>{subDescription}</p>
                </div>
                
                <div className="flex items-end justify-end gap-2 h-full w-fit  ">
                    <Image src={icon.url} alt="image" width={150} height={150}/>
                </div>
            </div>
            
        </SheetTrigger>
        <SheetContent>
            <div className=" h-full flex justify-center  items-center">
                <SheetHeader>
                <p className="text-sm font-light">Service Details</p>
                <SheetTitle>{title}</SheetTitle>
                <SheetDescription>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col  gap-4">
                            <p>{description}</p>
                           
                            {/* <ListDrop /> */}
                        </div>
                        <div className="py-2">
                            <Image src={img.url} className="" alt="image" width={300} height={300}/>

                        </div>

                        <Link href='/services' className='w-fit p-3 px-6 cursor-pointer hover:bg-black dark:hover:bg-white  bg-primary text-white dark:hover:text-black hover:text-white duration-300 ease-in-out' >
                          Learn More
                        </Link>
                    </div>
                </SheetDescription>
                </SheetHeader>
            </div>
        </SheetContent>
        </Sheet>
  )
}

export default ServiceSheets