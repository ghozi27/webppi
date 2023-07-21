import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';
import img from '../asset/img/logo2.PNG';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";


const Layout = () => {

  let [isOpen, setisOpen] = useState(false);


  return (
    <>
      <div>
        <header className=' relative z-20'>
          <nav className='fixed bg-black w-full shadow-xl'>
            <div className='md:flex items-center justify-between py-4 px-8'>
              <div className='flex justify-between items-center'>
                <div>
                  <img className='w-32' src={img} alt="" />
                </div>
                <div onClick={() => setisOpen(!isOpen)} className='md:hidden cursor-pointer'>
                  {
                    isOpen ?
                      <HiOutlineX size="3em" color='white' />
                      :
                      <HiMenuAlt3 size="3em" color='white' />
                  }
                </div>
              </div>
              <div>
                <ul
                  className={`md:flex md:items-center absolute md:static md:z-auto 
                              z-[-1] left-0 md:pl-0 pl-16 bg-black w-full gap-5 text-white 
                              transition-all duration-500 ease-in ${isOpen ? 'top-14' : 'top-[-490px]'}`}>
                  {

                    <li className='font-semibold md:my-0 my-8 hover:bg-white py-2 md:px-3 px-3 rounded-md hover:text-black'>
                      <Link to='/'>Home</Link>
                    </li>

                  }
                  {
                    <li className='font-semibold md:my-0 my-8  hover:bg-white py-2 md:px-3 px-3 rounded-md hover:text-black'>
                      <Link to='/gallery'>Gallery</Link>
                    </li>
                  }
                  {
                    <li className='font-semibold md:my-0 my-8  hover:bg-white py-2 md:px-3 px-3 rounded-md hover:text-black'>
                      <Link to='/aboutus'>About Us</Link>
                    </li>
                  }
                  {
                    <li className='font-semibold md:my-0 my-8  hover:bg-white py-2 md:px-3 px-3 rounded-md hover:text-black'>
                      <Link to='/contact'>Contact</Link>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </nav>

        </header>
        <Outlet />
      </div>
    </>
  )
}

export default Layout