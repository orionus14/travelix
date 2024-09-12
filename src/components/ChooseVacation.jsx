import React, { useState } from 'react'
import { activities } from '../assets/activities'
import ActivityButton from './ActivityButton'
import SearchInputSection from './SearchInputSection'

const ChooseVacation = () => {
    const [activeActivity, setActiveActivity] = useState([activities[0].activity]);

  return (
    <div className='bg-white'>
      <nav>
        <ul className='flex flex-row justify-center'>
            {activities.map((act, index) => (
                <li key={index}>
                    <ActivityButton 
                    text={act.activity} 
                    src={act.src} alt={act.alt} 
                    onClick={() => {setActiveActivity(act.activity)}}
                    isActive={activeActivity === act.activity}/>
                </li>
            ))}
        </ul>
      </nav>
      <SearchInputSection activeActivity={activeActivity} />
    </div>
  )
}

export default ChooseVacation