import React from "react";
import SearchBar from "../FindJobs/SearchBar";
import { Divider } from "@mantine/core";
import Jobs from "../FindJobs/Jobs";

const FindJobs = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
      
      <SearchBar/>
      <Divider size="xs" mx="md" />
      <Jobs />
    </div>
  );
};

export default FindJobs;
