import { Avatar, Button, Divider, Text } from "@mantine/core";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IconHeart, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 hover:bg-mine-shaft-800 w-full  duration-300 w-fit p-6 flex flex-col gap-4 rounded-2xl border border-mine-shaft-700 hover:shadow-lg hover:scale-[1.02] transform transition-all ease-in-out">
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <Avatar src={`/${props.image}.png`} size="lg" radius="xl" />
          <div>
            <div className="font-semibold text-mine-shaft-100">
              {props.name}
            </div>
            <div className="text-xs text-mine-shaft-400">
              {props.role} • {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-bright-sun-400 hover:scale-110 transition-transform cursor-pointer" />
      </div>

      {/* Skills */}
      <div className="flex gap-2 flex-wrap">
        {props.topSkills.map((skill: string, i: number) => (
          <span
            key={i}
            className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-300 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* About */}
      <Text
        lineClamp={3}
        className="!text-sm text-mine-shaft-300 leading-relaxed"
      >
        {props.about}
      </Text>

      <Divider size="xs" color="mineShaft.7" />

      {/* Bottom section */}
      <div className="flex justify-between items-center text-sm">
        <div className="text-bright-sun-400 font-semibold">
          {props.expectedCtc}
        </div>
        <div className="flex items-center gap-1 text-mine-shaft-400">
          <IconMapPin className="h-4 w-4" stroke={1.5} />
          {props.location}
        </div>
      </div>
      <Divider color="mineShaft.7" size="xs" />

      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        <Link to={"/talent-profile"}>
          <Button color="brightSun.4" variant="outline" fullWidth>
            Profile
          </Button>
        </Link>
        <div>
          <Button color="brightSun.4" variant="light" fullWidth>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
