import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center my-3'>
            <div className='container flex justify-between'>
                <div>
                    <img className='w-[120px]' src='logo2.png' alt='logo2' />
                    <span >Our vision is to make all people <br />
                        the best place to live for them.</span>
                </div>
                <div className='flex  flex-col justify-center'>
                    <span className='text-[2rem] text-[#1f3e72] font-bold'>Information</span>
                    <span className='text-[.9rem] text-[#8c8b8b]'>145 New York, FL 5467, USA</span>
                    <div className='mt-6 gap-6 font-medium flex justify-center items-center flex-wrap'>
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer