import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialBtn from './buttons/socialBtn'
import { CgInstagram } from "react-icons/cg";
import { IoLogoTiktok } from "react-icons/io5";
import { info } from '@/constants/info';

export default function Content() {
  return (
    <footer className="bg-black flex items-center justify-center h-full w-full text-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[35px] gap-y-24 text-sm sm:text-base">
          {/* Logo and Social Section */}
          <div className="flex  flex-col items-start gap-6">
            <Image
              src="/img/logo/big-logo.png"
              alt="Blackout Barbershop"
              width={120}
              height={120}
              className="mb-4 w-24 md:w-32"
            />
            <div className="flex h-full justify-center items-center gap-x-1">
                <SocialBtn Icon={IoLogoTiktok} link={info.tiktokLink}/>
                <SocialBtn Icon={CgInstagram} link={info.instagramLink}/>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-base md:text-2xl font-semibold mb-2 md:mb-2 font-teko">STORITVE</h3>
            <ul className="space-y-1 font-montserrat text-sm">
              <li>
                <Link href="#" className="hover:opacity-80">
                  Striženje
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Kodranje
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Brada
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Barvanje
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Drugo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-base md:text-2xl font-semibold mb-2 font-teko">KONTAKT</h3>
            <div className="space-y-1 font-montserrat text-sm">
              <p>Brivnica Blackout</p>
              <p>Cesta talcev 3C</p>
              <p>4220 Škofja Loka</p>
              <p>Slovenija</p>
              <p className="mt-4">041 590 192</p>
            </div>
          </div>

          {/* Business Hours Section */}
          <div>
            <h3 className="text-base md:text-2xl font-semibold mb-2 font-teko">DELOVNI ČAS</h3>
            <div className="space-y-1 font-montserrat text-sm">
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