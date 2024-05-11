import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

import './index.css'


export default function App() {

  // Create arrays with 3, 7, and 5 elements
  const slowDivs = new Array(3).fill(null);
  const fastDivs = new Array(7).fill(null);
  const normalDivs = new Array(5).fill(null);

  return (
    <>
      <div className="h-screen w-full overflow-auto scroll-snap-y-mandatory pb-20">
        {/* Map over the slowDivs array to create the slow divs */}
        {slowDivs.map((_, index) => (
          <Div index={index} speed="slow" key={index} />
        ))}
        {/* Map over the normalDivs array to create the normal divs */}
        {normalDivs.map((_, index) => (
          <Div index={index} speed="normal" key={index} />
        ))}
        {/* Map over the fastDivs array to create the fast divs */}
        {fastDivs.map((_, index) => (
          <Div index={index} speed="fast" key={index} />
        ))}
      </div>
    </>
  );
}

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Div({index, speed}){
  
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref} )
  const yNormal = useParallax(scrollYProgress, 300)
  const ySlow = useParallax(scrollYProgress, 100)
  const yFast = useParallax(scrollYProgress, 500)

  // Interpolate scroll progress to a range of colors
  const color = useTransform(scrollYProgress, [0.1, 1], ['#ff0000', '#0000ff'])

  let y;
  switch(speed) {
    case "slow":
      y = ySlow;
      break;
    case "fast":
      y = yFast;
      break;
    default:
      y = yNormal;
  }


  return (
    <section className="h-screen flex justify-center items-center relative perspective-500 bg-gray-900 text-white text-xl">
      <motion.div 
        style={{ y, backgroundColor: color }}
        className="relative flex items-center justify-center w-[300px] h-[400px] bg-red-500"
      >
        {speed.toUpperCase()} DIV {index}
      </motion.div>
    </section>
  )
}