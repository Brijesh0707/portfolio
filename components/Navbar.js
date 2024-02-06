"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


export const Navbar = () => {
    const links = [{
        title:'Home',
        link:'/'
    },{
        title:'About',
        link:'/about'
    },{
        title:'Projects',
        link:'/projects'
    },
    {
        title:'Contact',
        link:'/contactus'
    },]
    const pathname = usePathname()
  return (
    <>
      <header className='pt-6 pl-10 pr-5'>
        <nav className='flex justify-between items-center'>
            <div className='left_side'>
              <Link href="/" >
            
    <img src="/tech_logo.jpg" className='w-[120px] h-[55px] rounded-lg hover:w-[130px] hover:h-[60px]'style={{transition: '0.4s ease-in-out'}} />

              </Link>
            </div>
            <div className='right_side flex gap-4'>
            {links.map((item,index)=>(
                <>
                <Link href={item.link} key={index} className={`pl-3 pr-3 pt-1 pb-1 text-black font-600  rounded-lg  ${pathname===item.link?'bg-[#3498db] text-white':''}`}style={{transition: '0.4s ease-in-out'}}>{item.title}</Link>

                </>
            ))

            }
                 
            </div>
        </nav>
      </header>  
    </>
  )
}
