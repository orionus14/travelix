import React from 'react'
import { activities } from '../assets/activities'
import ActivityButton from './ActivityButton'
import SearchInputSection from './SearchInputSection'

const ChooseVacation = () => {
  return (
    <div className='bg-white'>
      <nav>
        <ul className='flex flex-row justify-center'>
            {activities.map((act, index) => (
                <li key={index}>
                    <ActivityButton text={act.activity} src={act.src} alt={act.alt} />
                </li>
            ))}
        </ul>
      </nav>
      <SearchInputSection />
    </div>
  )
}

export default ChooseVacation