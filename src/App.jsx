import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"

import './index.css'

import Experience from "./Experience"


export default function App() {

 return (

  <>
    <div className="flex flex-wrap bg-gray-900 text-white h-screen">

      <div className="flex flex-grow bg-white text-black items-center justify-center m-8 ">
        DIV 1  
      </div>
      <div className="flex bg-yellow-500 text-black items-center justify-center p-10 m-8 min-w-[200px]">
        DIV 2  
      </div>
      <div className="flex flex-grow bg-green-500 items-center justify-center text-black m-8">
        DIV 3  
      </div>
      <div className="flex flex-shrink bg-orange-500 text-black items-center justify-center p-2 m-8">
        DIV 4  
      </div>
      <div className="flex flex-grow bg-blue-500 text-black items-center justify-center p-2 m-8">
        DIV 5  
      </div>
      <div className="flex bg-purple-500 text-black items-center justify-center p-2 m-8">
        DIV 6  
      </div>
      <div className="flex flex-grow bg-gray-500 text-black items-center justify-center p-2 m-8">
        DIV 7  
      </div>
      <div className="flex bg-lime-500 text-black items-center justify-center p-2 m-8">
        DIV 8  
      </div>
      <div className="flex flex-grow bg-pink-500 text-black items-center justify-center p-2 m-8">
        DIV 9  
      </div>
      <div className="flex flex-grow bg-teal-500 text-black items-center justify-center p-2 m-8">
        DIV 10  
      </div>
    </div>
  </>
  
  )
}

