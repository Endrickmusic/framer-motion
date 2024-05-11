import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

import './index.css'


export default function App() {

 return (

  <>
    <div>
    {[1, 2, 3, 4, 5].map((index) => (
    <Div index={index} />
))}
    </div>
  </>
  
  )
}

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Div({index}){
  
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref} )
  const y = useParallax(scrollYProgress, 300)
  const ySlow = useParallax(scrollYProgress, 100)
  const yFast = useParallax(scrollYProgress, 500)

  // Interpolate scroll progress to a range of colors
  const color = useTransform(scrollYProgress, [0.1, 1], ['#ff0000', '#0000ff'])

  return (
    <section className="h-screen flex justify-center items-center relative perspective-500 bg-gray-900 text-white text-xl">
      
      <motion.div 
        style={{ y: ySlow, backgroundColor: color }}
        className="relative flex items-center justify-center w-[300px] h-[400px] bg-red-500"
      >
        Slow DIV {index}
      </motion.div>
      
      <div 
        ref={ref}
        className="relative flex items-center justify-center w-[300px] h-[400px] bg-white text-black m-20 z-10"
        >
        DIV {index}
      </div>

      <motion.div 
        style={{ y: yFast, backgroundColor: color }}
        className="relative flex items-center justify-center w-[300px] h-[400px] bg-blue-500 "
      >
        Fast DIV {index}
      </motion.div>

      <motion.h2 
      style={{ y }}
      className='m-8'
      >
        {`#00${index}`}
      </motion.h2>
    
    </section>
  )
}