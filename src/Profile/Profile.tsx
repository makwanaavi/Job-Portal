import { ActionIcon, Divider } from "@mantine/core";
import {
  IconBriefcaseFilled,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
} from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertificationCard from "./CertificationCard";
import { profile } from "../Data/FindTalent";
import { useState } from "react";
import { SelectInput } from "./SelectInput";
import fields from "../Data/Profile";

const Profile = () => {
  const select = fields;
  const [edit, setEdit] = useState([false, false, false, false, false]);

  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
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
          <div className="text-2xl font-semibold mb-3">About Me</div>
          <div className="text-sm text-mine-shaft-300 text-justify">
            {profile.about}
          </div>
        </div>
        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-3">Skills</div>
          <div className="flex flex-wrap gap-1">
            <div className="flex flex-wrap gap-3">
              {profile.skills.map((skill: string, index: number) => (
                <div
                  className="bg-bright-sun-300/15 bg-opacity-15 rounded-3xl text-sm font-medium  text-bright-sun-400 px-3 py-2 "
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
            {profile.experience.map((exp: any, index: any) => (
              <ExpCard key={index} {...exp} />
            ))}
          </div>
        </div>

        <Divider size="xs" my="xl" />

        <div className="px-1">
          <div className="text-2xl font-semibold mb-5">Certification</div>
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
