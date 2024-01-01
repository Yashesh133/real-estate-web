import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import data from '../utils/accordion'
import { MdOutlineArrowDropDown } from 'react-icons/md'

const Values = () => {
    return (
        <div className='flex justify-center my-24'>
            <div className='container flex justify-around'>
                <div className='flex-1'>
                    <img className='h-[40rem] w-[30rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-gray-300 border-opacity-12'
                        src='./value.png'
                        alt='value' />
                </div>
                <div className='flex-1'>
                    <div className='flex flex-col'>
                        <span className='text-orange-500 text-[24px] font-medium'>
                            Our Value
                        </span>
                        <span className='text-[#1f3e72] text-[34px] font-semibold'>
                            Value We Give to You
                        </span>
                        <p>We always ready to help by providijng the best services for you. <br />
                            We beleive a good blace to live can make your life better
                        </p>
                        <Accordion allowMultipleExpanded={false} preExpanded={[0]} className='w-auto'>
                            {data.map((item, index) => (
                                <AccordionItem key={index} uuid={index} className='bg-white my-4 rounded border p-4 shadow-sm md:shadow-md lg:shadow-lg xl:shadow-xl 2xl:shadow-2xl ring-[#eeeeff]'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flex justify-between gap-5 items-center'>
                                            <div className='bg-[#eeeeff] p-3'>
                                                <span>
                                                    {item.icon}
                                                </span>
                                            </div>
                                            <span >{item.heading}</span>
                                            <div className='bg-[#eeeeff] p-3'>
                                                <MdOutlineArrowDropDown className='text-[#4066ff]' size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className='my-2'>
                                        <p>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values