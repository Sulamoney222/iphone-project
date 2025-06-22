import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {appleImg,searchImg, bagImg} from '../utils'
import ModelView from './ModelView'
import { UseGlobalContext } from '../Context/Context'

const Model = () => {
    const [setsize, setSetSize]= useState('small')


    //scrolling EWffects
    useEffect(()=>{
      AOS.init({
        duration : 2000,
        once: true
      })
    }, [])

    const {totalAmount, clearItems} = UseGlobalContext()
    useGSAP(()=>{
   gsap.to('#heading', {y:0, opacity: 1})
    }, [])
  return (
   <section 
   className="common-padding">
    <div 
    data-aos = 'zoom-in'
    className="screen-max-width flex justify-between" >
        <h1 id='heading' className='section-heading'>
        iPhone Collections
        </h1>


        <div className="flex flex-col items-center mt-5">
            <div className="w-full pr-5 h-[10vh] md:h-[10vh] overflow-hidden relative">
           <img 
           className='w-5 lg:w-10  md:w-7'
           src={bagImg} alt="bag"  />
           <span
           className='absolute top-1 bg-red-600 p-1 max-sm:p-0.5 rounded-3xl text-center text-bold'
           >{totalAmount}</span>
            </div>
        </div>

        
    </div>

    <div className="">
        <ModelView/>
    </div>

   </section>
  )
}

export default Model
