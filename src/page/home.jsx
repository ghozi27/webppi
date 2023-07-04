import React from 'react'
import Tomer from '../asset/img/tomer.JPG';
import { Carousel } from '@material-tailwind/react';
import Ind from '../asset/img/img1.JPG';
import Ldk from '../asset/img/ldk1.jpg';


const home = () => {
  return (
    <div className='d-block'>
      <Carousel className='pt-23 '>
        <img className='w-full bg-cover' src={Ldk} alt="" />
        <img className='w-full bg-cover' src={Ind} alt="" />
        <img className='w-full bg-cover' src={Tomer} alt="" />
      </Carousel>
    </div>
    // <div >
    //   <div>
    //     <img className="w-full h-48 object-cover" src={Ind} alt="" />
    //   </div>
    //   <div>
    //     <img  src={Ldk} alt="" />
    //   </div>
    // </div>
  )
}

export default home