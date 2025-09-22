import React from 'react'
import bannerImg from '../../assets/banner-main.png'
import bgImg from '../../assets/bg-shadow.png'

const Banner = () => {
  return (
    <div className='navbar flex justify-center items-center mb-12 max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm px-5 rounded-2xl  bg-cover bg-center py-8 md:py-14 bg-black'  style={{ backgroundImage: `url(${bgImg})` }}>
        <div className='text-center space-y-5'>
          <div className='flex justify-center'>
            <img src={bannerImg} alt="" className='w-[120px] h-[120px] md:w-[180px] md:h-[180px'/>
          </div>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className='text-md md:text-lg lg:text-xl text-gray-400 font-medium'>Beyond Boundaries Beyond Limits</p>
          <button className='btn btn-warning'>Claim Free Credit</button>
        </div>
    </div>
  )
}

export default Banner


