'use client'

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export type SubProps = {
  id: number,
  name: string,
  path: string,
}
type HeadProps = {
  name: string,
  path: string,
  subOptions?: SubProps[],
}

const HeadOptions = ({ name, path, subOptions }: HeadProps) => {
 
  const router = useRouter()
  const pathname = usePathname()
  const [subPath, setSubPath] = useState<string | null>(null)

  const handleSubLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, subPath: string) => {
    e.preventDefault()
    setSubPath(subPath)
    if (pathname !== '/about') {
      router.push('/about')
    } else {
      const element = document.querySelector(subPath)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    if (subPath && pathname === '/about') {
      setTimeout(() => {
        const element = document.querySelector(subPath)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100) // Adjust the timeout duration if needed
    }
  }, [pathname, subPath])

  useEffect(() => {
    if (pathname === '/about' && window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100) // Adjust the timeout duration if needed
    }
  }, [pathname])

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          href={path}
          className={`font-normal p-1 text-sm cursor-pointer ${pathname === path ? 'border-b-2 border-primary dark:border-white' : ''} duration-200 ease-in hover:scale-105 hover:font-bold`}>
          {name}
        </Link>
      </HoverCardTrigger>
      {name === 'Support' ? 
        <>
        {subOptions && (
          <HoverCardContent className={`w-fit flex flex-col gap-2 dark:bg-primary/80 dark:text-white  bg-primary/5 border border-primary/50 backdrop-blur-md  `}>
            {subOptions.map(sub => (
              <a
                key={sub.id}
                href={sub.path}
                className='font-normal p-1   text-sm cursor-pointer duration-200 ease-in hover:scale-105 hover:font-bold'>
                {sub.name}
              </a>
            ))}
          </HoverCardContent>
        )}
        </>
        : 
        <>
        {subOptions && (
          <HoverCardContent className={`w-fit flex flex-col gap-2 dark:bg-primary/80 dark:text-white  bg-primary/5 border border-primary/50 backdrop-blur-md  `}>
            {subOptions.map(sub => (
              <a
                key={sub.id}
                href={path}
                onClick={(e) => handleSubLinkClick(e, sub.path)}
                className='font-normal p-1 text-sm cursor-pointer duration-200 ease-in hover:scale-105 hover:font-bold'>
                {sub.name}
              </a>
            ))}
          </HoverCardContent>
        )}
        </> 
      }
    </HoverCard>
  )
}

export default HeadOptions
