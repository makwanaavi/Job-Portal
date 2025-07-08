import React from "react";
import Sort from "../FindJobs/Sort";
// import { talents } from "../Data/FindTalent";
import TalentCard from "./TalentCard";
import { talents } from "../Data/FindTalent";

const Talents = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort />
      </div>
      <div className="flex mt-10 flex-wrap gap-4 justify-between">
        {talents.map((job, index) => (
          <TalentCard key={index} {...job} />
        ))}
        {/* <TalentCard/> */}
      </div>
    </div>
  );
};

export default Talents;
