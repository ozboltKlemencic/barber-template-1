import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"
import Image from "next/image"

const blocks = Array(10).fill(0) // Adjust the number of blocks as needed

const GoldenBlock = () => {
  return (
    <div className="w-full py-2">
      {" "}
      {/* Reduced vertical padding */}
      <div
        className={cn(
          "w-[300px] h-4 -ml-[50px]", // Adjusted width and offset
          "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200",
          "transform rotate-[20deg]",
          "shadow-md shadow-yellow-300/50",
        )}
      />
    </div>
  )
}

export default function Loading() {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-black">
        <Image src="/img/barber_pole_head.svg" width={100} alt="" height={50} className="w-[60px] -mb-[10px] z-10" />
        <div className="relative w-[50px] h-[130px] p-1 border border-white overflow-hidden bg-black z-20 shadow-md ">
          <Marquee className="h-full w-full [--gap:0rem] [--duration:10s] " vertical>
            {blocks.map((_, index) => (
              <GoldenBlock key={index} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <Image src="/img/barber_pole_head.svg" width={100} alt="" height={50} className="w-[60px] -mt-[10px] rotate-180 z-10" />
    </div>
  )
}

