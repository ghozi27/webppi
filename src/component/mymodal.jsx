import React from 'react'
import Img1 from '../asset/event/IMG_4417.JPG'


const mymodal = ({ visible, onClose }) => {
    if (!visible) return null;
    const handleOnClose = () => {
        onClose();
    }

    return (
        <div onClick={handleOnClose} className='fixed inset-0 backdrop-blur-sm flex justify-center items-center pt-20 md:px-0 px-5'>
            <img src={Img1} alt="" className='shadow-xl w-[70rem]' />
        </div>
    )
}

export default mymodal