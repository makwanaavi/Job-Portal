import { Button, Divider } from "@mantine/core";
import { IconBriefcaseFilled, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertificationCard from "./CertificationCard";
import { profile } from "../Data/FindTalent";

const Profile = (props: any) => {
  const skills = [
    "React",
    "SpringBoot",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
    "Python",
    "Django",
    "Figma",
    "Sketch",
    "Docker",
    "AWS",
  ];
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
          Jarrod Wood
          <Button color="brightSun.4" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-2">
          <IconBriefcaseFilled /> Software Engineer &bull; Google
        </div>
        <div className="text-lg flex items-center gap-2 text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          New York, United States
        </div>
        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-3">About Me</div>
          <div className="text-sm text-mine-shaft-300 text-justify">
            As a Software Engineer at Google, I specialize in building scalable
            and high-performance applications. My expertise lies in integrating
            front-end and back-end technologies to deliver seamless user
            experiences. With a strong foundation in React and SpringBoot, and a
            focus on MongoDB for database solutions, I am passionate about
            leveraging the latest technologies to solve complex problems and
            drive innovation. My goal is to create impactful software that
            enhances productivity and meets user needs effectively.
          </div>
        </div>
        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-3">Skills</div>
          <div className="flex flex-wrap gap-1">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill: string, index: number) => (
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
            {Array.isArray(props.experience) &&
              props.experience.map((exp: any, index: any) => (
                <ExpCard key={index} {...exp} />
              ))}
          </div>
        </div>

        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-5">Certification</div>
          <div className="flex flex-col gap-4">
            {Array.isArray(props.certifications) &&
              props.certifications.map((cer: any, index: any) => (
                <CertificationCard key={index} {...cer} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
