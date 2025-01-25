"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Primary from "../buttons/Primary"

interface Props {
  imgUrl: string
  name: string
  cta: string
  postion:string
  link:string
}

export default function TeamCard({imgUrl,name ,cta,postion,link}:Props) {
  return (
    <div className="relative flex bg-black flex-col min-w-[calc(300px_+16px)]  items-center max-w-xs bg-white/[0.1] text-white group">
      <div className="relative z-30 w-full">
        <div className="relative w-full h-64 mb-4 overflow-hidden">
          <div className="absolute inset-0 border-2 border-[#FFD700]/20 bg-white/[0.1]" />
          <Image src={imgUrl} alt="" width={256} height={256} className="object-cover w-full" priority />
        </div>
        <div className="mx-2">
         <h2 className="text-2xl font-teko font-medium -mb-1">{name}</h2>
          <p className="text-neutral-300 font-montserrat pb-3">{postion}</p>
        </div>
      </div>
      <div className="w-full max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-36 pt-2">
        <div className="transition-all flex items-start justify-end flex-col gap-y-1 duration-300 ease-in-out transform opacity-0 group-hover:opacity-100 py-3 mx-2">
          <p className="text-neutral-100 font-montserrat">{cta}</p>
          <Primary text="Naroči se" link={link}/>
        </div>
      </div>
    </div>
  )
}
