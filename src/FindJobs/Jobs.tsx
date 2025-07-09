// import React from "react";
// import Sort from "./Sort";
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { Divider } from "@mantine/core";
// import JobCard from "./JobCard";
// import { JobList } from "../Data/Data";

// const Jobs = () => {
//   return (
//     <div className="p-5">
//       <div className="flex justify-between">
//         <div className="text-2xl font-semibold">Recommend Jobs</div>
//         <Sort />
//       </div>
//       <div className="flex mt-10 flex-wrap gap-4 justify-between">
//         {JobList.map((job, index) => (
//           <JobCard key={index} {...job} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Jobs;


import React from "react";
import Sort from "./Sort";
import { Divider } from "@mantine/core";
import JobCard from "./JobCard";
import { JobList } from "../Data/Data";

const Jobs = () => {
  return (
    <div className="px-6 py-10 bg-mine-shaft-950 min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-bright-sun-400">Recommended Jobs</h2>
        <Sort />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {JobList.map((job, index) => (  
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
