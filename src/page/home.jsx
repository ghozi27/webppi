import React from 'react'
import Tomer from '../asset/img/tomer.JPG';
import { Carousel, Typography } from '@material-tailwind/react';
import Ind from '../asset/img/img1.JPG';
import Ldk from '../asset/img/ldk2.jpg';
import Univ from '../asset/img/univ.jpg';

const home = () => {
  return (
    <div className='grid grid-cols-1 pt-20'>
      <div className='h-2/5'>
        <Carousel>
          <div className='relative h-full w-full'>
            <img
              src={Ldk}
              alt=""
              className='h-full w-full object-cover object-bottom ' />
            <div className='absolute inset-0 grid h-full w-full items-end bg-black/50'>
              <div className='w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
                <Typography
                  variant="h1"
                  color="white"
                  className="sm:mb-2 mb-9 text-3xl md:text-4xl lg:text-5xl">
                  <p>
                    Welcome
                  </p>
                  Hoş Geldiniz
                </Typography>
                <Typography
                  variant=""
                  color="white"
                  className="sm:mb-2 mb-12 text-sm md:text-sm lg:text-3xl opacity-80">
                  Indonesian's Student Association in Kırklareli Community Organization
                  <p>
                    • Perhimpunan Pelajar Indonesia Kırklareli.
                  </p>
                  <p>
                    • Indonesian's Student Association in Kırklareli
                  </p>
                  <p>
                    • Kırklarelinde Endonezyalı Öğrenciler Topluluğu.
                  </p>
                </Typography>
              </div>
            </div>
          </div>
          <img
            src={Ind}
            alt=""
            className='h-full w-full object-cover object-top ' />
          <img
            src={Tomer}
            alt=""
            className='h-full w-full object-cover object-top ' />
        </Carousel>
        <div className='grid grid-cols-2 justify-items-center bg-black text-white'>
          <div className=''>
            <div className='py-10 px-20'>
              <img
                src={Univ}
                alt=""
                className='h-96 w-80 object-cover' />
            </div>
          </div>
          <div>
            <h1 className='text-5xl font-bold text-left py-10'>
              <p >
                Kırklareli
              </p>
              üniversitesi</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home