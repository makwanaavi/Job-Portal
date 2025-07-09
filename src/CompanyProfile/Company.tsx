import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import About from "./AboutCom";

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img
          className="rounded-t-2xl"
          src="/Profile/banner.jpg"
          alt="Profile pic"
        />
        <img
          className="rounded-3xl h-36 w-36 absolute -bottom-1/4 left-5 p-2 border-mine-shaft-900 bg-mine-shaft-900"
          src="/Google.png"
          alt="Profile pic"
        />
      </div>
      <div className="px-4 mt-20 ">
        <div className="text-3xl font-semibold flex justify-between ">
          Google
          <Avatar.Group>
            <Avatar src="avatar-7.png" />
            <Avatar src="avatar-8.png" />
            <Avatar src="avatar-9.png" />
            <Avatar>+10K</Avatar>
          </Avatar.Group>
        </div>

        <div className="text-lg flex items-center gap-2 text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          New York
        </div>
        <Divider size="xs" my="xl" />

        <div>
          <Tabs variant="outline" radius="lg"  defaultValue={"about"}>
            <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400">
              <Tabs.Tab value="about">About</Tabs.Tab>
              <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
              <Tabs.Tab value="employees">Employees</Tabs.Tab>

            </Tabs.List>

            <Tabs.Panel value="first"><About/></Tabs.Panel>
            <Tabs.Panel value="second">Second panel</Tabs.Panel>
            <Tabs.Panel value="second">Second panel</Tabs.Panel>

          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Company;
