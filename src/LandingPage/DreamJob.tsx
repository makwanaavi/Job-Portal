/* eslint-disable jsx-a11y/img-redundant-alt */
import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const DreamJob = () => {
  return (
    <div className="flex items-center px-20">
      <div className="flex flex-col w-[45%] gap-4">
        <div className="text-6xl font-bold text-mine-shaft-100 leading-tight">
          Find Your <span className="text-bright-sun-400">Dream Job</span> With
          Us...
        </div>
        <div className="text-mine-shaft-200 leading-relaxed">
          A good life begins with a good company. Start exploring thousands of
          jobs in one place and take the first step toward your future.
        </div>
        <div className="flex  gap-4 mt-8">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Find Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Job Type"
            placeholder="Full Time"
          />
          <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-xl p-2 hover:bg-bright-sun-500 cursor-pointer">
            <IconSearch className="h-[85%] w-[85%] active:scale-125 transition-all" />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[40rem] relative">
          <img src="/Boy.png" alt="boy image" />
          <div className="absolute -right-6 top-[50%] w-fit mb-1 border border-bright-sun-400 rounded-lg p-4 backdrop-blur-md">
            <div className="text-center text-mine-shaft-100">10K+ Got Job</div>
            <Avatar.Group>
              <Avatar src="avatar-7.png" />
              <Avatar src="avatar-8.png" />
              <Avatar src="avatar-9.png" />
              <Avatar>+5</Avatar>
            </Avatar.Group>
          </div>

          <div className="absolute -left-6 top-[30%] w-fit mb-1 border border-bright-sun-400 rounded-lg p-4 backdrop-blur-md gap-3 flex flex-col justify-around">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 p-1 bg-bright-sun-200/10 rounded-lg">
                <img src="/Google.png" alt="" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">India(Rajkot)</div>
              </div>
            </div>

            <div className="flex gap-2 text-mine-shaft-200 text-xs">
              <span>1 Day Ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
