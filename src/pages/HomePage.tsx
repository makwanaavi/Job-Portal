import React from 'react'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Works from '../LandingPage/Works'
import Testimonials from '../LandingPage/Testimonials'
import Subscribe from '../LandingPage/Subscribe'

const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] '>
        <DreamJob/>
        <Companies/>
        <JobCategory/>
        <Works/>
        <Testimonials/>
        <Subscribe />
    </div>
  )
}

export default HomePage