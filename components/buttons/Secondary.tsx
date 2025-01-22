import Link from 'next/link';
import React from 'react';

type ShadowBtnProps = {
  className?: string;
  text: string;
};

const SecondaryBtn: React.FC<ShadowBtnProps> = ({ className = '', text }) => {
  return (
    <div
      className={`relative inline-block min-w-[240px] max-w-[240px] h-[70px] mobile:w-full ${className}`}
    >
      {/* Background shadow */}
      <div className="absolute top-[8px] left-[8px] w-full h-full bg-yellow-300/[0.2] rounded-sm z-0"></div>

      {/* Button */}
      <Link
        href="#"
        className="relative flex items-center justify-center w-full h-full bg-black text-white font-bold border border-[#c8b47c] rounded-sm cursor-pointer overflow-hidden transition-all duration-300 ease-linear group hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-[2px] active:translate-y-[2px] z-10"
      >
        {/* Button text */}
        <span className="z-10 text-lg mobile:text-xl font-montserrat font-normal tracking-wider font-montserrat">
          {text}
        </span>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-all duration-[600ms] ease-linear group-hover:translate-x-full z-0"></div>
      </Link>
    </div>
  );
};

export default SecondaryBtn;
