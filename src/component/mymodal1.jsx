import React from 'react'
import Img2 from '../asset/event/IMG_4458.JPG'

const mymodal = ({ visible, onClose }) => {
    if (!visible) return null;
    const handleOnClose1 = () => {
        onClose();
    }

    return (
        <div onClick={handleOnClose1} className='fixed inset-0 backdrop-blur-sm flex justify-center items-center pt-20 md:px-0 px-5'>
            <img src={Img2} alt="" className='shadow-xl w-[70rem]' />
        </div>
    )
}

export default mymodal