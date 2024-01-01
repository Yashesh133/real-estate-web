import React from 'react'

const Subscribe = () => {
    return (
        <div className='flex justify-center my-24 items-center text-center'>
            <div className='container  w-full'>
                <div className='flex flex-col justify-center items-center bg-[#4161df] rounded  text-center text-white gap-8 p-8'>
                    <h2 className='text-[28px] font-semibold'>Get started with Homyz</h2>
                    <p className='text-[14px] font-normal text-[#ffffff96]'>
                        Subscribe and find super attractive price quotes from us. <br />
                        Find your residence soon
                    </p>
                    <button className='rounded-xl py-2 px-4 border border-white bg-[#5a73d7] transition-all ease-in-out duration-300 hover:scale-110'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe 