import React from 'react'
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image';

type Props = {
  image: string;
}

const FullScreenImageModal: React.FC<Props> = ({ image }) => {
  return (
    <Dialog >
        <DialogTrigger>
            <Image width={800} height={800} src={image} alt="Full Screen" className="w-fit h-fit rounded-lg" />
        </DialogTrigger >
      <DialogContent className="p-0 ">
        <Image width={800} height={800} src={image} alt="Full Screen" className="w-full h-full lg:rounded-lg" />
      </DialogContent>
    </Dialog>
  )
}

export default FullScreenImageModal
