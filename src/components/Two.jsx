import { faCalendarCheck, faClock, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Two = () => {
    return (
        <div className='w-full max-sm:h-1/2screen  sm:h-3/4screen bg-transparent flex justify-center items-center flex-col '>
            <p className='text-center font-bold max-sm:ml-5 sm:ml-10 mt-10 max-sm:text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Why Choose Us?</p>
            <div className='w-full h-full flex justify-center items-center max-sm:gap-6 sm:gap-20 text-center max-sm:px-8 sm:px-28  md:px-28 lg:px-40'>
                <div className='flex justify-center items-center flex-col '>
                    <FontAwesomeIcon icon={faCalendarCheck} className='shadow-md shadow-zinc-400  text-amber-600 border-white bg-zinc-200 
                    max-lg:border-2  lg:border-4  xl:border-4
                    max-sm:p-2 sm:p-2 md:p-3 lg:p-4 xl:p-4 
                    max-sm:rounded-md sm:rounded-lg md:rounded-lg lg:rounded-xl xl:rounded-xl
                    max-sm:w-6 sm:w-3 md:w-4 lg:w-5 xl:w-8
                    max-sm:h-6 sm:h-3 md:h-4 lg:h-5 xl:h-8  ' />
                    <p className='mt-4 max-sm:font-semibold sm:font-semibold max-sm:text-2xs sm:text-2xs md:text-xs lg:text-base xl:text-lg'>Easy Booking</p>
                    <p className='mt-3 max-sm:text-4xs sm:text-4xs md:text-3xs lg:text-2xs xl:text-xs text-gray-500 '>
                        Book your car anytime with a simple and user-friendly process. We make it quick and convenient for you.
                    </p>
                </div>
                <div className='flex justify-center items-center flex-col '>
                    <FontAwesomeIcon icon={faSackDollar} className='shadow-md shadow-zinc-400  text-white bg-gradient-to-b from-amber-600 to-amber-500
                    max-sm:p-2 sm:p-2 md:p-3 lg:p-4 xl:p-4 
                    max-sm:rounded-md sm:rounded-lg md:rounded-lg lg:rounded-xl xl:rounded-xl
                    max-sm:w-6 sm:w-3 md:w-4 lg:w-5 xl:w-8
                    max-sm:h-6 sm:h-3 md:h-4 lg:h-5 xl:h-8  ' />
                    <p className='mt-4 max-sm:font-semibold sm:font-semibold max-sm:text-2xs sm:text-2xs md:text-xs lg:text-base xl:text-lg'>Best Price</p>
                    <p className='mt-3 max-sm:text-4xs sm:text-4xs md:text-3xs lg:text-2xs xl:text-xs text-gray-500 '>
                        We offer competitive prices to ensure you get the best deal without compromising quality.
                    </p>
                </div>
                <div className='flex justify-center items-center flex-col '>
                    <FontAwesomeIcon icon={faClock} className='shadow-md shadow-zinc-400  text-amber-600 border-white bg-zinc-200 
                    max-lg:border-2 lg:border-4  xl:border-4
                    max-sm:p-2 sm:p-2 md:p-3 lg:p-4 xl:p-4 
                    max-sm:rounded-md sm:rounded-lg md:rounded-lg lg:rounded-xl xl:rounded-xl
                    max-sm:w-6 sm:w-3 md:w-4 lg:w-5 xl:w-8
                    max-sm:h-6 sm:h-3 md:h-4 lg:h-5 xl:h-8' />
                    <p className='mt-4 max-sm:font-semibold sm:font-semibold max-sm:text-2xs sm:text-2xs md:text-xs lg:text-base xl:text-lg'>24/7 service</p>
                    <p className='mt-3 max-sm:text-4xs sm:text-4xs md:text-3xs lg:text-2xs xl:text-xs text-gray-500 '>
                        Our customer support team is available 24/7 to assist you with any inquiries or concerns.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Two