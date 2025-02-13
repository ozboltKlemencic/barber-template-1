
import React from "react";
import Link from "next/link"

interface Props {
  title:string;
  link:string;
  paragraphs:string[];
  icon: React.ReactNode;
  cta:string;
}

export default function ContactCard({title,link,icon,cta,paragraphs}:Props) {
  return (
    <div className="bg-black  border-2 m-2 w-[80vw]   md:w-[300px] h-[250px]  hover:border-yellow-200 transition-all duration-500 gold-shadow border-[#FFD700]/30 max-w-md relative">
      {/* Premium corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary -translate-x-[2px] -translate-y-[2px]" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary translate-x-[2px] -translate-y-[2px]" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary -translate-x-[2px] translate-y-[2px]" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary translate-x-[2px] translate-y-[2px]" />

      <div className="gap-y-9   font-montserrat w-full flex flex-col h-full items-center justify-center ">
        <h2 className="text-lg font-montserrat text-header tracking-wide">{title}</h2>

        <div>
          {paragraphs.map((paragraph, index) => (
              <p key={index} className='font-montserrat text-sm text-subheader max-w-5xl text-center '>
                {paragraph}
              </p>
          ))}
        </div>

        <Link href={link} className="flex group items-center justify-center gap-x-2 group">
          <span className="text-primary font-teko text-2xl font-medium">{cta}</span>
          {icon}
        </Link>
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/[0.09] to-transparent pointer-events-none" />
    </div>
  )
}
