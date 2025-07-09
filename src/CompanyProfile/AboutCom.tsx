import React from "react";
import { companyData } from "../Data/Company";

const AboutCom = () => {
  const company: { [key: string]: any } = companyData;
  return (
    <div>
      {Object.keys(company).map((key, index) => (
        <div key={index}>
          <div>{key}</div>
          <div>{company[key]}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutCom;
