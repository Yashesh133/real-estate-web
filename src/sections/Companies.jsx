import React from 'react'

const Companies = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='container w-full'>
                    <div className='flex justify-around mx-auto gap-4 items-center p-8 l flex-wrap'>
                        <img className='w-[180px] h-[100px] object-contain overflow-clip' src='./prologis.png' alt='' />
                        <img className='w-[180px] h-[100px] object-contain overflow-clip' src='./tower.png' alt='' />
                        <img className='w-[180px] h-[100px] object-contain overflow-clip' src='./equinix.png' alt='' />
                        <img className='w-[180px] h-[100px] object-contain overflow-clip' src='./realty.png' alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Companies