import React from 'react'
import TalentCard from '../FindTalent/TalentCard'
import { talents } from '../Data/FindTalent'

const CompanyEmployes = () => {
  return (
   <div className="flex mt-10 flex-wrap gap-10">
          {talents.map((talent, index) => (
         <TalentCard key={index} {...talent} />
          ))}
        </div>
  )
}

export default CompanyEmployes