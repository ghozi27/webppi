import React from 'react'
import Img3 from '../asset/event/IMG_4533.JPG'

const mymodal = ({ visible, onClose }) => {
    if (!visible) return null;
    const handleOnClose2 = () => {
        onClose();
    }

    return (
        <div onClick={handleOnClose2} className='fixed inset-0 backdrop-blur-sm flex justify-center items-center pt-20 md:px-0 px-5'>
            <img src={Img3} alt="" className='shadow-xl w-[70rem]' />
        </div>
    )
}

export default mymodal