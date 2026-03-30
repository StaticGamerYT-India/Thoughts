import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center w-full justify-between px-4 sm:px-6 md:px-8 py-4 bg-black border-b border-zinc-900">
      <Link href="/" className="transform transition-transform hover:scale-110">
        <Image src="/az.svg" alt="AZ Logo" width={32} height={32} priority/>
      </Link>
      <div className="flex justify-end gap-1 sm:gap-2 items-center group">
        <span className="font-light text-xs uppercase text-white text-opacity-25 group-hover:translate-x-[-10px] transition-transform hidden md:inline">Mujhe yahan dhundho  -&gt;</span> 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 text-gray-500 hover:text-white transition-all">
          <FaXTwitter className="h-4 w-4" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 text-gray-500 hover:text-white transition-all">
          <FaLinkedin className="h-4 w-4" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 text-gray-500 hover:text-white transition-all">
          <FaInstagram className="h-4 w-4" />
        </a>
        
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 text-gray-500 hover:text-white transition-all">
          <FaGithub className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default Header;
