import React from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "./ui/button";


function Footer() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 bg-black">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800 py-4 max-w-2xl mx-auto">
        <div className="text-sm text-white text-center sm:text-left order-2 sm:order-1">
          <span>Smeet Parmar</span>
          <span className="hidden md:inline text-zinc-500"> — baadmedaaldunga@gmail.com</span>
        </div>
        <div className="flex justify-center sm:justify-end gap-2 items-center order-1 sm:order-2">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all">
            <Button variant="link" size="sm" className="font-normal text-sm text-white h-4 px-0">
              Subscribe <MdOutlineArrowOutward className="ml-1"/>
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;