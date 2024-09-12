import React from 'react'

const ActivityButton = ({ text, src, alt, onClick, isActive }) => {
    return (
        <div className={`flex items-center px-4 uppercase font-medium 
            text-[#2d2c2c] hover:bg-[#fa9e1b] hover:text-white 
            transition duration-300 cursor-pointer activity 
            ${isActive ? 'active bg-[#fa9e1b] text-white' : ''}`}
            onClick={onClick}>
            <div>
                <img className='activity-icon transition-filter duration-300'
                    src={src} alt={alt} />
            </div>
            <div className='px-4 py-8'>{text}</div>
        </div>
    )
}

export default ActivityButton