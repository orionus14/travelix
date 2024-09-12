import React from 'react'
import ButtonDark from './ButtonDark'
import Input from './Input'

const InputFields = ({ activity }) => {
    return (
        <div className='flex flex-col justify-center h-full py-16 px-8'>
            <div className='text-center text-white uppercase font-semibold text-xl mb-4'>
                {activity}
            </div>
            <div className='flex justify-around items-end'>
                <div className='mx-2'>
                    <div className='input-field-title'>Destination</div>
                    <div><Input /></div>
                </div>
                <div className='mx-2'>
                    <div className='input-field-title'>Check In</div>
                    <div><Input placeholder='YY-MM-DD' /></div>
                </div>
                <div className='mx-2'>
                    <div className='input-field-title'>Check Out</div>
                    <div><Input placeholder='YY-MM-DD' /></div>
                </div>
                <div className='mx-2'>
                    <div className='input-field-title'>Adults</div>
                    <div><Input /></div>
                </div>
                <div className='mx-2'>
                    <div className='input-field-title'>Children</div>
                    <div><Input /></div>
                </div>
                <div className='mx-2'>
                    <ButtonDark />
                </div>
            </div>
        </div>
    )
}

export default InputFields
