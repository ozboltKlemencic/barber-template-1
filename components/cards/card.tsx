"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";

interface Props {
  link:string;
  title:string;
  url:string;
}

export function ThreeDCardDemo({link,title,url}:Props) {
  return (
    <Link href={link}>
      <CardContainer className="inter-var">
        <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-yellow-200/[0.1] bg-black border-yellow-200/[0.2]  w-[92vw] sm:w-[25rem]  h-auto p-1 border  ">
          <CardItem translateZ="20" className="w-full opacity-80 hover:opacity-100">
            <Image
              src={url}
              height="1000"
              width="1000"
              className="h-[25rem] md:h-[35rem] w-full object-cover  group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center pointer-events-none">
            <CardItem
              translateZ={20}
              as="button"
              className="px-2 py-6 m-1 w-full backdrop-blur-lg bg-black/[0.3] border border-white/[0.05] text-white text-xs font-bold"
            >
              <span className="relative text-neutral-50 text-lg font-normal">{title}</span>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </Link>
  );
}
