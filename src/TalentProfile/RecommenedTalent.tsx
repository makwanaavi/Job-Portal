import React from 'react'
import { talents } from '../Data/FindTalent'
import TalentCard from '../FindTalent/TalentCard'

const RecommenedTalent = () => {
  return (
    <div className='w-1/4'>
    <div className='text-xl font-semibold mb-5'> RecommenedTalent</div>
        <div className='flex flex-col flex-wrap gap-5'>
         
            {talents.map((talent, index) => index< 4 && <TalentCard  key={index} {...talent}/>)}
        
  </div>
    </div>
  )
}

export default RecommenedTalent