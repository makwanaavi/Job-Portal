import React from 'react'
import Header from '../Header/Header'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Works from '../LandingPage/Works'
import Testimonials from '../LandingPage/Testimonials'

const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] '>
        <Header />
        <DreamJob/>
        <Companies/>
        <JobCategory/>
        <Works/>
        <Testimonials/>
    </div>
  )
}

export default HomePage