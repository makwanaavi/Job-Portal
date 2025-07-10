import React from "react";
import TalentCard from "../FindTalent/TalentCard";
import { talents } from "../Data/FindTalent";

const SimilarCompanyes = () => {
  return (
    <div>
        <div>
            Similar Companyes
        </div>
      <div className="flex flex-col flex-wrap gap-5">
        {talents.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCompanyes;
