import DesktopNav from "@/sections/navbarComponents/desktop";
import MobileNav from "@/sections/navbarComponents/mobile";
import Toggle from "@/sections/navbarComponents/toggle";
import useMobileDetection from "@/hooks/useMobileDetection";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";

export default function Navbar() {
  const isMobile = useMobileDetection();
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrolled();

  useBodyScrollLock(isOpen);

  return (
    <div
      className={`sticky top-0 left-0 z-50 w-full ${isScrolled ? "bg-white/80 backdrop-blur-sm shadow-none" : "bg-white shadow-navbar"} py-[16px] px-6 md:px-[72px] lg:px-[143px] flex items-center justify-between`}
    >
      <a className="text-primary font-bold" href="#My-Logo">
        My Logo
      </a>
      {isMobile && (
        <div className="flex items-center gap-4 relative z-[60]">
          <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      )}
      {isMobile && (
        <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
      {!isMobile && <DesktopNav />}
    </div>
  );
}
