import React from 'react'
import { Link } from 'react-router-dom';

// Icons
import facebookIcon from '../assets/facebook-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import xIcon from '../assets/x-icon.svg';
import telegramIcon from '../assets/telegram-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';

const socialLinks = [
    { href: 'https://www.facebook.com/', src: facebookIcon, alt: 'Facebook icon' },
    { href: 'https://www.linkedin.com/', src: linkedinIcon, alt: 'Linkedin icon' },
    { href: 'https://x.com/', src: xIcon, alt: 'X icon' },
    { href: 'https://web.telegram.org/', src: telegramIcon, alt: 'Telegram icon' },
    { href: 'https://www.instagram.com/', src: instagramIcon, alt: 'Instagram icon' },
];

const Contacts = () => {
    return (
        <div className='flex justify-between px-60 bg-[#381857] text-white items-center h-8'>
            {/* Left Side */}
            <div className='flex items-center'>
                <div className='mr-4'>+45 345 284 5689</div>
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
            <div className='flex'>
                <div><Link to={'/login'}>Login</Link></div>
                <div><Link to={'/register'}>Register</Link></div>
            </div>
        </div>
    )
}

export default Contacts