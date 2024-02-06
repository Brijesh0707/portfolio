"use client"

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <section className="w-[100%] h-[100%] mt-2 pl-5 pr-5">
        <main className="flex justify-between items-center">
          <div className="left_side">
          <motion.img
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  whileHover={{ scale: 1.1 }} 
  transition={{ delay: 0.2, duration: 0.4 }}
  src="/hero_banner.png"
/>
          </div>
          <div className="right_side text-center">
            {/* heading here of company */}
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[140px] text-[#2f2f2f] font-600 font-mono"
            >
              TechTonic
            </motion.h1>
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[100px] text-[#2f2f2f] font-500"
            >
              Studio
            </motion.h2>
            <motion.h3
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-[40px] text-[#2f2f2f] font-500 font-sans pt-3"
            >
              Building Futures Together
            </motion.h3>
          </div>
        </main>
      </section>
      </motion.div>
    </>
  );
}
