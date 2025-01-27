"use client";
import React from "react";
import { Phone  } from "lucide-react";
import Link from "next/link";
import { IoLogoTiktok } from "react-icons/io5";
import { CgInstagram } from "react-icons/cg";

import { info } from "@/constants/info";

const CtaIcon = () => {
  return (
    <div className="flex justify-center group">
      {[
        {
          Icon: Phone,
          link: info.telefonLink,
          className: "-translate-x-2 ",
        },
        {
          Icon: IoLogoTiktok,
          link: info.tiktokLink,
          className: "",
        },
        {
          Icon: CgInstagram,
          link: info.instagramLink,
          className: "translate-x-2",
        },
      ].map(({ Icon, link, className }, index) => (
        <div
          key={index}
          className={`relative `}
          style={{ zIndex: index + 10 }}
        >
          <div 
            className={`relative  cursor-pointer group/${index} overflow-hidden hover:-translate-y-2 transition-all duration-300 r backdrop-blur-md border-yellow-200/[0.5] border ${className}`}
          >
            <Link href={link} target="_blank">
              <div className="absolute inset-0  bg-yellow-200/20 blur-xl" />
              <div className="relative bg-black p-4 ">
                <Icon className="w-6 h-6 text-white" />
              </div>
            </Link>
            {/* Hover effect */}
            <div className={`
              absolute inset-0 h-[200%] -translate-y-1/3 bg-gradient-to-r -rotate-12 
              from-transparent via-white/30 to-transparent 
              translate-x-[-150%] transition-all duration-300 ease-linear 
              group-hover/0:translate-x-full group-hover/1:translate-x-full group-hover/2:translate-x-full 
              z-0`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CtaIcon;
