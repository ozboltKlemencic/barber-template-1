"use client";

import { IoLogoTiktok,IoMenuSharp  } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CgInstagram } from "react-icons/cg";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import SocialBtn from "../buttons/socialBtn";
import Primary from "../buttons/Primary";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  const navItems = [
    { href: ROUTES.NAROCANJE, label: "Naročanje" },
    { href: ROUTES.STORITVE, label: "Storitve" },
    { href: ROUTES.GALERIJA, label: "Galerija"},
    { href: ROUTES.KONTAKT, label: "Kontakt" },
    { href: ROUTES.EKIPA, label: "Ekipa" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 bg-black w-screen right-0 z-[99999999999999] transition-all duration-300 ease-in-out nav-shadov border-b border-yellow-200",
          isScrolled ? "bg-black backdrop-blur-sm" : "bg-black",
          isVisible ? "translate-y-0" : "-translate-y-[calc(100%+3px)]"
        )}
      >
        <div className="relative container mx-auto px-4 flex w-full max-w-7xl">
          <nav className="flex items-center justify-between w-full h-16">
          <Link href={ROUTES.DOMOV} className="flex items-center justify-center gap-2 ">
            <Image
              src="/img/logo/logo.jpeg"
              alt="Blackout Logo"
              width={20}
              height={20}
              className="object-cover"
            />
            <span className="text-2xl font-semibold mt-1 text-white font-teko">BLACKOUT</span>
          </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors flex text-sm font-montserrat items-center justify-center",
                    pathname === item.href
                      ? "text-neutral-50"
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="h-full flex items-center justify-center ">
              <div className=" hidden  md:flex h-full justify-center items-center gap-x-1">
                <SocialBtn Icon={IoLogoTiktok} link=""/>
                <SocialBtn Icon={CgInstagram} link=""/>
              </div>
              <button
                className="md:hidden "
                onClick={toggleMobileMenu}
              >
                <IoMenuSharp className={`${isMobileMenuOpen ? "hidden": "block"} h-6 w-6 text-white bg-transparent`} />
                <IoMdClose className={`${isMobileMenuOpen ? "block": "hidden"} h-6 w-6 text-white bg-transparent`} />
                <span className="sr-only ">Open menu</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`${isMobileMenuOpen ? "translate-x-0": "translate-x-full "}  fixed px-4 pb-8 top-0 flex flex-col justify-between  h-[100dvh] pt-24 bg-black duration-300 transition-all  w-screen translate-x-full z-[100]`} >
        <div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors flex text-xl font-monseratt pb-4  items-start justify-start",
                pathname === item.href
                  ? "text-neutral-50"
                  : "text-neutral-50 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-2 ">
          <Primary text="Naroči se" link="" w="100%"/>
          <div className="flex justify-center items-center gap-x-1">
                  <SocialBtn Icon={IoLogoTiktok} link=""/>
                  <SocialBtn Icon={CgInstagram} link=""/>
          </div>
        </div>

      </div>
    </>
  );
}
