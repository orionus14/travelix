import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// Icons import
import travelixLogo from '../assets/logo.png'
import searchIcon from '../assets/search.svg'
import closeIcon from '../assets/close.svg'
import burgerIcon from '../assets/burger-menu.svg'

const Navbar = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [burgerMenu, setBurgerMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setSearchBar(false);
    }, [location])

    useEffect(() => {
        setBurgerMenu(false);
    }, [location])
    
    useEffect(() => {
        setSearchBar(false);
    }, [burgerMenu])

    return (

        <div className='flex fixed z-30 top-8 w-full justify-between items-center h-20 bg-[#381857] bg-opacity-50 text-white 2xl:px-28 xl:px-20 lg:px-16 px-12'>

            <div className='flex items-center'>
                {/* Burger menu */}
                <div className='md:hidden'>
                    {burgerMenu ?

                        // Sidebar Burger Menu
                        <div className='bg-[#4c2276] bg-opacity-100 h-screen w-screen sm:w-1/3 absolute inset-0'>

                            {/* Close Icon */}
                            <div className='absolute right-4 top-4'>
                                <img className='w-5 h-5 cursor-pointer'
                                    src={closeIcon} alt="close icon"
                                    onClick={() => setBurgerMenu(false)} />
                            </div>
                            <ul className='flex flex-col mt-8 px-4 uppercase'>
                                <Link to={'/'} className='flex items-center my-4'>
                                    <div className='mr-2'><img src={travelixLogo} alt="Travelix Logo" /></div>
                                    <div className='uppercase text-xl font-bold'>travelix</div>
                                </Link>
                                <NavLink className='navbar-item-burger' to={'/'}>Home</NavLink>
                                <NavLink className='navbar-item-burger' to={'/about'}>About Us</NavLink>
                                <NavLink className='navbar-item-burger' to={'/offers'}>Offers</NavLink>
                                <NavLink className='navbar-item-burger' to={'/news'}>News</NavLink>
                                <NavLink className='navbar-item-burger' to={'/contact'}>Contact</NavLink>
                            </ul>
                        </div> 
                        :
                        // Burger Icon
                        <img className='w-6 h-6 mr-8 cursor-pointer'
                            src={burgerIcon} alt="burger icon"
                            onClick={() => setBurgerMenu(true)} />
                    }
                </div>

                {/* Logo */}
                <Link to={'/'} className={`${burgerMenu ? 'hidden' : 'flex items-center'}`}>
                    <div className='mr-2'><img src={travelixLogo} alt="Travelix Logo" /></div>
                    <div className='uppercase text-3xl font-bold'>travelix</div>
                </Link>

                {/* Nav Links */}
                <ul className='md:flex hidden ml-8 lg:ml-16 uppercase'>
                    <NavLink className='navbar-item' to={'/'}>Home</NavLink>
                    <NavLink className='navbar-item' to={'/about'}>About Us</NavLink>
                    <NavLink className='navbar-item' to={'/offers'}>Offers</NavLink>
                    <NavLink className='navbar-item' to={'/news'}>News</NavLink>
                    <NavLink className='navbar-item' to={'/contact'}>Contact</NavLink>
                </ul>
            </div>

            {/* Searching */}
            <div className={`cursor-pointer mr-4 ${burgerMenu ? 'hidden sm:block' : ''}`} >

                {!searchBar && (
                    <img className={`h-5 w-5 transition-all duration-200 ${searchBar ? '' : 'animate-slidein'}`}
                        onClick={() => setSearchBar(true)}
                        src={searchIcon} alt="search icon" />
                )}

                {searchBar && (
                    <div className={`flex items-center relative ${searchBar ? 'animate-slidein' : ''}`}>
                        <input className='block px-2 text-black absolute 
                        lg:right-8 lg:top-0 md:top-14 md:right-0 right-8 top-0 w-40 border-none outline-none'
                            type="text" placeholder='Enter your text...' />
                        <img className='block h-5 w-5'
                            onClick={() => setSearchBar(false)}
                            src={closeIcon} alt="close icon"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar