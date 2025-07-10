import React from 'react'
import TalentCard from '../FindTalent/TalentCard'
import { talents } from '../Data/FindTalent'

const CompanyEmployes = () => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {talents.map((talent, index) => (
         <TalentCard key={index} {...talent} />
          ))}
        </div>
  )
}

export default CompanyEmployes