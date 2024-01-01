import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-center p-4'>
            <div className='container flex justify-between text-white items-center'>
                <div>
                    <img width={"100px"} src='./logo.png' alt='logo' />
                </div>
                <div className='gap-4'>
                    <span className='p-4 text-gray-400 cursor-pointer'>Residencies</span>
                    <span className='p-4 text-gray-400 cursor-pointer'>Our Value</span>
                    <span className='p-4 text-gray-400 cursor-pointer'>Contact Us</span>
                    <span className='p-4 text-gray-400 cursor-pointer'>Get Started</span>
                    <button className='py-2 px-5 bg-blue-600 rounded transition-all ease-in-out duration-200 hover:scale-105' >Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Header