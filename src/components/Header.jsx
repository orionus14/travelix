import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-screen bg-home-image bg-cover bg-center bg-no-repeat flex items-center justify-center relative'>
      <div className="absolute z-10 inset-0 bg-purple-950 bg-opacity-50"></div>
      <div className='z-20 text-center text-white'>
        <div className='text-6xl sm:text-8xl font-bold'> DISCOVER <br /> <i className='underline decoration-wavy decoration-[#fa9e1b]'>the world</i></div>
        <div className='uppercase mt-16'>
          <Link to={'/'} className='inline-block py-4 px-8 rounded-full font-medium
          bg-gradient-to-r from-[#fa9e1b] to-[#8d4fff] hover:scale-105 transition'>
            Explore now
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Header