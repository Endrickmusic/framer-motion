import { motion } from "framer-motion"

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



 return (

  <>
    <div className="flex flex-wrap bg-gray-900 text-white h-full text-xl">

      <motion.div 
        animate={{ backgroundColor: ["#FFFFFF", "#999", "#FFFFFF"] }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          repeat: Infinity, 
          duration: 10 }}
        className="flex flex-grow flex-wrap bg-white text-black items-center m-8 p-8">
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

        <div className="flex flew-grow bg-yellow-500 items-center justify-center m-4 p-4 w-full">
        DIV 1.2 
        </div>

        <div className="flex flew-grow bg-blue-500 items-center justify-center m-4 p-4 w-full">
        DIV 1.3 
        </div>

        <div className="flex bg-green-500 items-center justify-center m-4 p-4 w-full">
        DIV 1.4 
        </div>
      </motion.div>

      <motion.div className="flex flex-wrap bg-yellow-500 text-black items-center p-10 m-8 min-w-[100px]"
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

        <motion.div className="flex flew-grow bg-pink-500 items-center justify-center m-4 p-4 w-full min-h-[100px]">
        DIV 2.3 
        </motion.div>
      </motion.div>
      <motion.div className="flex flex-grow bg-green-500 items-center justify-center text-black m-8"
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
      <motion.div className="flex flex-shrink bg-orange-500 text-black items-center justify-center p-2 m-8">
        DIV 4  
      </motion.div>
      <motion.div className="flex flex-grow bg-blue-500 text-black items-center justify-center p-2 m-8"
        initial={{ y: "-110vh" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 70,
          duration: 5,
          delay: 0,
          }}
      >
        DIV 5  
      </motion.div>
      <motion.div className="flex bg-purple-500 text-black items-center justify-center p-2 m-8"
        initial={{ y: "-90vh" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 70,
          duration: 5,
          delay: 0,
          }}      
      >
        DIV 6  
      </motion.div>
      <motion.div className="flex flex-grow bg-gray-500 text-black items-center justify-center p-2 m-8"
        initial={{ x: "-100vw"}}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 70,
          duration: 15,
          delay: 1
          }}      
      >
        DIV 7  
        <div className="flex flew-grow bg-yellow-500 items-center justify-center m-4 p-4 h-full">
        DIV 7.1 
        </div>

        <div className="flex flew-grow bg-blue-500 items-center justify-center m-4 p-4 h-full">
        DIV 7.2 
        </div>

        <div className="flex bg-green-500 items-center justify-center m-4 p-4 h-full">
        DIV 7.3 
        </div>
      </motion.div>
      <motion.div 
      initial={{ rotateZ: 0 }}
      animate={{ rotateZ: 360 }}
      transition={{ 
        type: "spring", 
        ease: "easeInOut",
        stiffness: 100, 
        repeat: 2, 
        duration: 15 }}
      className="flex bg-lime-500 text-black items-center justify-center p-2 m-8">
        DIV 8  
      </motion.div>
      <motion.div className="flex flex-grow bg-pink-500 text-black items-center justify-center p-6 m-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        DIV 9 
        <div className="flex bg-green-500 items-center justify-center h-full w-full">
        DIV 9.1 
        </div> 
      </motion.div>

    </div>
  </>
  
  )
}

