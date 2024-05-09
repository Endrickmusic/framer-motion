import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"

import './index.css'

import Experience from "./Experience"


export default function App() {

 return (

  <>
    <div className="flex flex-wrap bg-gray-900 text-white h-full text-xl">

      <div className="flex flex-grow flex-wrap bg-white text-black items-center m-8 p-8">
        DIV 1
        <div className="flex bg-red-500 items-center justify-center m-4 p-4 w-full">
        DIV 1.1 
        </div>

        <div className="flex flew-grow bg-yellow-500 items-center justify-center m-4 p-4 w-full">
        DIV 1.2 
        </div>

        <div className="flex flew-grow bg-blue-500 items-center justify-center m-4 p-4 w-full">
        DIV 1.3 
        </div>

        <div className="flex bg-green-500 items-center justify-center m-4 p-4 w-full">
        DIV 1.4 
        </div>
      </div>

      <div className="flex flex-wrap bg-yellow-500 text-black items-center p-10 m-8 min-w-[100px]">
        DIV 2  
        <div className="flex bg-teal-500 items-center justify-center m-4 p-4 w-full">
        DIV 2.1 
        </div>

        <div className="flex flew-grow bg-white items-center justify-center m-4 p-4 w-full">
        DIV 2.2 
        </div>

        <div className="flex flew-grow bg-pink-500 items-center justify-center m-4 p-4 w-full min-h-[100px]">
        DIV 2.3 
        </div>
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
        <div className="flex flew-grow bg-yellow-500 items-center justify-center m-4 p-4 h-full">
        DIV 7.1 
        </div>

        <div className="flex flew-grow bg-blue-500 items-center justify-center m-4 p-4 h-full">
        DIV 7.2 
        </div>

        <div className="flex bg-green-500 items-center justify-center m-4 p-4 h-full">
        DIV 7.3 
        </div>
      </div>
      <div className="flex bg-lime-500 text-black items-center justify-center p-2 m-8">
        DIV 8  
      </div>
      <div className="flex flex-grow bg-pink-500 text-black items-center justify-center p-2 m-8">
        DIV 9  
      </div>
      <div className="flex flex-grow bg-teal-500 text-black items-center justify-center p-2 m-8">
        DIV 10  
        <div className="flex flew-grow bg-yellow-500 items-center justify-center m-4 p-4 h-full">
        DIV 10.1 
        </div>

        <div className="flex flew-grow bg-blue-500 items-center justify-center m-4 p-4 h-full">
        DIV 10.2 
        </div>

        <div className="flex bg-green-500 items-center justify-center m-4 p-4 h-full">
        DIV 10.3 
        </div>
      </div>
    </div>
  </>
  
  )
}

