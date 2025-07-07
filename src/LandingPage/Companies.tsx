import React from "react";
import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies = () => {
  return (
    <div className="mt-20 pb-5 text-center">
      <div className="text-4xl font-semibold text-mine-shaft-100">
        Trusted By <span className="text-bright-sun-400">1000+</span> Companies
      </div>

      <Marquee pauseOnHover={true}>
        {companies.map((company, index) => (
          <div key={index}>
            <img
              className="h-14 px-14 mt-12 hover:bg-bright-sun-400/10 rounded-md cursor-pointer"
              src={`/Companies/${company}.png`}
              alt={company}
            />
          </div>
        ))}
       
      </Marquee>
    </div>
  );
};

export default Companies;
