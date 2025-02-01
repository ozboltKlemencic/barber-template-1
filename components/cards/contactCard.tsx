import { info } from "@/constants/info"

import { Phone } from "lucide-react"
import Link from "next/link"

export default function ContactCard() {
  return (
    <div className="bg-black p-8 border-2 m-4  hover:border-yellow-200 transition-all duration-500 gold-shadow border-[#FFD700]/30 max-w-md relative">
      {/* Premium corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-yellow-300 -translate-x-[2px] -translate-y-[2px]" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-yellow-300 translate-x-[2px] -translate-y-[2px]" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-yellow-300 -translate-x-[2px] translate-y-[2px]" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-yellow-300 translate-x-[2px] translate-y-[2px]" />

      <div className="space-y-8 font-montserrat flex flex-col items-center justify-center">
        <h2 className="text-lg font-montserrat text-white tracking-wide">Kontakt</h2>

        <p className='font-montserrat text-sm text-neutral-200 max-w-5xl text-center '>
            {info.lokacija}
        </p>

        <Link href={info.telefonLink} className="flex group items-center justify-center gap-x-2 group">
          <span className="text-yellow-300/[0.7] font-teko text-2xl font-medium">041 590 192</span>
          <Phone className="size-5 lg:size-6 group-hover:rotate-12 trnsition-all text-yellow-300/[0.7] pb-1 transition-transform duration-300" />
        </Link>
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/[0.09] to-transparent pointer-events-none" />
    </div>
  )
}
