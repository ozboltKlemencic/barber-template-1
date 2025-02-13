import { info } from "@/constants/info"
import { MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  return (
    <div className="bg-black p-8 border-2 group gold-shadow transition-all duration-300 border-[#FFD700]/30 max-w-md relative">
      {/* Premium corner accents */}
      <div className="absolute top-0 left-0 bg-primary group-hover:w-full w-0 transition-all duration-300 h-[2px]  -translate-x-[2px] -translate-y-[2px]" />
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary -translate-x-[2px] -translate-y-[2px]" />

      <div className="absolute top-0 right-0 bg-primary group-hover:h-full w-[2px] transition-all duration-300 h-0 translate-x-[2px] -translate-y-[2px]" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary translate-x-[2px] -translate-y-[2px]" />

      <div className="absolute bottom-0 right-0 bg-primary group-hover:w-full h-[2px] transition-all duration-300 w-0 translate-x-[2px] translate-y-[2px]" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary -translate-x-[2px] translate-y-[2px]" />

      <div className="absolute bottom-0 left-0 bg-primary group-hover:h-full w-[2px] transition-all duration-300 h-0 -translate-x-[2px] -translate-y-[2px]" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary translate-x-[2px] translate-y-[2px]" />

      <h2 className="text-4xl font-teko text-header mb-10 tracking-wide">Kontakt</h2>

      <div className="space-y-8 font-montserrat">
        <Link href={info.lokacijaLink} className="flex items-start gap-5 group">
          <MapPin className="size-5 lg:size-6 text-primary flex-shrink-0 mt-1  transition-transform duration-300" />
          <span className="text-header text-base hover:text-primary transition-all duration-300 lg:text-lg font-light">Cesta talcev 3b, 4220 Škofja Loka</span>
        </Link>

        <Link href={info.telefonLink} className="flex items-center gap-5 group">
          <Phone className="size-5 lg:size-6 text-primary  transition-transform duration-300" />
          <span className="text-header hover:text-primary transition-all duration-300 text-base lg:text-lg font-light">041 590 192</span>
        </Link>

        <div className="flex items-start gap-5 group/delUre">
          <Clock className="size-5 lg:size-6 text-primary flex-shrink-0 mt-1  transition-transform duration-300" />
          <div className="text-header">
            <div className="text-base lg:text-lg group-hover/delUre:text-primary transition-all duration-300 font-light">Pon - pet</div>
            <div className="text-primary/70 mt-1 grouphover/delUre:text-primary transition-all duration-300 text-base lg:text-lg font-light">9:00 - 20:00</div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/[0.09] to-transparent pointer-events-none" />
    </div>
  )
}
