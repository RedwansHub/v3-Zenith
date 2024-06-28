'use client'
import React, { useEffect, useState } from 'react'
import { projectStructure } from "@/app/interface"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getProjectsData } from '@/app/api/routes/projectsApi'
import FullScreenImageModal from './FullScreenImageModal'

type Props = {
  project: projectStructure
}

export function DialogDemo() {
  const [homePageData, setHomePageData] = useState<projectStructure[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

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

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div>
      {homePageData.map((project) => (
        <Dialog key={project.id}>
          <DialogTrigger asChild>
            <div className='cursor-pointer shadow-md p-4 rounded-lg bg-primary duration-500 ease-in-out text-white'>
              {project.images.length > 0 && (
                <img src={project.images[0]} alt={project.name} className='w-full h-48 object-cover rounded-lg' />
              )}
              <h2 className='text-xl font-semibold mt-4'>{project.name}</h2>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px] h-fit max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className='py-4'>{project.name}</DialogTitle>
              <DialogDescription>
                {project.description}
              </DialogDescription>
                <div className='w-full flex items-center gap-4 pt-4  '>
                    <h2 className='text-sm font-bold text-primary'>Project Status</h2>
                    <div className=' border border-primary text-sm shadow-lg font-semibold hover:bg-primary cursor-none hover:text-white w-fit px-4 rounded-lg p-2'>
                    In development
                    </div>
                </div>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {project.images.map((image, index) => (
                <div key={index}>
                    <FullScreenImageModal 
                            image={image}
                        />
                </div>
                // <img
                //   key={index}
                //   src={image}
                //   alt={`Project ${index}`}
                //   className='w-full h-64 object-cover rounded-lg cursor-pointer'
                //   onClick={() => handleImageClick(image)}
                // />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
