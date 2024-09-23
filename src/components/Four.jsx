import { faBusSimple, faCar, faDoorOpen, faHandsPraying, faHeart, faLocationDot, faMountainSun, faPlaneDeparture, faVanShuttle, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Four = () => {
    const SampleNextArrow = (props) => {
        return (
            <div
                onClick={props.onClick}
                className="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full absolute top-5 -right-20 text-black opacity-40 max-sm:text-lg sm:text-xl md:text-3xl hover:text-black"
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        );
    }

    const SamplePrevArrow = (props) => {
        return (
            <div
                onClick={props.onClick}
                className="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full absolute top-5 -left-20 text-black opacity-40 max-sm:text-lg sm:text-xl md:text-3xl hover:text-black"
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };

    return (
        <div className='w-full h-1/4screen flex flex-col justify-center items-center relative'>
            <p className='text-3xl font-semibold'>Fasility</p>
            <div className='w-full h-full flex justify-center items-center'>
                <Slider {...settings} className="w-4/5 ">
                    <div className='flex justify-center items-center p-2 '>
                        <div className='flex justify-center items-center gap-3 rounded-lg p-4 bg-zinc-200 shadow-md shadow-zinc-400 '>
                            <FontAwesomeIcon className='w-5 h-5 bg-white rounded-lg shadow-md shadow-zinc-500 p-2' icon={faCar} />
                            <p className='text-base font-medium'>Car Rent</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-2 '>
                        <div className='flex justify-center items-center gap-3 rounded-lg p-4 bg-zinc-200 shadow-md shadow-zinc-400 '>
                            <FontAwesomeIcon className='w-5 h-5 bg-white rounded-lg shadow-md shadow-zinc-500 p-2' icon={faLocationDot} />
                            <p className='text-base font-medium'>Tour & Travel</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-2 '>
                        <div className='flex justify-center items-center gap-3 rounded-lg p-4 bg-zinc-200 shadow-md shadow-zinc-400 '>
                            <FontAwesomeIcon className='w-5 h-5 bg-white rounded-lg shadow-md shadow-zinc-500 p-2' icon={faVanShuttle} />
                            <p className='text-base font-medium'>Kunjungan Industri</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-2 '>
                        <div className='flex justify-center items-center gap-3 rounded-lg p-4 bg-zinc-200 shadow-md shadow-zinc-400 '>
                            <FontAwesomeIcon className='w-5 h-5 bg-white rounded-lg shadow-md shadow-zinc-500 p-2' icon={faBusSimple} />
                            <p className='text-base font-medium'>Kunjungan Kerja</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-2 '>
                        <div className='flex justify-center items-center gap-3 rounded-lg p-4 bg-zinc-200 shadow-md shadow-zinc-400 '>
                            <FontAwesomeIcon className='w-5 h-5 bg-white rounded-lg shadow-md shadow-zinc-500 p-2' icon={faMountainSun} />
                            <p className='text-base font-medium'>Paket Wisata</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-2 '>
                        <div className='flex justify-center items-center gap-3 rounded-lg p-4 bg-zinc-200 shadow-md shadow-zinc-400 '>
                            <FontAwesomeIcon className='w-5 h-5 bg-white rounded-lg shadow-md shadow-zinc-500 p-2' icon={faHandsPraying} />
                            <p className='text-base font-medium'>Ziarah</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-2 '>
                        <div className='flex justify-center items-center gap-3 rounded-lg p-4 bg-zinc-200 shadow-md shadow-zinc-400 '>
                            <FontAwesomeIcon className='w-5 h-5 bg-white rounded-lg shadow-md shadow-zinc-500 p-2' icon={faHeart} />
                            <p className='text-base font-medium'>Wedding Car</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-2 '>
                        <div className='flex justify-center items-center gap-3 rounded-lg p-4 bg-zinc-200 shadow-md shadow-zinc-400 '>
                            <FontAwesomeIcon className='w-5 h-5 bg-white rounded-lg shadow-md shadow-zinc-500 p-2' icon={faPlaneDeparture} />
                            <p className='text-base font-medium'>Drop Bandara</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-2 '>
                        <div className='flex justify-center items-center gap-3 rounded-lg p-4 bg-zinc-200 shadow-md shadow-zinc-400 '>
                            <FontAwesomeIcon className='w-5 h-5 bg-white rounded-lg shadow-md shadow-zinc-500 p-2' icon={faDoorOpen} />
                            <p className='text-base font-medium'>Dor to Dor</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Four;
