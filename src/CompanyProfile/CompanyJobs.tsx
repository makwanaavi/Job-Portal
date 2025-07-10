import React from "react";
import JobCard from "../FindJobs/JobCard";
import { JobList } from "../Data/Data";

const CompanyJobs = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
      {JobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default CompanyJobs;
