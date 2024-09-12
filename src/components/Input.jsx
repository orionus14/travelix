import React from 'react'

const Input = ({placeholder = ''}) => {
  return (
    <input className='text-[#929191] p-2 h-8 w-36'
    type="text"
    placeholder={placeholder} />
  )
}

export default Input
