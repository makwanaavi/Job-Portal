import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import React from "react";

const JobCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 w-72 p-4 flex flex-col gap-3 border border-bright-sun-400 rounded-xl hover:shadow-[0_0_5px_1px_yellow]  !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              src={`/Icons/${props.company}.png`}
              alt=""
              className="h-7 "
            />
          </div>
          <div>
            <div className="font-semibold">{props.jobtitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {props.company} &#2022; {props.Applicants} Applicant
            </div>
          </div>
        </div>
        <div>
          <IconBookmark className="text-mine-shaft-400 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-md text-sm">
          {props.experiance}
        </div>
        <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-md text-sm">
          {props.jobtype}
        </div>
        <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-md text-sm">
          {props.location}
        </div>
      </div>
      <div className="">
        <Text
          lineClamp={2}
          className="!text-sm !text-justify !text-mine-shaft-300"
        >
          {props.decription}
        </Text>
      </div>
      <Divider size="xs" color="mineShaft.7" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          &#8377;{props.pacage}
        </div>
        <div className="flex items-center gap-1 text-xs text-mine-shaft-400">
          <IconClockHour3 stroke={1.5} className="h-5 w-5" />{" "}
          {props.PostedDayago} Days Ago
        </div>
      </div>
    </div>
  );
};

export default JobCard;

