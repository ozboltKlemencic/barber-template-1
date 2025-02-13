"use client"
import Link from 'next/link';
import React from 'react'

interface Props {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  link?:string
}

const ShinyText = ({ text, disabled = false, speed = 5, className = "",link="#" }: Props) => {
  return (
    <Link href={link} className='border realative group/shinyBtn border-neutral-500 gold-shadow hover:border-primary transition-all duration-300 px-2 py-1 w-[6rem] flex items-center justify-center'>
      <div
        className={`text-neutral-500  group-hover/shinyBtn:text-neutral-200 font-montserrat transition-all duration-300 text-sm bg-clip-text inline-block relative ${disabled ? "" : "animate-shine"} ${className}`}
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(254, 240, 138, 0) 0%,
            rgba(254, 240, 138, 0) 35%,
            rgba(255, 255, 255, 1) 50%,
            rgba(254, 240, 138, 0) 65%,
            rgba(254, 240, 138, 0) 100%
          )`,
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          animationDuration: `${speed}s`,
          
        }}
      >
        {text}
      </div>
    </Link>
  );
};

export default ShinyText;