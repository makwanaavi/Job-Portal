// import React from "react";
// import Sort from "../FindJobs/Sort";
// // import { talents } from "../Data/FindTalent";
// import TalentCard from "./TalentCard";
// import { talents } from "../Data/FindTalent";

// const Talents = () => {
//   return (
//     <div className="p-5">
//       <div className="flex justify-between">
//         <div className="text-2xl font-semibold">Talents</div>
//         <Sort />
//       </div>
//       <div className="flex mt-10 flex-wrap gap-4 justify-between">
//         {talents.map((job, index) => (
//           <TalentCard key={index} {...job} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Talents;


import React from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { talents } from "../Data/FindTalent";

const Talents = () => {
  return (
    <div className="px-6 py-10 bg-mine-shaft-950 min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-bright-sun-400">Top Talents</h2>
        <Sort />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {talents.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
