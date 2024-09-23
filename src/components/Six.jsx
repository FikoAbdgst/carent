import React, { useState } from 'react';
import Terios from '../../public/Terios.png';
import Avanza from '../../public/Avanza.png';
import Brio from '../../public/Brio.png';
import Sigra from '../../public/Sigra.png';
import AvanzaTSS from '../../public/Avanza_TSS.png';
import HiancePremio from '../../public/Hiace_Premio.png';
import HianceCommuter from '../../public/Hiace_Commuter.png';
import ElfLong from '../../public/Elf_Long.png';
import MediumBus from '../../public/Medium_Bus.png';
import BigBus from '../../public/BIG_Bus.png';

const cars = [
    { src: Avanza, alt: "Avanza", name: "Avanza Facelift" },
    { src: Brio, alt: "Brio", name: "Brio" },
    { src: Sigra, alt: "Sigra", name: "Sigra" },
    { src: Terios, alt: "Terios", name: "Terios" },
    { src: AvanzaTSS, alt: "Avanza TSS", name: "Avanza TSS" },
    { src: HiancePremio, alt: "Hiace Premio", name: "Hiance Premio" },
    { src: HianceCommuter, alt: "Hiace Commuter", name: "Hiance Commuter" },
    { src: ElfLong, alt: "Elf Long", name: "ElfLong" },
    { src: MediumBus, alt: "Medium Bus", name: "Medium Bus" },
    { src: BigBus, alt: "Big Bus", name: "Big Bus" },
];

const Six = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = currentPage === 1 ? 6 : 4;

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    const handleNextPage = () => {
        if (currentPage < 2) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='w-full h-screen flex justify-center items-start'>
            <div className='flex justify-center items-center flex-col'>
                <p className='text-3xl font-semibold mt-10'>Choose a Car</p>
                <div className=' flex flex-wrap justify-center  gap-4 mt-8'>
                    {currentCars.map((car, index) => (
                        <div className=''>
                            <div key={index} className='flex justify-center w-76 h-52 p-5 bg-zinc-200 shadow-md shadow-zinc-400 rounded-md'>
                                <img src={car.src} alt={car.alt} className='w-full h-auto' />
                            </div>
                            <p className='mt-2 text-xl font-medium ml-2'>{car.name}</p>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center gap-5 mt-5'>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className='px-4 py-2 bg-amber-600 text-white rounded disabled:opacity-50'
                    >
                        1
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === 2}
                        className='px-4 py-2 bg-amber-600 text-white rounded disabled:opacity-50'
                    >
                        2
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Six;
