import React from 'react'
import { Link } from 'react-router-dom';
import { socialLinks } from '../assets/icons';

const Contacts = () => {
    return (
        <div className='absolute inset-0 z-30 w-full hidden sm:flex justify-between bg-[#381857] text-white 
        items-center h-8 2xl:px-28 xl:px-20 lg:px-16 px-12'>
            {/* Left Side */}
            <div className='flex items-center'>
                <div className='mr-8 text-sm font-medium'>+45 345 284 5689</div>
                <div className='flex '>
                    {/* rel="noopener noreferrer" - запобігає доступу нової сторінки до вікна, яке її відкрило */}
                    {socialLinks.map((link, index) => (
                        <div className='top-icon' key={index}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                <img src={link.src} alt={link.alt} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side */}
            <div className='flex items-center'>
                <div className='top-link-sign'><Link to={'/login'}>Login</Link></div>
                <div className='w-[1px] h-4 bg-white'></div>
                <div className='top-link-sign'><Link to={'/register'}>Register</Link></div>
            </div>
        </div>
    )
}

export default Contacts