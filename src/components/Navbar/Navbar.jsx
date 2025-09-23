import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/DoubleDollar.png'

const Navbar = ({ availableBalance }) => {
    return (
        <div>
            <div className="navbar max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm px-5">
                <div className="flex-1">
                    <img className='w-[70px] has-[70px]:' src={navImg} alt="Logo" />
                </div>
                <div className='flex items-center gap-4 mr-5 hidden md:block'>
                    <button className='btn btn-soft btn-primary mr-3'>Home</button>
                    <button className='btn btn-soft btn-primary mr-3'>Fixture</button>
                    <button className='btn btn-soft btn-primary mr-3'>Teams</button>
                    <button className='btn btn-soft btn-primary'>Schedules</button>
                </div>
                <div className="flex items-center gap-2">
                    <span className='text-base md:text-lg lg:text-xl font-semibold'>{availableBalance}</span>
                    <p class="text-base md:text-lg lg:text-xl font-semibold"><span className='font-bold'>Coin</span></p>
                    <img src={dollarImg} alt="Coin" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;