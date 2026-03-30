import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center w-full justify-between px-4 sm:px-6 md:px-8 py-1.5 bg-black border-b border-zinc-900">
      <Link href="/" className="transform transition-transform hover:scale-110">
        <Image src="/az.svg" alt="AZ Logo" width={20} height={20} priority/>
      </Link>
      <div className="flex justify-end gap-0 items-center group">
        <span className="font-light text-xs uppercase text-white text-opacity-25 group-hover:translate-x-[-10px] transition-transform hidden lg:inline mr-2">Mujhe yahan dhundho  -&gt;</span> 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-0.5 text-gray-500 hover:text-white transition-all">
          <FaXTwitter className="h-2.5 w-2.5" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-0.5 text-gray-500 hover:text-white transition-all">
          <FaLinkedin className="h-2.5 w-2.5" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="p-0.5 text-gray-500 hover:text-white transition-all">
          <FaInstagram className="h-2.5 w-2.5" />
        </a>
        
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-0.5 text-gray-500 hover:text-white transition-all">
          <FaGithub className="h-2.5 w-2.5" />
        </a>
      </div>
    </div>
  );
}

export default Header;
