"use client"


import React, { useEffect, useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';


const page = () => {
  const reF = useRef()

  const {scrollYProgress} = useScroll({target:reF})
  const x = useTransform(scrollYProgress,[0,1],["0%","-100%"])

  useEffect(() => {
    AOS.init({
      duration: 700, 
      once: false, 
    });
  }, []);
  return (

   <>
    <section className='w-[100%] h-[100%]' >
     <main className='w-[100%] h-screen flex justify-center items-center'>
      <div className='flex justify-center flex-col items-center'>
      <h1 className='text-[#2f2f2f] text-[100px] md:text-[50px]'>Our Projects</h1>
      <button className='w-[100px] h-[100px] rounded-[50%] mt-3 text-black'>Scroll</button>
      </div>
      

     </main>
     <main className='w-[100%] h-[100%] pb-[100px]'>
      <div className='flex justify-around pl-10 pr-10 md:pl-[13vw] md:pr-0 mt-5 mb-5 md:flex-col'>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black' data-aos='fade-left'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
      </div>
      <div className='flex justify-around pl-10 pr-10 md:pl-[13vw] md:pr-0 mt-5 mb-5 md:flex-col'>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black' data-aos='fade-left'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
      </div>
      <div className='flex justify-around pl-10 pr-10 md:pl-[13vw] md:pr-0 mt-5 mb-5 md:flex-col'>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black' data-aos='fade-left'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
      </div>
      <div className='flex justify-around pl-10 pr-10 md:pl-[13vw] md:pr-0 mt-5 mb-5 md:flex-col'>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black' data-aos='fade-left'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
      </div>
      <div className='flex justify-around pl-10 pr-10 md:pl-[13vw] md:pr-0 mt-5 mb-5 md:flex-col'>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black' data-aos='fade-left'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
      </div>
      <div className='flex justify-around pl-10 pr-10 md:pl-[13vw] md:pr-0 mt-5 mb-5 md:flex-col'>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
        <div className='w-[300px] h-[350px] border-[1px] rounded-md border-black' data-aos='fade-left'>
          <div className='w-[100%] h-[300px] border-black border-[1px]'>
           <p>here project image come</p>

          </div>
          <div className='flex justify-center items-center'>
            <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button>
          </div>
        </div>
      </div>
      
     </main>
     <main className='w-[100%] h-screen flex justify-center items-center'>
       <div className='flex flex-col justify-center items-center'>
        <p className='text-[#2f2f2f] mb-10'>do you have project ?</p>
       <Link href="/contactus"> <button className='w-[105px] h-[100px] rounded-[50%] bg-black text-white font-sans text-center font-600'>Hire Us</button></Link>
       </div>      

     </main>
 
    </section>
   </>
  )
}

export default page