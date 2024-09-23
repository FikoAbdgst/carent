import React from 'react'
import Satu from '../../public/1.jpg'
import Dua from '../../public/2.jpg'
import Tiga from '../../public/3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Three = () => {
    return (
        <>
            <div className='w-full h-screen flex justify-start items-center'>
                <div className='flex justify-center items-center rounded-3xl z-10 border-8 border-black ml-28 '>
                    <img src={Tiga} alt="tiga" className='w-68 h-128 rounded-l-2xl' />
                    <div>
                        <img src={Dua} alt="dua" className='w-44 h-64 rounded-tr-2xl' />
                        <img src={Satu} alt="satu" className='w-44 h-64 rounded-br-2xl ' />
                    </div>
                </div>
                <div className='w-full flex justify-center items-center absolute z-0'>
                    <div className='w-90% flex rounded-3xl bg-gradient-to-b from-amber-600 to-amber-500 p-10 shadow-2xl shadow-zinc-400'>
                        <div className='w-1/2'></div>
                        <div className='w-1/2'>
                            <p className='text-3xl font-semibold text-zinc-200'>Pilihan Terbaik Rental Mobil Anda</p>
                            <p className='text-sm text-zinc-300 mt-5'>Kami adalah perusahaan rental mobil yang berdedikasi untuk memberikan layanan berkualitas tinggi kepada pelanggan. Dengan armada yang lengkap dan beragam, mulai dari mobil ekonomi hingga bus besar, kami siap melayani perjalanan Anda dengan nyaman dan aman.</p>
                            <div className='w-full mt-5 gap-5'>
                                <div className='flex w-full'>
                                    <div className='w-1/4 flex justify-center items-center'>
                                        <p className='text-md font-bold text-zinc-600'>Hubungi Kami : </p>
                                    </div>

                                    <div className='w-auto flex gap-5 ml-10 flex-col text-zinc-600'>
                                        <div className='flex justify-start items-center rounded-xl gap-4 bg-zinc-200 p-6'>
                                            <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6' />
                                            <div>
                                                <p className='text-2xs'>Email</p>
                                                <p className='text-sm font-bold'>mdjayamandirigroup@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-start items-center rounded-xl gap-4 bg-zinc-200 p-6'>
                                            <FontAwesomeIcon icon={faPhone} className='w-6 h-6' />
                                            <div>
                                                <p className='text-2xs'>No Telp</p>
                                                <p className='text-sm font-bold'>+62 823-1648-6533</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Three