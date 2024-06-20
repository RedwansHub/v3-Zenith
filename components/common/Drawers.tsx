import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

  import React from 'react'
import { Button } from "../ui/button"
import { MessageCircle } from 'lucide-react'
  
  type Props = {}
  
  const Drawers = (props: Props) => {
    return (
      <div className="overflow-hidden">
        <Drawer>
            <DrawerTrigger>
              
            </DrawerTrigger>
            <DrawerContent>
               <div className="w-full  justify-center items-center flex px-48 ">
                <div className="w-fit ">
                    <DrawerHeader>
                      <DrawerTitle>Introduce yourself</DrawerTitle>
                      <DrawerDescription>Name</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                    <Button>Submit</Button>
                      <DrawerClose>
                          <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </div>
            </DrawerContent>
        </Drawer>
      </div>
    )
  }
  
  export default Drawers