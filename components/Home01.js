"use client"

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const Home01 = () => {
  return (
   <>
       <section className="w-[100%] h-[100%] conatiner_padding md:h-screen mt-2 pl-5 pr-5">
        <main className="flex justify-between items-center md:flex-col-reverse md:mt-[100px]">
          <div className="left_side">
      
          <motion.img
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  whileHover={{ scale: 1.1 }} 
  transition={{ delay: 0.9, duration: 0.9 }}
  className="md:h-[150%]"
  src="/hero_banner.png"
/>
     <motion.div  initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.9}} className="flex justify-center items-center mt-10">
     <Link href="/about">
     <button className="pl-3 pr-3 pt-1 pb-1 rounded-lg border-black border-[1px] hidden md:block text-black font-600">Explore</button>
     </Link>
     </motion.div>
          </div>
          <div className="right_side text-center">
            {/* heading here of company */}
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-[140px] text-[#2f2f2f] md:text-[55px] font-600 font-mono"
            >
              TechTonic
            </motion.h1>
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-[100px] text-[#2f2f2f] md:text-[35px] font-500"
            >
              Studio
            </motion.h2>
            <motion.h3
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[40px] text-[#2f2f2f] md:text-[18px] font-500 font-sans pt-3"
            >
              Building Futures Together
            </motion.h3>
          </div>
        </main>
      </section>
   </>
  )
}

export default Home01