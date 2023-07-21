import React, { useState } from 'react';
import MyModal from '../component/mymodal';
import MyModal1 from '../component/mymodal1';
import MyModal2 from '../component/mymodal2';
import Background from '../asset/img/background.jpg';

import Img1 from '../asset/event/IMG_4417.JPG';
import Img2 from '../asset/event/IMG_4458.JPG';
import Img3 from '../asset/event/IMG_4533.JPG';

// import Img1 from '../asset/foto-kabinet/medkraf/andin.JPG'

const Gallery = () => {
  const [showModal, showMyModal] = useState(false);
  const [showModal1, showMyModal1] = useState(false);
  const [showModal2, showMyModal2] = useState(false);
 

  const handleOnClose = () => showMyModal(false)
  const handleOnClose1 = () => showMyModal1(false)
  const handleOnClose2 = () => showMyModal2(false)
 

  return (
    <div className='pt-24 h-[300rem]' style={{
      backgroundImage: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <h1 className='text-center text-5xl font-extrabold text-white py-10'>
        Konjen Cup
      </h1>
      <div className="grid justify-center grid-cols-3 gap-3 px-10">
        <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl'>
          <img onClick={() => showMyModal(true)} src={Img1} alt="" onclick="showModal('Img1')" className='rounded-xl' />
        </button>
        <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl'>
          <img onClick={() => showMyModal1(true)} src={Img2} alt="" onclick="showModal('Img2')" className='rounded-xl' />
        </button>
        <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl'>
          <img onClick={() => showMyModal2(true)} src={Img3} alt="" onclick="showModal('Img3')" className='rounded-xl' />
        </button>
        
      </div>
      <MyModal onClose={handleOnClose} visible={showModal}/>
      <MyModal1 onClose={handleOnClose1} visible={showModal1}/>
      <MyModal2 onClose={handleOnClose2} visible={showModal2}/>
    </div>
  )
}

export default Gallery