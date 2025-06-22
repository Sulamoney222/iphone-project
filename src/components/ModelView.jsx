import React, { useEffect } from 'react'
import Items from './Items'
import { UseGlobalContext } from '../Context/Context'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ModelView = () => {
    
  const {loading, total, cart, clearItem} = UseGlobalContext()

  useEffect(()=>{
         AOS.init({
          duration: 2000,
          once: true
         })
  },[])

  if(cart.length === 0){
    return ( 
      <div className="w-full flex  justify-center">
        <h2>Empty!</h2>
        
      </div>
    )
  }

  return (
   <>
   <div className=" flex justify-center flex-col">
    <Items/>
    
    <div 
    data-aos='fade-up'
    className=" w-full gap-4 flex justify-center items-center flex-col">
       <div className="">
       <h2 className='font-bold sm:text-2xl'>$ {total}</h2>
       </div>
    <button
    className='bg-white w-40 shadow-md shadow-white text-black px-6 py-2 capitalize rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300'
   onClick={clearItem}
   >Clear Items</button>
    </div>
   </div>
   
   </>
  )
}

export default ModelView
