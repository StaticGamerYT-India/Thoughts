"use client";

import Link from 'next/link'
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { compareDesc, format, parseISO } from 'date-fns'
import { allBlogs, allRecommendations, allAbouts } from "contentlayer/generated"
import Startups from "@/components/startups";
import PreviewUrl from "@/components/preview-url";
import Blogs from "@/components/blogs";
import Recommendations from '@/components/recommendations';

export default function Landing() {
  const [selectedSegment, setSelectedSegment] = useState('recommendations');

  return (
    <div className="bg-black text-zinc-200 flex items-center justify-center overflow-x-hidden">
        <section className="flex flex-col w-full min-h-screen pt-16 pb-20">
          <Header />
          <div className="flex flex-col items-start justify-center w-full px-4 sm:px-6 md:px-8 max-w-2xl mx-auto">
            <Main />
            <Startups />
            <div className="flex space-x-2 sm:space-x-4 py-8 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              <Button 
                variant='ghost' 
                onClick={() => setSelectedSegment('writings')} 
                className={`${selectedSegment !== 'writings' ? 'text-zinc-500' : 'text-zinc-200'} hover:text-zinc-200 hover:bg-zinc-900 text-base`}>
                  writings
                  <span className="pl-1 text-zinc-500 text-sm">・ {allBlogs.length}</span>
              </Button>
              <Button 
                variant='ghost' 
                onClick={() => setSelectedSegment('recommendations')} 
                className={`${selectedSegment !== 'recommendations' ? 'text-zinc-500' : 'text-zinc-200'} hover:text-zinc-200 hover:bg-zinc-900 text-base`}>
                  what i like
                  <span className="pl-1 text-zinc-500 text-sm">・ {allRecommendations.length}</span>
              </Button>
            </div>
            {selectedSegment === 'writings' && <Blogs />}
            {selectedSegment === 'recommendations' && <Recommendations />}
          </div>
          <Footer />
      </section>
    </div>
  );
}

function Main() {
  return (
    <div className="flex flex-col justify-center w-full py-8 sm:py-16 md:py-24">
      <div className="flex flex-col items-start justify-center text-left gap-3 md:gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter text-zinc-200">Smeeeeeeeet</h1>
          <img 
            src="/adam.jpg" 
            alt="Adam Zvada" 
            className="w-8 h-8 rounded-full border-1 border-zinc-800 object-cover transition-transform duration-2000 hover:duration-200 animate-spin" 
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter text-zinc-200">Parmar</h1>
        </div> 
        <h2 className="text-sm sm:text-base md:text-lg text-zinc-500 tracking-tighter leading-relaxed w-full">
          Trying to be a better person everyday, Kisiko hurt karke acha nhi lagta,<br className="hidden sm:block"/> 
          Avid SRK Fanboy, Not-so-nerdy coder but simply an enthusiast, bas maza aata hai, ye images pe click Karo aur swipe karo kahaani sunne ke liye
        </h2>
      </div>
    </div>
  );
}



