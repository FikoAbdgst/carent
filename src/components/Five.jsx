import React from 'react';
import Test from '../../public/test.jpg';
import Konsumen1 from '../../public/konsumen1.jpg';
import Konsumen2 from '../../public/konsumen2.jpg';

const Five = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-full h-4/5 relative'>
                <img src={Test} alt="Test" className='w-full h-full z-10' />
                <div className='absolute inset-0 z-20 bg-black opacity-60'></div>
                <div className='flex items-center justify-center w-full h-full'>
                    <div className='w-1/3 h-4/5 absolute top-16 left-10 z-50 bg-amber-500 rounded-xl text-center p-8 flex flex-col justify-center items-center gap-5 text-sm'>
                        <img src={Konsumen1} alt="k1" className='rounded-full h-24 w-24  absolute top-5' />
                        <p className='text-zinc-800 absolute p-8 top-28'>Terimakasih untuk MD Tour and Travel, Pengalaman sangat berharga untuk trip kali ini, service dari owner dan drivernya sangat rekomendasi untuk yang ingin trip dan berwisata. Mulai dari pelayanan, transportasi, penginapan, dan lainnya sangat diperhatikan, Tour Leader selalu siap selama perjalanan, Insyaallah Kami akan selalu menggunakan jasa MD Tour and Travel untuk kegiatan di Karang Taruna Kelurahan Padasuka.
                        </p>
                        <p className='text-lg font-bold absolute bottom-16'>Arif Iman</p>
                        <p className='text-sm font-medium absolute bottom-8'>Customer</p>
                    </div>
                    <p className='absolute top-60 z-50 text-amber-500 text-3xl font-bold border-b-4 border-amber-500'>REVIEWS</p>
                    <div className='w-1/3 h-4/5 absolute top-16 right-10 z-50 bg-amber-500 rounded-xl text-center p-8 flex flex-col justify-center items-center gap-5 text-sm'>
                        <img src={Konsumen2} alt="k2" className='rounded-full h-24 w-24 absolute top-5 ' />

                        <p className='text-zinc-800 absolute p-8 top-32'>Saya sangat puas dengan pelayanan yang diberikan oleh MD Jaya Mandiri, Proses penyewaan sangat cepat dan mudah. Staffnya ramah dan sangat membantu. Mobil dalam kondisi prima dan bersih. Pasti akan menyewa di sini lagi.

                        </p>
                        <p className='text-lg font-bold absolute bottom-16'>Yoga Adrian Shevchenko</p>
                        <p className='text-sm font-medium absolute bottom-8'>Customer</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Five;
