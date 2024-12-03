"use client";
import { SITE_CONFIG } from "@/lib/constants/site-config";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import { Earth } from "lucide-react";
import { ModeToggle } from "../shared/theme-toggle";
import Image from "next/image";

export default function NavbarSection() {
  return (
    <>
      <nav className="flex items-center justify-between  md:px-32 px-8 py-2  fixed top-0 right-0 left-0 text-black dark:bg-black bg-transparent backdrop-blur-3xl z-50 bg-white">
        <div className="flex justify-between items-center gap-2 font-bold text-brand uppercase">
          <Image src={"/logo.png"} width={150} height={150} alt="" />
        </div>
        {/* Wrapper for centering DesktopNav */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <DesktopNav />
        </div>

        <div className="block md:!hidden">
          <MobileNav />
        </div>
      </nav>
    </>
  );
}
