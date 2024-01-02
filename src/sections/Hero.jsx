import React from 'react'
import Header from '../Components/Header'
import { FaLocationArrow } from "react-icons/fa";
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <>
            <div className=' bg-[#131110] relative z-0 '>
                <div className='absolute w-80 h-80 bg-white rounded-[100px] blur-[150px] left-6 top-3 -z-10' />
                <Header />
                <div className='w-full flex justify-center -z-10'>
                    <div className='container flex justify-center flex-col'>
                        <div className='flex justify-around flex-wrap m-5'>
                            <div className='flex justify-center flex-col p-20 text-white gap-12'>
                                <div className='relative font-semibold text-[3.8rem] leading-[4rem]'>
                                    <div className='h-16 w-16 bg-gradient-to-l from-yellow-400 to-orange-500 rounded-full absolute top-[-7%] right-[30%] blur-sm -z-10' />
                                    <h1>Discover <br />
                                        Most Suitable <br />
                                        Property</h1>
                                </div>
                                <div className='text-gray-300 flex flex-col'>
                                    <span>Find a variety of properties that suit you very easilty</span>
                                    <span>Forget all difficulties in finding a residence for you</span>
                                </div>
                                <div className='max-w-[400px]'>
                                    <form>
                                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                        <div class="relative">
                                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <FaLocationArrow className='text-blue-700' />
                                            </div>
                                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                        </div>
                                    </form>
                                </div>
                                <div className=' flex md:justify-between flex-wrap text-center items-center gap-5 justify-center'>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div>
                                            <CountUp className='text-3xl pr-1' start={8500} duration={2} end={9000} />
                                            <span className='text-yellow-400 text-3xl'>+</span>
                                        </div>
                                        <span>Premium Product</span>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div>
                                            <CountUp className='text-3xl pr-1' start={0} duration={2} end={2000} />
                                            <span className='text-yellow-400 text-3xl'>+</span>
                                        </div>
                                        <span>Happy Customer</span>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div>
                                            <CountUp className='text-3xl pr-1' start={0} duration={2} end={28} />
                                            <span className='text-yellow-400 text-3xl'>+</span>
                                        </div>
                                        <span>Awards Winning</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='h-[35rem] w-[28rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-gray-500 border-opacity-12'
                                    src='./hero-image.png'
                                    alt='hero-img' />
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Hero