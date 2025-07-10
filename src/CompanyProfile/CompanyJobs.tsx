import React from "react";
import JobCard from "../FindJobs/JobCard";
import { JobList } from "../Data/Data";

const CompanyJobs = () => {
  return (
    <div className="flex mt-10 flex-wrap gap-3">
      {JobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default CompanyJobs;
