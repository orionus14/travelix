import React from 'react'
import ButtonDark from './ButtonDark'
import Input from './Input'

const InputFields = ({ activity }) => {
    return (
        <div className='flex flex-col justify-center h-full py-16 px-8 animate-slidein'>
            <div className='text-center text-white uppercase font-semibold text-xl mb-4'>
                {activity}
            </div>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-around lg:items-end'>
                <div className='mx-2 my-4 lg:my-0'>
                    <div className='input-field-title'>Destination</div>
                    <div className='flex justify-center lg:block'><Input /></div>
                </div>
                <div className='mx-2 my-4 lg:my-0'>
                    <div className='input-field-title'>Check In</div>
                    <div className='flex justify-center lg:block'><Input placeholder='YY-MM-DD' /></div>
                </div>
                <div className='mx-2 my-4 lg:my-0'>
                    <div className='input-field-title'>Check Out</div>
                    <div className='flex justify-center lg:block'><Input placeholder='YY-MM-DD' /></div>
                </div>
                <div className='mx-2 my-4 lg:my-0'>
                    <div className='input-field-title'>Adults</div>
                    <div className='flex justify-center lg:block'><Input /></div>
                </div>
                <div className='mx-2 my-4 lg:my-0'>
                    <div className='input-field-title'>Children</div>
                    <div className='flex justify-center lg:block'><Input /></div>
                </div>
                <div className='mx-2 my-4 lg:my-0 flex justify-center lg:block'>
                    <ButtonDark />
                </div>
            </div>
        </div>
    )
}

export default InputFields