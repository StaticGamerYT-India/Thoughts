import Link from 'next/link'
import React, { useState } from "react";
import { compareDesc, format, parseISO } from 'date-fns'
import { allBlogs, allRecommendations, allAbouts } from "contentlayer/generated"


function Blogs() {
  const blogs = allBlogs.sort((a, b) => compareDesc(new Date(b.date), new Date(a.date))); 
  
    return (
      <div className="flex-col pb-24 w-full">
        <div className="prose dark:prose-invert">
          {blogs.map((blog, index) => (
            <Link href={blog.slug} key={index}>
              <article className="cursor-pointer py-4 hover:bg-zinc-900 border-b border-zinc-800 w-full transition-colors">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-1">
                  <h2 className='pb-1 text-lg sm:text-xl'>{blog.title}</h2>
                  <span className="text-zinc-500 tracking-tighter text-xs sm:text-sm whitespace-nowrap">{format(parseISO(blog.date), 'MMM yy')}</span>
                </div>
                {blog.description && <p className="text-zinc-500 text-xs sm:text-sm font-light">{blog.description}</p>}
              </article>
            </Link>
          ))}
        </div>
      </div>
    )
}

export default Blogs;