import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialBtn from './buttons/socialBtn'
import { CgInstagram } from "react-icons/cg";
import { IoLogoTiktok } from "react-icons/io5";
import { info } from '@/constants/info';
import ROUTES from '@/constants/routes';

export default function Content() {
  return (
    <footer className="bg-black flex items-center justify-center h-full w-full text-white py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[35px] gap-y-24 text-sm sm:text-base">
          {/* Logo and Social Section */}
          <div className="flex  flex-col items-start justify-start  md:justify-center gap-6 ">
            <Image
              src="/img/logo/big-logo.png"
              alt="Blackout Barbershop"
              width={120}
              height={120}
              className="mb-4 -ml-2 md:ml-0 w-24 md:w-32"
            />
            <div className="flex h-full w-full justify-start md:ml-6  items-center gap-x-1">
                <SocialBtn Icon={IoLogoTiktok} link={info.tiktokLink}/>
                <SocialBtn Icon={CgInstagram} link={info.instagramLink}/>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-base md:text-2xl font-semibold mb-2 md:mb-2  text-header font-teko">STORITVE</h3>
            <ul className="space-y-1 font-montserrat text-subheader text-sm">
              <li>
                <Link href={ROUTES.STORITVE} className="hover:opacity-80">
                  Striženje
                </Link>
              </li>
              <li>
                <Link href={ROUTES.STORITVE} className="hover:opacity-80">
                  Kodranje
                </Link>
              </li>
              <li>
                <Link href={ROUTES.STORITVE} className="hover:opacity-80">
                  Brada
                </Link>
              </li>
              <li>
                <Link href={ROUTES.STORITVE} className="hover:opacity-80">
                  Barvanje
                </Link>
              </li>
              <li>
                <Link href={ROUTES.STORITVE} className="hover:opacity-80">
                  Drugo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-base md:text-2xl font-semibold mb-2 text-header font-teko">KONTAKT</h3>
            <div className="space-y-1 text-subheader font-montserrat text-sm">
              <p>Brivnica Blackout</p>
              <p>Cesta talcev 3C</p>
              <p>4220 Škofja Loka</p>
              <p>Slovenija</p>
              <p className="mt-4">041 590 192</p>
            </div>
          </div>

          {/* Business Hours Section */}
          <div>
            <h3 className="text-base md:text-2xl font-semibold mb-2 text-header font-teko">DELOVNI ČAS</h3>
            <div className="space-y-1 font-montserrat text-subheader text-sm">
              <p>Pon. - Pet.:</p>
              <p>9:00 - 20:00</p>
              <p>Sob. - Ned.:</p>
              <p>Zaprto</p>
              <p className="mt-4">Prazniki zaprto</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 md:mt-12 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between text-xs md:text-sm text-gray-400">
          <p className='font-teko'>© BRIVNICA BLACKOUT 2025</p>
          <p className="mt-2 md:mt-0 font-teko">IZDELAL : OŽBOLT KLEMENČIČ</p>
        </div>
      </div>
    </footer>
  )
}