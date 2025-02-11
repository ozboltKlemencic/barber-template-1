import Image from 'next/image'
import React from 'react'
import { Marquee } from '../magicui/marquee'
import { cn } from '@/lib/utils'

const blocks = Array(10).fill(0) // Adjust the number of blocks as needed

const GoldenBlock = () => {
  return (
    <div className="w-full md:py-2 py-1">
      {" "}
      {/* Reduced vertical padding */}
      <div
        className={cn(
          "w-[300px] md:h-2 h-1 -ml-[50px]", // Adjusted width and offset
          "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200",
          "transform rotate-[20deg]",
          "shadow-md shadow-yellow-300/50",
        )}
      />
    </div>
  )
}


const BarberPole = () => {
  return (
     <div className="flex items-center justify-center flex-col">
        <Image src="/img/barber_pole_head.svg" width={200} alt="" height={200} className="md:w-[35px] w-[20px] mb-[2px] z-50" />
        <div className="relative md:w-[35px] w-[20px] md:h-[90px] h-[40px] p-[2px] border border-white/[0.75] overflow-hidden bg-black z-20 shadow-md ">
            <Marquee className="h-full w-full [--gap:0rem] [--duration:10s] " vertical>
            {blocks.map((_, index) => (
                <GoldenBlock key={index} />
            ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-black to-transparent"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <Image src="/img/barber_pole_head.svg" width={200} alt="" height={200} className="md:w-[35px] w-[20px] mt-[2px] rotate-180 z-10" />
    </div>
  )
}

export default BarberPole