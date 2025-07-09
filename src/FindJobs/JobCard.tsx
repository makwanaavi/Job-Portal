import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const JobCard = (props: any) => {
  return (
    <Link to={'/jobs'} className="bg-mine-shaft-900 hover:bg-mine-shaft-800 duration-300 w-full p-5 flex flex-col gap-4 rounded-2xl border border-mine-shaft-700 hover:shadow-md hover:scale-[1.02] transform transition-all ease-in-out">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-lg">
            <img
              src={`/Icons/${props.company}.png`}
              alt={props.company}
              className="h-7 w-7 object-contain"
            />
          </div>
          <div>
            <div className="font-semibold text-mine-shaft-100">
              {props.jobtitle}
            </div>
            <div className="text-xs text-mine-shaft-400">
              {props.company} • {props.Applicants} Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="text-bright-sun-400 hover:scale-110 transition-transform cursor-pointer" />
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        <span className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-300 rounded-full text-xs font-medium">
          {props.experiance}
        </span>
        <span className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-300 rounded-full text-xs font-medium">
          {props.jobtype}
        </span>
        <span className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-300 rounded-full text-xs font-medium">
          {props.location}
        </span>
      </div>

      {/* Description */}
      <Text
        lineClamp={3}
        className="!text-sm !text-justify !text-mine-shaft-300 leading-relaxed"
      >
        {props.decription}
      </Text>

      <Divider size="xs" color="mineShaft.7" />

      {/* Footer */}
      <div className="flex justify-between items-center text-sm">
        <div className="font-semibold text-bright-sun-400">₹{props.pacage}</div>
        <div className="flex items-center gap-1 text-mine-shaft-400">
          <IconClockHour3 className="h-4 w-4" stroke={1.5} />
          {props.PostedDayago} Days Ago
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
