import { Tabs } from "@mantine/core";
import React from "react";

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

          <Tabs.Panel value="applied">t</Tabs.Panel>
          <Tabs.Panel value="save">s</Tabs.Panel>
          <Tabs.Panel value="offered">c</Tabs.Panel>
          <Tabs.Panel value="interviewing">c</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobHostory;
