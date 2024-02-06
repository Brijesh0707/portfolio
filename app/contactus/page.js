"use client"


import React from 'react'
import {motion} from 'framer-motion'


const page = () => {
  return (
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>

    <section className='w-[100%] h-[100%] flex justify-center items-center'>
    <p className='text-[100px] text-black font-500'>PAGE UNDER DEVELOPMENT OKAY 😊</p>

   </section>
   </motion.div>
  )
}

export default page