import { info } from '@/constants/info';
import Link from 'next/link';
import React from 'react';

type ShadowBtnProps = {
  className?: string;
  text: string;
  link: string;
};

const SecondaryBtn: React.FC<ShadowBtnProps> = ({ className = '', text ,link="#"}) => {
  return (
    
      <div
        className={`relative inline-block min-w-[240px] max-w-[240px] h-[70px] mobile:w-full ${className}`}
      >
        {/* Background shadow */}
        <div className="absolute top-[8px] left-[8px] w-full h-full bg-primary-dark-transparent rounded-sm z-0"></div>

        {/* Button */}
        <Link
          href={link}
          target={link == info.instagramLink ? "_blank":""}
          className="relative flex items-center justify-center w-full h-full bg-dark-bg text-white font-bold border border-primary rounded-sm cursor-pointer overflow-hidden transition-all duration-300 ease-linear group hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-[2px] active:translate-y-[2px] z-10"
        >
          {/* Button text */}
          <span className="z-10 text-lg mobile:text-xl font-montserrat font-normal tracking-wider ">
            {text}
          </span>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r w-[30%] h-[200%] -top-[20%] rotate-12 from-transparent via-white/40 to-transparent translate-x-[-500%] transition-all duration-[500ms] ease-linear group-hover:translate-x-[500%] z-0"></div>
        </Link>
      </div>
  );
};

export default SecondaryBtn;
