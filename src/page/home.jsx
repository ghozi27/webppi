import React from 'react'
import Tomer from '../asset/img/tomer.JPG';
import { Carousel, Typography } from '@material-tailwind/react';
import Ind from '../asset/img/img1.JPG';
import Ldk from '../asset/img/ldk2.jpg';
import Univ from '../asset/img/univ.jpg';
import Background from '../asset/img/background.jpg';


const home = () => {
  return (
    <div className='grid grid-cols-1 pt-20'>
      <div className='md:h-1/3 h-1/4'>
        <Carousel className='shadow-xl'>
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
                  className="mb-9 md:text-7xl text-3xl">
                  <p>
                    Welcome
                  </p>
                  Hoş Geldiniz
                </Typography>
                <Typography
                  variant=""
                  color="white"
                  className="sm:mb-2 mb-12 text-sm md:text-sm lg:text-3xl opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis et cum dolores illum eveniet, minima totam magnam neque ea impedit aliquam eum quam? Odio facilis autem quas deserunt necessitatibus!
                </Typography>
              </div>
            </div>
          </div>
          <div className='relative h-full w-full'>
            <img
              src={Ind}
              alt=""
              className='h-full w-full object-cover object-bottom ' />
            <div className='absolute inset-0 grid h-full w-full items-end bg-black/50'>
              <div className='w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-9 md:text-7xl text-3xl">
                  Endonezya Günü
                </Typography>
                <Typography
                  variant=""
                  color="white"
                  className="sm:mb-2 mb-12 text-sm md:text-sm lg:text-3xl opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae incidunt, molestias tempore sint laboriosam autem saepe asperiores quo omnis, odio cumque. Fugit nobis placeat eveniet provident laborum, odio odit doloremque!
                </Typography>
              </div>
            </div>
          </div>
          <div className='relative h-full w-full'>
            <img
              src={Tomer}
              alt=""
              className='h-full w-full object-cover object-top ' />
            <div className='absolute inset-0 grid h-full w-full items-end bg-black/50'>
              <div className='w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-9 md:text-7xl text-3xl">
                  Tömer
                  <p>
                    Kırklareli Üniversitesi
                  </p>
                </Typography>
                <Typography
                  variant=""
                  color="white"
                  className="sm:mb-2 mb-12 text-sm md:text-sm lg:text-3xl opacity-80">
                  Alamat: Karacaibrahim, Meşe Sk. No:3, 39000 Kırklareli Merkez/Kırklareli
                  <p>
                    Telepon: (0288) 214 50 51
                  </p>
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
        {/* content section */}
        <div className='py-40' style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <div className='grid md:grid-cols-2 content-center container mx-auto h-screen'>
            <div className=''>
              <img src={Univ} alt="" className='rounded-xl md:h-[40rem] w-[30rem] object-cover mx-auto shadow-xl' />
            </div>
            <div className='grid grid-cols-1 md:pt-0 pt-10'>
              <h1 className='text-8xl md:text-left text-center text-white font-bold pt-0'>
                <p>
                  Kırklareli
                </p>
                Üniversitesi
              </h1>
              <h2 className='py-10 md:text-left text-center text-lg text-white'>
                The Kırklareli University was founded at 2007 under the administration of the Trakya University Rectorate Enver Duran. The university is based on a strong background of the Faculty of Engineering, built at 1992.
                The university has four faculties, two institutes, seven vocational schools and a school of health, with nearly 10,000 students, more than 300 academic and 200 administrative staff.
                The university is a member of the Balkan Universities Network.
              </h2>
              <div className='mx-auto md:ml-0'>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10  rounded">
                  <a href='https://www.klu.edu.tr' className='text-3xl'>
                    Visit Site
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* content section */}
      </div>
    </div>
  )
}

export default home