import { Tabs } from "@mantine/core";
import React from "react";
import Card from "./Card";
import { JobList } from "../Data/Data";

const JobHostory = () => {
  return (
    <div className="">
      <div className="text-2xl font-semibold mb-5">Job History</div>
      <div>
        <Tabs variant="outline" radius="lg" defaultValue={"Applied"}>
          <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="applied">Applied</Tabs.Tab>
            <Tabs.Tab value="save">Save</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="applied">
            {" "}
            <div className="flex mt-10 flex-wrap gap-6">
              {JobList.map((job, index) => (
                <Card key={index} {...job} applied />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="save">
            <div className="flex mt-10 flex-wrap gap-6">
              {JobList.map((job, index) => (
                <Card key={index} {...job} save />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
            <div className="flex mt-10 flex-wrap gap-6">
              {JobList.map((job, index) => (
                <Card key={index} {...job} offered />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="interviewing">
            <div className="flex mt-10 flex-wrap gap-6">
              {JobList.map((job, index) => (
                <Card key={index} {...job} interviewing />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobHostory;
