import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

interface ProjectContainerProps {
    images: string[];
  }

export function ProjectContainer({ images }: ProjectContainerProps) {
  return (
    <Carousel className="w-full    h-fit">
        <div className="px-48">
      <CarouselPrevious />
      <CarouselNext />
      </div>
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            {/* <div className="p-1"> */}
              <Card className="h-fit border-none  w-full flex ">
                <div className="flex p-1">
                    <Image 
                        className="rounded-lg shadow-lg"
                        src={image} alt='projectImage' height={800} width={800} />
                  {/* <img  alt={`Project image ${index + 1}`} className="w-full h-auto" /> */}
                </div>
              </Card>
            {/* </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
