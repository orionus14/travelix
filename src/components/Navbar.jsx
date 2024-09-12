import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// Icons import
import travelixLogo from '../assets/logo.png'
import searchIcon from '../assets/search.svg'
import closeIcon from '../assets/close.svg'
import burgerIcon from '../assets/burger-menu.svg'
import { socialLinks } from '../assets/icons'

const TOP_CONTACT_SIZE = 32;

const Navbar = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > TOP_CONTACT_SIZE) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(() => {
        setSearchBar(false);
    }, [location])

    useEffect(() => {
        setBurgerMenu(false);
    }, [location])

    useEffect(() => {
        let path = location.pathname.replace(/[^a-zA-Z]/g, '');
        if (location.pathname !== '/') {
            document.title = "Travelix - " + path.charAt(0).toUpperCase()
                + path.slice(1);
        } else document.title = 'Travelix - Discover the World!'
    }, [location])

    useEffect(() => {
        setSearchBar(false);
    }, [burgerMenu])

    return (
        <div className={`flex fixed z-30 w-full justify-between items-center h-20 
        bg-[#381857] bg-opacity-50 text-white 
        2xl:px-28 xl:px-20 lg:px-16 md:px-12 px-4 
        transition-all duration-300
        ${isScrolled ? 'sm:top-0' : 'sm:top-8'}`}>
            {/*---------- Small Screen ---------- */}

            <div className='flex items-center'>
                {/* Burger menu */}
                <div className='md:hidden'>
                    {burgerMenu ?

                        // Sidebar Burger Menu
                        <div className='bg-[#4c2276] bg-opacity-100 h-screen w-screen sm:w-1/3 absolute inset-0'>

                            {/* Close Icon */}
                            <div className='absolute right-4 top-4'>
                                <img className='w-6 h-6 cursor-pointer'
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

                            <div className='px-4 mt-12'>
                                <div className=' mb-2 text-lg font-medium'>+45 345 284 5689</div>
                                <div className='flex '>
                                    {/* rel="noopener noreferrer" - запобігає доступу нової сторінки до вікна, яке її відкрило */}
                                    {socialLinks.map((link, index) => (
                                        <div className='burger-icon' key={index}>
                                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                                <img src={link.src} alt={link.alt} />
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className='flex sm:hidden items-center mt-12 justify-center'>
                                    <div className='burger-link-sign'><Link to={'/login'}>Login</Link></div>
                                    <div className='w-[1px] h-4 bg-white'></div>
                                    <div className='burger-link-sign'><Link to={'/register'}>Register</Link></div>
                                </div>
                            </div>
                        </div>
                        :
                        // Burger Icon
                        <img className='w-6 h-6 mr-8 cursor-pointer'
                            src={burgerIcon} alt="burger icon"
                            onClick={() => setBurgerMenu(true)} />
                    }
                </div>


                {/*---------- Big Screen ---------- */}

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
                    <img className={`h-6 w-6 sm:h-5 sm:w-5 transition-all duration-200 ${searchBar ? '' : 'animate-slidein'}`}
                        onClick={() => setSearchBar(true)}
                        src={searchIcon} alt="search icon" />
                )}

                {searchBar && (
                    <div className={`flex items-center relative ${searchBar ? 'animate-slidein' : ''}`}>
                        <input className='block px-2 text-black absolute 
                        lg:right-8 lg:top-0 md:top-14 md:right-0 
                        sm:right-8 sm:top-0 right-0 top-14 
                        w-40 border-none outline-none'
                            type="text" placeholder='Enter your text...' />
                        <img className='block h-6 w-6 sm:h-5 sm:w-5'
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