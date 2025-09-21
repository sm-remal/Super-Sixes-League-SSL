import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/DoubleDollar.png'

const Navbar = ({availableBalance}) => {
    return (
        <div>
            <div className="navbar max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm px-5">
                <div className="flex-1">
                    <img className='w-[60px] has-[60px]:' src={navImg} alt="Logo" />
                </div>
                <div className="flex items-center gap-2">
                    <span className='text-base md:text-lg lg:text-xl font-semibold'>{availableBalance}</span>
                    <p class="text-base md:text-lg lg:text-xl font-semibold">Coin</p>
                    <img src={dollarImg} alt="Coin" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;