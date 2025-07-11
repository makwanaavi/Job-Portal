import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import {
  IconBriefcaseFilled,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertificationCard from "./CertificationCard";
import { profile } from "../Data/FindTalent";
import { useState } from "react";
import { SelectInput } from "./SelectInput";
import fields from "../Data/Profile";
import ExpInput from "./ExpInput";

const Profile = () => {
  const select = fields;
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setabout] = useState(
    "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively."
  );
  const [skills, setskills] = useState<string[]>([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "API Development",
    "Testing and Debugging",
    "Agile Methodologies",
    "DevOps",
    "AWS",
    "Azure",
    "Google Cloud",
  ]);

  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  const [addExp, setAddExp] = useState(false);
  return (
    <div className="w-4/5 mx-auto">
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
      <div className="px-3 !mt-20  py-5">
        <div className="text-3xl font-semibold flex justify-between">
          {profile.name}

          <ActionIcon
            onClick={() => handleEdit(0)}
            variant="subtle"
            color="brightSun.4"
            size="lg"
          >
            {edit[0] ? (
              <IconDeviceFloppy className="w-4/5 h-4/5" />
            ) : (
              <IconPencil className="w-4/5 h-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 my-4 [&>*]:w-1/2">
              <SelectInput {...select[0]} />

              <SelectInput {...select[1]} />
            </div>

            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-xl flex gap-2">
              <IconBriefcaseFilled /> {profile.role} &bull; {profile.company}
            </div>
            <div className="text-lg flex items-center gap-2 text-mine-shaft-300">
              <IconMapPin className="h-5 w-5" />
              {profile.location}
            </div>
          </>
        )}

        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-3 flex justify-between ">
            About Me
            <ActionIcon
              onClick={() => handleEdit(1)}
              variant="subtle"
              color="brightSun.4"
              size="lg"
            >
              {edit[1] ? (
                <IconDeviceFloppy className="w-4/5 h-4/5" />
              ) : (
                <IconPencil className="w-4/5 h-4/5" />
              )}
            </ActionIcon>
          </div>
          {edit[1] ? (
            <Textarea
              autosize
              minRows={3}
              value={about}
              onChange={(event) => setabout(event.currentTarget.value)}
              placeholder="Enter About YourSelf"
            />
          ) : (
            <div className="text-sm text-mine-shaft-300 text-justify">
              {about}
            </div>
          )}
        </div>
        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-3 flex justify-between">
            Skills
            <ActionIcon
              onClick={() => setAddExp(true)}
              variant="subtle"
              color="brightSun.4"
              size="lg"
            >
              {edit[2] ? (
                <IconDeviceFloppy className="w-4/5 h-4/5" />
              ) : (
                <IconPencil className="w-4/5 h-4/5" />
              )}
            </ActionIcon>
          </div>

          {edit[2] ? (
            <TagsInput
              placeholder="Add Skill"
              splitChars={[",", " ", "|"]}
              value={skills}
              onChange={setskills}
            />
          ) : (
            <div className="flex flex-wrap gap-1">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill: string, index: number) => (
                  <div
                    className="bg-bright-sun-300/15 bg-opacity-15 rounded-3xl text-sm font-medium  text-bright-sun-400 px-3 py-2 "
                    key={index}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-5 flex justify-between">
            Experiance
            <div className="flex gap-2">
              <ActionIcon
                onClick={() => handleEdit(3)}
                variant="subtle"
                color="brightSun.4"
                size="lg"
              >
                <IconPlus className="w-4/5 h-4/5" />
              </ActionIcon>

              <ActionIcon
                onClick={() => handleEdit(3)}
                variant="subtle"
                color="brightSun.4"
                size="lg"
              >
                {edit[3] ? (
                  <IconDeviceFloppy className="w-4/5 h-4/5" />
                ) : (
                  <IconPencil className="w-4/5 h-4/5" />
                )}
              </ActionIcon>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {profile.experience.map((exp: any, index: any) => (
              <ExpCard key={index} {...exp} edit={edit[3]} />
            ))}
            { addExp &&  <ExpInput setEdit={setAddExp}  add />}
           
          </div>
        </div>

        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-5 flex justify-between">
            Certification
            <ActionIcon
              onClick={() => handleEdit(4)}
              variant="subtle"
              color="brightSun.4"
              size="lg"
            >
              {edit[4] ? (
                <IconDeviceFloppy className="w-4/5 h-4/5" />
              ) : (
                <IconPencil className="w-4/5 h-4/5" />
              )}
            </ActionIcon>
          </div>
          <div className="flex flex-col gap-4">
            {profile.certifications.map((cer: any, index: any) => (
              <CertificationCard key={index} {...cer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
