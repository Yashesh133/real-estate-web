import React from 'react';
import data from '../utils/slider.json';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import the Swiper styles you need
import 'swiper/css/bundle';

const Residents = () => {
    return (
        <div className='flex justify-center items-center my-7'>
            <div className='container w-full'>
                <div className='p-4'>
                    <span className='text-orange-500 text-[24px]'>Best Choices</span>
                    <h2 className='text-[#1f3e72] text-[34px]'>Popular Residencies</h2>
                </div>
                <div>
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={4}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index} className='hover:bg-gradient-to-b from-transparent to-[rgba(136,160,255,0.46)] rounded'>
                                <div className='flex justify-center items-center flex-col gap-7 p-4'>
                                    <div>
                                        <img src={item.image} alt='residentImage' />
                                    </div>
                                    <div>
                                        <div>
                                            <span className='text-orange-500 text-[24px]'>$</span>
                                            <span className='text-[#1f3e72] text-[24px] font-semibold'>{item.price}</span>
                                        </div>
                                        <div>
                                            <h2 className='text-[#1f3e72] text-[30px] font-semibold'>{item.name}</h2>
                                            <p>{item.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Residents;
