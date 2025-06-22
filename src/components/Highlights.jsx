import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(()=>{
    gsap.to('#title',{opacity:1, delay:1.5 , y:0})
    gsap.to('#film',{opacity:1, delay:1.5 , y:0, stagger:0.25})
    
  },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden 
    h-full common-padding bg-zinc'>
      <div className="screen-max-width">


        <div className=' mb-12 w-full items-end justify-between md:flex'>
          <h1 className="section-heading" id='title'>Get The Highlights</h1>
          
          <div className="flex flex-wrap item-end gap-5">
            <p className="link" id='film'>
              watch the film
              <img src={watchImg} alt="watch" className='ml-2' />
            </p>

            <p className="link" id='film'>
              watch the Event
              <img src={rightImg} alt="watch" className='ml-2' />
            </p>
          </div>
        </div>

         
        <VideoCarousel/>

      </div>
       
    </section>
  )
}

export default Highlights
