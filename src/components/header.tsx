import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center w-full justify-between px-4 sm:px-6 md:px-8 py-1 bg-black border-b border-zinc-900">
      <Link href="/" className="transform transition-transform hover:scale-110">
        <Image src="/az.svg" alt="AZ Logo" width={16} height={16} priority/>
      </Link>
      <div className="flex justify-end gap-0 items-center">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all">
          <FaXTwitter className="h-2 w-2" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all ml-1">
          <FaLinkedin className="h-2 w-2" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all ml-1">
          <FaInstagram className="h-2 w-2" />
        </a>
        
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all ml-1">
          <FaGithub className="h-2 w-2" />
        </a>
      </div>
    </div>
  );
}

export default Header;
