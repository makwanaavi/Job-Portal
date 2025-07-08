import React from "react";
import Sort from "./Sort";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Divider } from "@mantine/core";
import JobCard from "./JobCard";
import { JobList } from "../Data/Data";

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommend Jobs</div>
        <Sort />
      </div>
     <div className="flex mt-10 flex-wrap gap-4 justify-between">
       { 
        JobList.map((job, index) =>  <JobCard key={index} {...job}/>)
      }
     </div>
    </div>
  );
};

export default Jobs;
