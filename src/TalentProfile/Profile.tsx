import { Button, Divider } from "@mantine/core";
import { IconBriefcaseFilled, IconMapPin } from "@tabler/icons-react";
import React from "react";
import ExpCard from "./ExpCard";
import CertificationCard from "./CertificationCard";

const Profile = (props: any) => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img
          className="rounded-t-2xl"
          src="/Profile/banner.jpg"
          alt="Profile pic"
        />
        <img
          className="rounded-full h-48 w-48 absolute -bottom-1/3 left-3 border-8 border-mine-shaft-900"
          src="/avatar-9.png"
          alt="Profile pic"
        />
      </div>
      <div className="px-3 mt-20 py-5">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}
          <Button color="brightSun.4" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-2">
          <IconBriefcaseFilled /> {props.role} &bull; {props.company}
        </div>
        <div className="text-lg flex items-center gap-2 text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          {props.location}
        </div>
        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-3">About Me</div>
          <div className="text-sm text-mine-shaft-300 text-justify">
            {props.about}
          </div>
        </div>
        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-3">Skills</div>
          <div className="flex flex-wrap gap-1">
            <div className="flex flex-wrap gap-3">
              {props.skills.map((skill: any, index: any) => (
                <div
                  className="bg-bright-sun-300/15 bg-opacity-15 rounded-3xl text-sm font-medium  text-bright-sun-400 px-3 py-2"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-5">Experiance</div>
          <div className="flex flex-col gap-4">
            {props.experience.map((exp: any, index: any) => (
              <ExpCard key={index} {...exp} />
            ))}
          </div>
        </div>

        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-5">Certification</div>
          <div className="flex flex-col gap-4">
            {props.certifications.map((cer: any, index: any) => (
              <CertificationCard key={index} {...cer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
