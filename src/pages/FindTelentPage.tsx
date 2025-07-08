import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../FindJobs/SearchBar'

const FindTelentPage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
          <Divider size="xs" mx="md" />
          <SearchBar/>
             <Divider size="xs" mx="md" />
        </div>
  )
}

export default FindTelentPage