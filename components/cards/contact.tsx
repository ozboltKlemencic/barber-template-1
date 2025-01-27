import { info } from "@/constants/info"
import { MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  return (
    <div className="bg-black p-8 border-2 border-[#FFD700]/30 max-w-md relative">
      {/* Premium corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-yellow-300 -translate-x-[1px] -translate-y-[1px]" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-yellow-300 translate-x-[1px] -translate-y-[1px]" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-yellow-300 -translate-x-[1px] translate-y-[1px]" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-yellow-300 translate-x-[1px] translate-y-[1px]" />

      <h2 className="text-4xl font-teko text-white mb-10 tracking-wide">Kontakt</h2>

      <div className="space-y-8">
        <Link href={info.lokacijaLink} className="flex items-start gap-5 group">
          <MapPin className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1  transition-transform duration-300" />
          <span className="text-white text-lg font-light">Cesta talcev 3b, 4220 Škofja Loka</span>
        </Link>

        <Link href={info.telefonLink} className="flex items-center gap-5 group">
          <Phone className="w-6 h-6 text-yellow-300  transition-transform duration-300" />
          <span className="text-white text-lg font-light">041 590 192</span>
        </Link>

        <div className="flex items-start gap-5 group">
          <Clock className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1  transition-transform duration-300" />
          <div className="text-white">
            <div className="text-lg font-light">Pon - pet</div>
            <div className="text-[#FFD700]/70 mt-1 text-lg font-light">9:00 - 20:00</div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent pointer-events-none" />
    </div>
  )
}
