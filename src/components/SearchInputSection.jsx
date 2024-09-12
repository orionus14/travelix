import React from 'react'
import { activities } from '../assets/activities';
import InputFields from './InputFields';

const SearchInputSection = ({ activeActivity }) => {
    const activityContent = activities.reduce((acc, act) => {
        acc[act.activity] = <InputFields activity={act.activity} />;
        return acc;
    }, {});

    return (
        <div className='w-full h-48 bg-gradient-to-r from-[#fa9e1b] to-[#8d4fff]'>
            {activityContent[activeActivity]}
        </div>
    )
}

export default SearchInputSection
