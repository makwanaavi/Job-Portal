import React from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { talents } from "../Data/FindTalent";

const Talents = () => {
  return (
    <div className="px-5 py-8  mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-2xl font-semibold text-white">Talents</h2>
        <Sort />
      </div>

      <div className="flex flex-wrap mt-10 gap-10">
        {talents.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
