"use client"
import { AnimatePresence } from "framer-motion"
import { Navbar } from "./Navbar"
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";



const Provider = ({children}) => {
    const pathname = usePathname()
  return (
  <>
  <AnimatePresence>
  <div className=" w-[100%] h-[100%] bg-gradient-to-b from-gray-200 to-[#a4ceeb]" key={pathname}>
  {/* <motion.div 
   className="w-[100%] h-[100vh] hidden md:block fixed bg-[#3498db] rounded-b-[110px] z-40"
   animate={{height:'0vh'}}
   exit={{height:'140vh'}}
   transition={{duration:0.5,ease:"easeOut"}}

  />
  <motion.div 
   className="w-fit h-fit fixed hidden md:block m-auto top-0 bottom-0 left-0 right-0 cursor-default text-black text-[50px] font-500 z-50"
   initial={{opacity:1}}
   animate={{opacity:0}}
   exit={{opacity:0}}
   transition={{duration:0.8,ease:"easeOut"}}

  >{pathname.substring(1)}</motion.div>
  <motion.div 
   className="w-[100%] h-[100vh] hidden md:block fixed bg-[#3498db] bottom-0 rounded-t-[110px] z-30"
   initial={{height:'140vh'}}
   animate={{height:"0vh",transition:{delay:0.5}}}

  /> */}
      <div className="navbar h-22">
        <Navbar/>
      </div>
      <div className="w-[100%] h-[100%]">
      {children}
      </div>
      </div>
  </AnimatePresence>

  </>
  )
}

export default Provider