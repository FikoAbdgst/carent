import React, { useState } from 'react';
import Logo from '../../public/logo-tp.png';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const [menuBar, setMenuBar] = useState(false);
    const [hideMenuBar, setHideMenuBar] = useState(true);

    const handleMenuBar = () => {
        setMenuBar(!menuBar);
        setHideMenuBar(false);
    };
    const handleCloseMenuBar = () => {
        setHideMenuBar(true);
    };
    const handleAnimationEnd = () => {
        if (hideMenuBar) {
            setMenuBar(false);
        }
    };

    return (
        <>
            <div className={`w-full h-auto max-lg:py-2 lg:py-2  flex justify-between items-center absolute top-0 z-50 animate__animated ${hideMenuBar ? "transition delay-100 duration-500 bg-transparent" : "bg-zinc-800 "}`}>
                <img
                    src={Logo}
                    className='max-sm:w-10 max-sm:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16 max-sm:ml-10 sm:ml-24'
                />

                {/* Hamburger icon - Only visible on max-sm */}
                <div className="max-sm:mr-12 sm:hidden">
                    <button className='text-zinc-600' onClick={!menuBar ? handleMenuBar : handleCloseMenuBar}>
                        {menuBar ? <FontAwesomeIcon icon={faTimes} className='w-6 h-6' /> : <FontAwesomeIcon icon={faBars} className='w-6 h-6' />}
                    </button>
                </div>

                {/* Full Menu - Hidden on max-sm */}
                <div className={`hidden sm:flex justify-center items-center gap-5 max-md:text-3xs md:text-2xs lg:text-sm mr-32 xl:text-base font-medium`}>
                    <a href="#">Testimoni</a>
                    <a href="#">Car</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>

            {/* Mobile Menu - Visible on max-sm */}
            {menuBar && (
                <div
                    className={`animate__animated ${hideMenuBar ? "animate__slideOutUp" : "animate__slideInDown"} absolute pt-14 text-2xs md:hidden z-40 border-b-2 border-b-amber-500 bg-zinc-800 w-full pb-2 block`}
                    style={{ animationDuration: "0.2s" }}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <a href="#" className="block py-2 px-10 text-white">Testimoni</a>
                    <a href="#" className="block py-2 px-10 text-white">Car</a>
                    <a href="#" className="block py-2 px-10 text-white">About</a>
                    <a href="#" className="block py-2 px-10 text-white">Contact</a>
                </div>
            )}
        </>
    );
};

export default Navigation;
