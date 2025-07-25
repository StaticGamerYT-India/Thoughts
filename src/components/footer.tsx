import React from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "./ui/button";


function Footer() {
  return (
    <div className="fixed bottom-0 z-50 w-full px-6 bg-black">
      <div className="flex items-center justify-between border-t border-zinc-800 py-3">
        <div className="text-sm text-white">
          <span>Smeet Parmar</span>
          <span className="hidden md:inline text-zinc-500"> — baadmedaaldunga@gmail.com</span>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className=" text-zinc-500 hover:text-white transition-all">
            <Button variant="link" size="sm" className=" font-normal text-sm text-white h-4">
              Subscribe karlo chalo <MdOutlineArrowOutward className="ml-1"/>
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;