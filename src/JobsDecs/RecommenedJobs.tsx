import React from "react";
import Jobs from "../FindJobs/Jobs";
import JobCard from "../FindJobs/JobCard";
import { JobList } from "../Data/Data";

const RecommenedJobs = () => {
  return (
    <div className="w-1/4 mx-auto">
      <div className="text-xl font-semibold mb-5"> RecommenedJobs</div>
      <div className="flex flex-col flex-wrap gap-5 justify-between">
        {JobList.map(
          (job: any, index: any) =>
            index < 6 && <JobCard key={index} {...job} />
        )}
      </div>
    </div>
  );
};

export default RecommenedJobs;
