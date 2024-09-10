import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Icons import
import travelixLogo from '../assets/logo.png'
import searchIcon from '../assets/search.svg'

const Navbar = () => {
  return (
    <div className='fixed w-full flex justify-between items-center h-20 bg-[#381857] bg-opacity-50 text-white
    px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div>
        <Link to={'/'} className='flex items-center'>
            <div className='mr-2'><img src={travelixLogo} alt="Travelix Logo" /></div>
            <div className='uppercase text-3xl font-bold'>travelix</div>
        </Link>
      </div>
      <div>
        <ul className='uppercase'>
            <NavLink className='navbar-item' to={'/'}>Home</NavLink>
            <NavLink className='navbar-item' to={'/about'}>About Us</NavLink>
            <NavLink className='navbar-item' to={'/offers'}>Offers</NavLink>
            <NavLink className='navbar-item' to={'/news'}>News</NavLink>
            <NavLink className='navbar-item' to={'/contact'}>Contact</NavLink>
        </ul>
      </div>
      <div className='h-5 w-5 cursor-pointer mx-4'>
        <img src={searchIcon} alt="search icon" />
      </div>
    </div>
  )
}

export default Navbar
