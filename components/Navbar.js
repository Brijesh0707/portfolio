"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
 

   


export const Navbar = () => {
  const [navbar,setNavbar]=useState(false)
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
    useEffect(()=>{
      const initial1 = ()=>{
        AOS.init({
          duration: 700, 
          once: false, 
        });
      }
  
      initial1()
    },[])
  return (
    <>
      <header className='pt-6 pl-10 pr-5 md:hidden'>
        <nav className='flex justify-between items-center'>
            <div className='left_side'>
              <Link href="/" >
            
    <img src="/tech_tonic_logo2.png" className='w-[120px] h-[120px] rounded-lg ' />

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
      <header className='hidden md:block'>
      <nav>
      <div className='wrapper flex relative justify-between items-center'>
        <div className='left pl-5 pt-3'>
        <Link href="/">
        <img src="/bg_tech_logo.png" className='w-[90px] h-[45px] rounded-lg ' />
        </Link>
        </div>
        <div className='menu_button right absolute z-[70] right-4' onClick={() => setNavbar(!navbar)}>
           {navbar===true?<><p className='text-[30px] text-white'>x</p></>:<> <div className={`w-[30px] h-[2px] mt-1 bg-black `}></div>
  <div className={`w-[30px] h-[2px] mt-1 bg-black `}></div>
  <div className={`w-[30px] h-[2px] mt-1 bg-black `}></div></>

           }
</div>

      </div>
         {navbar &&<motion.div  initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.1}} exit={{ x: 100, opacity: 0 }}  className='w-screen h-screen fixed flex flex-col items-center justify-center   gap-4 top-0 left-0 right-0 bottom-0 bg-[#3498db] z-66'>
         {links.map((item,index)=>(
          <>
            <Link href={item.link} data-aos='fade-right' key={index} className='text-white text-[25px]'>{item.title}</Link>
          </>
         ))

         }

</motion.div>

         }
      </nav>

      </header>
    </>
  )
}
