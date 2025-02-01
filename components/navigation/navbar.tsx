"use client";

import { IoLogoTiktok, IoMenuSharp } from "react-icons/io5";
import { CgInstagram } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import SocialBtn from "../buttons/socialBtn";
import Primary from "../buttons/Primary";
import { info } from "@/constants/info";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Reset body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, []);

  // Handle overflow and menu state on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.removeProperty('overflow');
  }, [pathname]);

  // Modified scroll handler to ensure navbar is visible at top
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (Math.abs(currentScrollY - lastScrollY) < 10) return;
    
    setIsScrolled(currentScrollY > 50);
    
    // Always show navbar if we're at the very top
    if (currentScrollY <= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(currentScrollY <= lastScrollY);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let timeoutId: number | undefined;
    
    const debouncedScroll = () => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
      timeoutId = window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
    };
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => {
      const newState = !prev;
      if (newState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.removeProperty('overflow');
      }
      return newState;
    });
  }, []);

  const navItems = [
    { href: ROUTES.NAROCANJE, label: "Naročanje" },
    { href: ROUTES.STORITVE, label: "Storitve" },
    { href: ROUTES.GALERIJA, label: "Galerija"},
    { href: ROUTES.KONTAKT, label: "Kontakt" },
    { href: ROUTES.EKIPA, label: "Ekipa" },
  ];

  // Handle link clicks in mobile menu
  const handleMobileMenuClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.removeProperty('overflow');
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 bg-black w-screen right-0 z-[999] transition-transform duration-300 ease-in-out nav-shadow border-b nav-shadov border-yellow-200 ",
          isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-black ",
          isVisible || lastScrollY <= 0 ? "translate-y-0" : "translate-y-[calc(-100%_-_12px)] "
        )}
      >
        <div className="relative container mx-auto px-6 flex w-full max-w-7xl">
          <nav className="flex items-center justify-between w-full h-16">
            <Link href={ROUTES.DOMOV} className="flex items-center justify-center gap-2">
              <Image
                src="/img/logo/logo.png"
                alt="Blackout Logo"
                width={20}
                height={20}
                className="object-cover"
                priority
              />
              <span className="text-2xl font-semibold mt-1 text-white font-teko">BLACKOUT</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  target={item.href === ROUTES.NAROCANJE ? "_blank" : undefined}
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

            <div className="h-full flex items-center justify-center">
              <div className="hidden md:flex h-full justify-center items-center gap-x-1">
                <SocialBtn Icon={IoLogoTiktok} link={info.tiktokLink}/>
                <SocialBtn Icon={CgInstagram} link={info.instagramLink}/>
              </div>
              <button
                className="md:hidden p-2 -mr-2 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <IoMdClose className="h-6 w-6 text-white" />
                ) : (
                  <IoMenuSharp className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div 
        className={cn(
          "fixed inset-0 bg-black transition-transform duration-300 ease-in-out z-[998] pt-16",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="h-full flex flex-col justify-between p-4 overflow-y-auto">
          <div className="space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.href === ROUTES.NAROCANJE ? "_blank" : undefined}
                className={cn(
                  "block text-xl font-semibold font-montserrat py-1",
                  pathname === item.href
                    ? "text-neutral-50"
                    : "text-neutral-50 hover:text-white"
                )}
                onClick={handleMobileMenuClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="space-y-4 py-4">
            <Primary text="Naroči se" link={ROUTES.NAROCANJE} w="100%"/>
            <div className="flex justify-center items-center gap-x-2">
              <SocialBtn Icon={IoLogoTiktok} link={info.tiktokLink}/>
              <SocialBtn Icon={CgInstagram} link={info.instagramLink}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}