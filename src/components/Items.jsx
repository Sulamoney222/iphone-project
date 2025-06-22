import React, { useEffect } from 'react'
import { UseGlobalContext } from '../Context/Context'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Items = () => {
    const {cart,remove,decrease, increase} = UseGlobalContext()

    useEffect(()=>{
      AOS.init({
        duration : 2000,
        once:true
      })
    }, [])
  return (
    <>
      
      <div className=" sm:px-15  lg:px-10">
          
      
        <div className="">
        {
            cart.map((carts)=>{
                const {id, title, price,amount,img} = carts
                return(
                    <div className=" flex justify-between max-md:p-5 p-10" key={id}>
                      

                       <div 
                       data-aos="zoom-in-right" 
                       data-aos-duration="1000" 
                       data-aos-delay="200" 
                       data-aos-offset="200"
                       data-aos-easing="ease-in-out"
                       className="flex gap-4">
                            <img src={img} height={10} width={60}  />

                           <div className="">
                           <h2>{title}</h2>
                           <h2>${price}</h2>
                          <button 
                          onClick={()=>remove(id)}
                          className=' text-red-600 text-sm rounded hover:scale-95 hover:text-red-400 active:scale-75 transition-transform duration-150'>remove</button>
                           </div>
                        </div>

                        <div 
                        data-aos = 'fade-down'
                        className=" flex flex-col items-center gap-2">
                          <button
                          className=''
                          onClick={()=>increase(id)}
                          ><ArrowCircleUpIcon/></button>
                           <h2 className='font-bold'>{amount}</h2>

                           <button
                           onClick={()=>decrease(id)}
                           ><ArrowCircleDownIcon/>
                           </button>
                        </div>

                       
                    </div>
                )
            })
        }
    </div>
   
     

      </div>
    
    </>
  )
}

export default Items
