"use client"



import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useEffect } from 'react';
 
  
export default function ProjectCompo() {
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
          <section className='w-[100%] h-[100%] overflow-hidden' >
     <main className='w-[100%] h-screen flex justify-center items-center'>
      <div className='flex justify-center flex-col items-center'>
      <h1 className='text-[#2f2f2f] text-[100px] md:text-[50px]'>Our Projects</h1>
      <button className='w-[100px] h-[100px] rounded-[50%] mt-3 text-black'>Scroll</button>
      </div>
      

     </main>
     <main className='w-[100%] h-[100%] pb-[100px]'>
      <div className='flex justify-around pl-10 pr-10  md:pl-[8vw] md:pr-0 mt-5 mb-5 md:flex-col'>
      <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md  md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/ajtechsolution.png' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>Blogging Web</p>
          <a href='https://www.aj-techsolution.com/'>  <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
  
        <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md ' data-aos='fade-left'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project2.png' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>CryptoWave Web App</p>
           <a href='https://cryptowave0707.netlify.app/'> <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
      </div>
      <div className='flex justify-around pl-10 pr-10 md:pl-[8vw] md:pr-0 mt-5 mb-5 md:flex-col'>
        <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md  md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project3.png' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>ClassMate Online Chat</p>
           <a href='https://classmate0101.vercel.app/'> <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
        <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md ' data-aos='fade-left'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project4.png' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>SocialGram Web</p>
           <a href='https://socialgram01.vercel.app/'> <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
      </div>
      <div className='flex justify-around pl-10 pr-10 md:pl-[8vw] md:pr-0 mt-5 mb-5 md:flex-col'>
        <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md  md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project5.png' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>Xiv tech</p>
          <a href='https://challenge-five-delta.vercel.app/'>  <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
        <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md ' data-aos='fade-left'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project6.png' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>Ecommerce Web</p>
          <a href='https://cart-app-indol.vercel.app/'>  <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
      </div>
      <div className='flex justify-around pl-10 pr-10 md:pl-[8vw] md:pr-0 mt-5 mb-5 md:flex-col'>
        <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md  md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project7.png' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>Emoney Web Online Wallet</p>
          <a href='https://emoneybeta1.netlify.app/'>  <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
        <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md ' data-aos='fade-left'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project8.png' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>Computer Adda</p>
           <a href='https://computeradda02.netlify.app/'> <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
      </div>
      <div className='flex justify-around pl-10 pr-10 md:pl-[8vw] md:pr-0 mt-5 mb-5 md:flex-col'>
      <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md  md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project1.png' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>Blogging Web</p>
          <a href='https://blog0002.netlify.app/'>  <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
        <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md ' data-aos='fade-left'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project10.jpg' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>Anime Android App</p>
          <a href='https://houseofhopes.itch.io/amniflix'>  <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
      </div>
      <div className='flex justify-around pl-10 pr-10 md:pl-[8vw] md:pr-0 mt-5 mb-5 md:flex-col'>
        <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md  md:mt-5 md:mb-5' data-aos='fade-right'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project11.png.jpg' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>Weather Android App</p>
           <a href='https://houseofhopes.itch.io/vatavranwizard'> <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
          </div>
        </div>
        <div className='w-[350px] h-[390px] border-[1px] border-black overflow-hidden rounded-md ' data-aos='fade-left'>
          <div className='w-[100%] h-[300px]  object-contain '>
           <img src='/project12.png' className='w-[100%] h-[100%] rounded-md'/>

          </div>
          <div className='flex justify-center items-center flex-col pt-2'>
          <p className='text-[#2f2f2f] text-[20px] font-600'>Easy Hire</p>
          <a href='https://solutions001.netlify.app/' >  <button className='pl-4 pr-4 pt-1 pb-1 bg-black mt-2 text-white font-500 rounded-md '>Live Demo</button></a>
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
