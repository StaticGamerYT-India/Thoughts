import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Header() {
  return (
    <div className="fixed top-0 z-50 flex items-center w-full justify-between p-6 bg-gradient-to-t from-transparent to-black">
      <Link href="/" className="transform transition-transform hover:scale-110">
        <Image src="/az.svg" alt="AZ Logo" width={32} height={32} priority/>
      </Link>
      <div className="flex justify-end gap-2 items-center group">
        <span className="font-light text-xs uppercase text-white text-opacity-25 group-hover:translate-x-[-10px] transition-transform md:inline hidden">Mujhe yahan dhundho  -&gt;</span> 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
          <FaXTwitter className="h-4 w-4 " />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
          <FaLinkedin className="h-4 w-4 " />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
          <FaInstagram className="h-4 w-4 " />
        </a>
        
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
          <FaGithub className="h-4 w-4 " />
        </a>
      </div>
    </div>
  );
}

export default Header;
