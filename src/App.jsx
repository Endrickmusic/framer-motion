import { motion, useScroll, useTransform } from "framer-motion"

import './index.css'

import Experience from "./Experience"


export default function App() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 3,
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2])
  const y = useTransform(scrollYProgress, [0, 1], [0, 500])
  console.log(scrollYProgress)

 return (

  <>
    <div className="flex flex-wrap bg-gray-900 text-white h-full text-xl"
    style={{ height: '200vh' }}
    >

      <motion.div 
        className="flex flex-grow flex-wrap bg-white text-black items-center m-8 p-8 z-10 h-[300px]"
        animate={{ }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          repeat: Infinity, 
          duration: 10 }}
        style={{  }}
        >
        DIV 1
        <motion.div 
          animate={{ 
            scale: [ 1, 1, 1 ],
            backgroundColor: ["#00FFFF", "#7700FF", "#00FFFF"]
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            repeat: Infinity, 
            duration: 10 }}
        className="flex bg-red-500 items-center justify-center m-4 p-4 w-full">
        DIV 1.1 
        </motion.div>

        <motion.div className="flex flew-grow bg-yellow-500 items-center justify-center m-4 p-4 w-full"
        >
        DIV 1.2 
        </motion.div>

      </motion.div>

      <motion.div className="flex flex-wrap bg-yellow-500 text-black items-center p-10 m-8 min-w-[100px] z-20 max-h-[300px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 1,
        delay: 0,
       }}
      >
        DIV 2  
        <motion.div className="flex bg-teal-500 items-center justify-center m-4 p-4 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 2,
                delay: 1,
                delayChildren: 1,
                staggerChildren: 1
               }}
        >
        DIV 2.1 
        </motion.div>

        <motion.div className="flex flew-grow bg-white items-center justify-center m-4 p-4 w-full"
          initial={{ }}
          animate={{ }}
          transition={{ 

          }}
        >
        DIV 2.2 
        </motion.div>

      </motion.div>
      <motion.div className="flex flex-grow bg-green-500 items-center justify-center text-black m-8 h-[300px]"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 5,
          delay: 0,
        }}
      >
        DIV 3  
      </motion.div>
      <motion.div className="flex flex-shrink bg-orange-500 text-black items-center justify-center p-2 m-8 h-[300px]">
        DIV 4  
      </motion.div>
    
    </div>
  </>
  
  )
}

