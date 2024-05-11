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

  return (
    <section className="h-screen flex flex-col justify-center items-center relative scroll-snap-center perspective-500 bg-gray-900 text-white text-xl"
    >
      <div 
        ref={ref}
        className="relative w-[300px] h-[400px] bg-white text-black m-20 z-10"
        >
        DIV {index}
      </div>
      <motion.h2 style={{ y }}>{`#00${index}`}</motion.h2>
    
    </section>
  )
}