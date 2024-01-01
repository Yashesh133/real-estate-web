import React from 'react'
import { FaPhone, FaVideo } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import { IoIosChatbubbles } from 'react-icons/io'

const Contact = () => {
    return (
        <div className='flex justify-center my-24'>
            <div className='container flex justify-around'>
                <div className='flex-1'>
                    <div className='flex justify-start flex-col'>
                        <span className='text-orange-500 text-[24px] font-medium'>
                            Our Contact Us
                        </span>
                        <span className='text-[#1f3e72] text-[34px] font-semibold'>
                            Easy to contact us
                        </span>
                        <p>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better
                        </p>
                        <div>
                            <div className='flex justify-around my-5'>
                                <div className='border rounded transition-all ease-in-out duration-300 hover:scale-110 p-3'>
                                    <div className='flex gap-3 w-64 items-center'>
                                        <div className='bg-[#eeeeff] p-3'>
                                            <FaPhone className='text-[#4066ff]' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='font-semibold text-[#1f3e72] text-[18px]'>Call</span>
                                            <span className='text-[14px] text-gray-500'>021 122 154 162</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='p-2 bg-[#eeeeff] text-[#4066ff] font-medium w-full rounded my-2 transition-all ease-in-out duration-300 hover:scale-105 hover:bg-[#4066ff] hover:text-white'>Call Now</button>
                                    </div>
                                </div>
                                <div className='border rounded transition-all ease-in-out duration-300 hover:scale-110 p-3'>
                                    <div className='flex gap-3 w-64 items-center'>
                                        <div className='bg-[#eeeeff] p-3'>
                                            <FaPhone className='text-[#4066ff]' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='font-semibold text-[#1f3e72] text-[18px]'>Chat</span>
                                            <span className='text-[14px] text-gray-500'>021 122 154 162</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='p-2 bg-[#eeeeff] text-[#4066ff] font-medium w-full rounded my-2 transition-all ease-in-out duration-300 hover:scale-105 hover:bg-[#4066ff] hover:text-white'>Chat Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-around my-5'>
                                <div className='border rounded transition-all ease-in-out duration-300 hover:scale-110 p-3'>
                                    <div className='flex gap-3 w-64 items-center'>
                                        <div className='bg-[#eeeeff] p-3'>
                                            <FaVideo className='text-[#4066ff]' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='font-semibold text-[#1f3e72] text-[18px]'>Video Call</span>
                                            <span className='text-[14px] text-gray-500'>021 122 154 162</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='p-2 bg-[#eeeeff] text-[#4066ff] font-medium w-full rounded my-2 transition-all ease-in-out duration-300 hover:scale-105 hover:bg-[#4066ff] hover:text-white'>
                                            Video Call Now
                                        </button>
                                    </div>
                                </div>
                                <div className='border rounded transition-all ease-in-out duration-300 hover:scale-110 p-3'>
                                    <div className='flex gap-3 w-64 items-center'>
                                        <div className='bg-[#eeeeff] p-3'>
                                            <AiFillMessage className='text-[#4066ff]' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='font-semibold text-[#1f3e72] text-[18px]'>Message</span>
                                            <span className='text-[14px] text-gray-500'>021 122 154 162</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='p-2 bg-[#eeeeff] text-[#4066ff] font-medium w-full rounded my-2 transition-all ease-in-out duration-300 hover:scale-105 hover:bg-[#4066ff] hover:text-white'>
                                            Message Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <img className='h-[35rem] w-[30rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-gray-300 border-opacity-12'
                        src='./contact.jpg'
                        alt='value' />
                </div>
            </div>
        </div>
    )
}

export default Contact