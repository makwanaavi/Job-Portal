import React from "react";
import CompanyCard from "./CompanyCard";
import { similar } from "../Data/Company";

const SimilarCompanyes = () => {
  return (
    <div className="w-1/4 ">
      <div>Similar Companyes</div>
      <div className="flex flex-col flex-wrap gap-5">
        {similar.map((Company, index) => (
          <CompanyCard key={index} {...Company} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCompanyes;
