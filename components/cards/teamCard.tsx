"use client"

import Image from "next/image"

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
    <div className="relative flex  flex-col md:w-[320px] w-[92vw] mx-auto items-center max-w-xs bg-white/[0.15] text-white group">
      <div className="relative z-30 w-full">
        <div className="relative w-full h-[260px] mb-4 overflow-hidden">
          <div className="absolute inset-0 border-2 border-primary bg-white/[0.1]" />
          <Image src={imgUrl} alt="" width={600} height={600} className="object-cover w-full" priority />
        </div>
        <div className="mx-2 flex flex-col justify-center items-start">
         <h2 className="text-2xl font-teko text-header font-medium -mb-1">{name}</h2>
          <p className="text-paragraph font-montserrat">{postion}</p>
        </div>
      </div>
      <div className="w-full max-h-36 lg:max-h-0 px-2 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-36 pt-4">
        <div className="transition-all w-full flex items-start justify-end flex-col gap-y-1 duration-300 ease-in transform opacity-100 lg:opacity-0 group-hover:opacity-100 py-3">
          <p className="text-header font-montserrat">{cta}</p>
          <div className="w-full ">
            <Primary text="Naroči se" link={link} w="100%" h="52px"/>
          </div>
        </div>
      </div>
    </div>
  )
}
