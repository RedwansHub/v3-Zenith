'use client'

import Layer01 from "@/components/layers/layer01";
import Layer02 from "@/components/layers/layer02";
import Layer03 from "@/components/layers/layer03";
import Layer05 from "@/components/layers/layer05";
import LoadingCover from "@/components/main/LoadingCover";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "@/components/main/Footer";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);


  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 5000)
      }
    )()
  }, [])

  const layers = [
    { id: 1, layer: <Layer01 /> },
    { id: 2, layer: <Layer02 /> },
    { id: 3, layer: <Layer03 /> },
    { id: 5, layer: <Layer05 /> },
  ]
  return (
    
    <main className="w-full h-full ">
      <AnimatePresence>
        {isLoading ? 
        <div className="w-full h-screen flex  justify-center items-center">
          <LoadingCover 
          loading= {setIsLoading}
           />

        </div>
        :
          <>
          <div className="relative w-full h-full">

            <div className="sticky z-20 top-0">
              <Header />
            </div>
            
            <div className="w-full h-full flex flex-col gap-24 pb-12">
                  {layers.map( i => (
                    <div key={i.id} className="w-full h-full flex  justify-center items-center">
                      {i.layer}
                    </div>
                  ))}
            </div>


            <Footer />
          </div>
          </>
        }
      </AnimatePresence>
    </main>
  );
}
