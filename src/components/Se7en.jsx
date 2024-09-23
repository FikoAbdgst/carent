import React from 'react'
import HianceCommuter from '../../public/Hiace_Commuter.png';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Se7en = () => {
    return (
        <>
            <div className='w-full h-1/2screen flex justify-center items-center bg-amber-500'>
                <div className='w-3/5 flex flex-col justify-start items-start p-20'>
                    <p className='text-2xl font-semibold'>Hubungi Kami Sekarang, Pilih Dan Segera Pesan Mobil Anda</p>
                    <button className=' flex justify-center items-center bg-green-500 text-white font-medium transition-all duration-150 border-b-green-700  hover:bg-green-600
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
                <div className='w-2/5 flex justify-center items-center'>
                    <img src={HianceCommuter} alt="Hiance" className='w-72 h-40' />
                </div>
            </div>
        </>
    )
}

export default Se7en