import React from 'react'
import Marquee from "react-fast-marquee"
import vgp from "../../assets/clients/vgp.png"
import dantech from "../../assets/clients/dantech.png"
import hutch from "../../assets/clients/hutch.png"
import mind from "../../assets/clients/mind.png"
import valeo from "../../assets/clients/valeo.png"

const Marquee_Carousel = () => {
  return (
     <Marquee pauseOnHover>
       <img src={vgp} className='w-60 h-40 mx-20'/>
       <img src={dantech} className='w-60 h-20 mx-20'/>
       <img src={hutch} className='w-40 h-10 mx-20'/>
       <img src={mind} className='bg-black w-60 h-20 mx-20'/>
       <img src={valeo} className='w-60 h-20 mx-20'/>
     </Marquee>
  )
}

export default Marquee_Carousel
