import React from 'react'
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "@/components/ui/dialog"

type Props = {
  image: string;
}

const FullScreenImageModal: React.FC<Props> = ({ image }) => {
  return (
    <Dialog >
        <DialogTrigger>
            <img src={image} alt="Full Screen" className="w-fit h-fit rounded-lg" />
        </DialogTrigger >
      <DialogContent className="p-0 ">
        <img src={image} alt="Full Screen" className="w-full h-full lg:rounded-lg" />
      </DialogContent>
    </Dialog>
  )
}

export default FullScreenImageModal
