import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarWeek, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { DateInput, TimeInput } from "@mantine/dates";

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | null>(null);
    const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="bg-mine-shaft-900 hover:bg-mine-shaft-800 transition duration-300 p-6 rounded-2xl border border-mine-shaft-700 hover:shadow-lg hover:scale-[1.02] w-full sm:w-[320px] flex flex-col gap-4">
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

      {/* Bottom Info */}
      <div className="flex justify-between items-center text-sm">
        <div className="text-bright-sun-400 font-semibold">
          {props.expectedCtc}
        </div>
        <div className="flex items-center gap-1 text-mine-shaft-400">
          <IconMapPin className="h-4 w-4" stroke={1.5} />
          {props.location}
        </div>
      </div>

      <Divider size="xs" color="mineShaft.7" />

      {/* Buttons */}
      <div className="flex gap-2">
        <Link to="/talent-profile" className="w-1/2">
          <Button color="brightSun.4" variant="outline" fullWidth>
            Profile
          </Button>
        </Link>
        <div className="w-1/2">
          {props.posted ? (
            <Button
              onClick={open}
              color="brightSun.4"
              variant="light"
              fullWidth
              rightSection={<IconCalendarWeek className="w-5 h-5" />}
            >
              Schedule
            </Button>
          ) : (
            <Button color="brightSun.4" variant="light" fullWidth>
              Message
            </Button>
          )}
        </div>
      </div>
      <Modal opened={opened} title="Shedule InterView" onClose={close} centered>
        <div className="flex flex-col gap-4">
          <DateInput
            value={value}
            minDate={new Date()}
            onChange={setValue}
            label="Date Input"
            placeholder="Enter Date"
              clearable
          />

          <TimeInput label="Time" ref={ref} onClick={() => ref.current?.showPicker()} />
            <Button color="brightSun.4" variant="light" fullWidth>
            Schedule
            </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
