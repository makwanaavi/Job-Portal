import { Badge, Tabs } from "@mantine/core";
import JobDec from "../JobsDecs/JobDec";
import TalentCard from "../FindTalent/TalentCard";
import { talents } from "../Data/FindTalent";

const PostedJobDec = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer{" "}
        <Badge variant="light" ml="sm" color="brightSun.4" size="sm">
          Badge
        </Badge>
      </div>

      <div className="font-medium text-mine-shaft-300 mb-5">New York, US</div>

      <div>
        <Tabs variant="outline" radius="lg" defaultValue={"about"}>
          <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="Applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="Invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDec edit />
          </Tabs.Panel>
          <Tabs.Panel value="Applicants">
            <div className="flex flex-wrap mt-10 gap-10">
              {talents.map((talent, index) => (
                <TalentCard key={index} {...talent} />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="Invited">t</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobDec;
