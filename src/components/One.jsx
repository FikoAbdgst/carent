import React from 'react'
import Terios from '../../public/Terios.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../App.css'
import { faArrowRight, faCar, faLocationDot, faVanShuttle } from '@fortawesome/free-solid-svg-icons'

const One = () => {
    return (
        <>
            <div className='w-full h-screen'>
                <div className='w-full max-sm:h-4/5 sm:h-4/5 bg-zinc-100 flex items-center relative z-20'>
                    <div className='max-sm:w-4/5 sm:w-45% max-sm:ml-10 sm:ml-14 md:ml-16 max-sm:mt-2 sm:mt-12  md:mt-20 z-50'>
                        <h1 className='max-sm:text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold'>Pilihan yang <span className='text-amber-500' > Terbaik </span> untuk</h1>
                        <h1 className='max-sm:text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold'> Setiap <span className='text-amber-500' >Perjalanan</span>.</h1>
                        <div className='max-sm:w-10 sm:w-10 md:w-12 lg:w-14 max-sm:h-1  sm:h-1 md:h-1 lg:h-2 bg-amber-500 rounded-lg my-1'></div>
                        <p className='max-sm:text-2xs  sm:text-3xs md:text-2xs lg:text-xs xl:text-sm max-sm:my-2 sm:my-3 md:my-5'>Temukan kemudahan dalam menyewa mobil dengan layanan kami yang cepat, mudah, dan terpercaya. </p>
                        {/* Pilihan kendaraan lengkap untuk setiap kebutuhan perjalanan Anda, dari liburan keluarga hingga perjalanan bisnis. */}
                        <button className=' flex justify-center items-center bg-green-500 text-white font-medium transition-all duration-150 border-b-green-800  hover:bg-green-700
                        max-sm:text-xs sm:text-3xs md:text-2xs lg:text-sm xl:text-base
                        max-sm:gap-2 sm:gap-1 md:gap-2
                        sm:mt-2 md:mt-2 lg:mt-4
                        max-lg:ml-0 lg:ml-2
                        max-sm:p-2 sm:p-2 md:p-2 lg:p-3 xl:p-4
                        max-sm:rounded-lg sm:rounded-md md:rounded-lg lg:rounded-xl
                        max-sm:border-b-2 sm:border-b-2 md:border-b-4
                        max-sm:hover:border-b-0 sm:hover:border-b-0 md:hover:border-b-2 '>
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <p className=''>Whatsapp</p>
                        </button>
                    </div>
                    <div className=' bg-gradient-to-b from-amber-400 to-amber-600 absolute
                    max-sm:w-1/2 sm:w-1/5 md:w-1/4 lg:w-1/4 xl:w-30%
                    max-sm:h-full sm:h-full md:h-90% lg:h-full xl:h-full
                    max-md:rounded-t-lg md:rounded-t-2xl
                    max-md:rounded-b-md md:rounded-b-md
                    max-sm:top-20 sm:top-12 md:top-20
                    max-sm:-right-20 sm:right-20 md:right-20 lg:right-28  xl:right-28'></div>
                    <div className='absolute 
                    max-sm:top-80 sm:top-24 md:top-28 lg:top-32 xl:top-36
                    max-sm:-right-100 sm:-right-84 md:-right-60 lg:-right-32 xl:right-0 z-50 '>
                        <img src={Terios} className='
                        max-sm:w-1/2 sm:w-2/5 md:w-3/5 lg:w-3/4 xl:w-full
                        max-sm:h-1/2 sm:h-2/5 md:h-3/5 lg:h-3/4 xl:h-full ' />
                    </div>
                </div>
                {/* list service */}
                <div className='w-full h-auto flex justify-center items-center z-40 relative max-sm:-mt-7 sm:-mt-5 md:-mt-6  lg:-mt-8  xl:-mt-10 bg-transparent  ' >
                    <div className='w-auto  flex justify-center items-center font-medium  max-sm:shadow-xl sm:shadow-xl bg-white
                                max-sm:rounded-md  sm:rounded-lg  lg:rounded-xl
                                max-sm:p-3 sm:p-2 md:p-3 lg:p-3 xl:p-5
                                max-sm:gap-4 sm:gap-4 md:gap-8
                                max-sm:text-2xs sm:text-3xs md:text-2xs lg:text-sm xl:text-base '>

                        <p><FontAwesomeIcon icon={faCar} /> Car Rent </p>
                        <p><FontAwesomeIcon icon={faLocationDot} /> Tour & Travel </p>
                        <p><FontAwesomeIcon icon={faVanShuttle} /> Kunjungan Industri </p>
                        <a href='#'><button className='bg-amber-400 max-sm:px-3 sm:px-5 max-sm:py-2 sm:py-2 max-sm:rounded-sm sm:rounded-lg'> Lainnya <FontAwesomeIcon icon={faArrowRight} /> </button></a>

                    </div>
                </div>

            </div>

        </>
    )
}

export default One