"use client"
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const technologySection = document.getElementById('technology');
      const technologySectionTop = technologySection.offsetTop;

      if (window.scrollY + windowHeight >= technologySectionTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [isVisible, controls]);

  const skills = ["html", "css", "javascript", "react js", "node js", "mongo db", "next js", "raect native", "web development", "android development"];

  return (
    <>
      <section className='w-[100%] mt-3 pb-[100px] pl-5 pr-5 h-[100%] md:h-[100%] flex justify-center items-center'>
        <main className='flex justify-between md:flex-col w-[100%] h-full static'>
          <div className='left_side w-[45%] md:flex-col md:w-[100%]'>
            <div className='about'>
              <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.3 }} className='text-center text-[30px] text-[#2f2f2f] font-600 font-mono'>About Us</motion.h1>
              <motion.p initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.4 }} className='mt-4 text-center text-[#2f2f2f] font-500'>Welcome to TechTonic Studio, your trusted partner in digital success. We specialize in crafting tailored digital solutions that drive growth and elevate brands in today's fast-paced digital world. With a focus on innovation and collaboration, we work closely with our clients to understand their unique needs and deliver customized strategies that yield tangible results.</motion.p>
              <motion.p initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className='mt-4 text-center text-[#2f2f2f] font-500'>At TechTonic Studio, we're passionate about helping businesses of all sizes harness the power of technology to achieve their goals. From website design and development to digital marketing and beyond, our team of experts is dedicated to delivering top-notch solutions that exceed expectations. With a blend of creativity, expertise, and a customer-centric approach, we're committed to helping you stay ahead of the curve and thrive in the digital landscape</motion.p>
              <motion.p initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className='mt-4 text-center text-[#2f2f2f] font-500'>Whether you're looking to enhance your online presence, increase brand visibility, or drive conversions, TechTonic Studio has the tools and expertise to make it happen. Let's embark on this digital journey together and unlock the full potential of your business. Get in touch with us today to learn more about how we can help you succeed in the digital age.</motion.p>
            </div>
            <div className='technology mt-[100px]' id="technology">
              <motion.h1 initial={{ x: -100, opacity: 0 }} animate={controls} transition={{ delay: 0.3, duration: 0.3 }} className='text-[30px] text-[#2f2f2f] text-center'>Technology We Provide</motion.h1>
              <br />
              <br />
              <div className='flex flex-wrap gap-4'>
                {skills?.map((item, index) => (
                  <motion.button key={index} initial={{ x: -100, opacity: 0 }} animate={controls} transition={{ delay: index * 0.1, duration: 0.5 }} className='pl-4 pr-4 hover:bg-black hover:text-white pt-2 pb-2 rounded-lg border-black border-[1px] text-black font-500' style={{ transition: '0.5s ease-in-out' }}>{item}</motion.button>
                ))}
              </div>
            </div>
          </div>
          <div className='right_side w-[55%] md:hidden flex justify-center sticky top-[200px]  h-[600px]'>
            <div className='mt-10'>
              <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ delay: 0.9, duration: 0.9 }} className='animate'>
                <Image src='/animate.png' alt='Animation Image' width={300} height={300} />
              </motion.div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Page;
