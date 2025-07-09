import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
import DOMPurify from "dompurify";
const JobDec = () => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className="w-2/3 ">
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center ">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              src={`/Icons/Google.png`}
              alt="Google"
              className="h-14 w-14 object-contain"
            />
          </div>
          <div>
            <div className="font-semibold text-2xl text-mine-shaft-100">
              Software Engineer
            </div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 Days Ago &bull; 48 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <Link to={"/apply-job"}>
            <Button color="brightSun.4" variant="light" size="sm">
              Apply
            </Button>
          </Link>
          <IconBookmark className=" cursor-pointer text-bright-sun-400" />
        </div>
      </div>
      <Divider size="xs" my="xl" />

      <div className="flex justify-between mt-5">
        {card.map((item: any, index: any) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              color="brightSun.4"
              className="!h-12 !w-12 "
              variant="light"
              size="lg"
              aria-label="Settings"
              radius="xs"
            >
              <item.icon className="h-4/5  w-4/5" stroke={1.5} />
            </ActionIcon>

            <div className="text-mine-shaft-300 text-sm">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider size="xs" my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <ActionIcon
              key={index}
              color="brightSun.4"
              className="!h-fit !w-fit font-medium !text-sm"
              variant="light"
              aria-label="Settings"
              radius="xl"
              p={"xs"}
            >
              {skill}
            </ActionIcon>
          ))}
        </div>
      </div>

      <Divider size="xs" my="xl" />

      <div
        className="[&_h4]:!text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400  [&_li]:mb-1 [&_h4]:!my-5 [&_h4]:!font-semibold [&_h4]:!text-mine-shaft-100 [&_p]:text-justify "
        dangerouslySetInnerHTML={{ __html: data }}
      />
      <Divider size="xs" my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-3 items-center ">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img src={`/Icons/Google.png`} alt="Google" className="h-8" />
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-lg text-mine-shaft-100">
                Google
              </div>
              <div className="text-lg text-mine-shaft-300">10k+ Employees</div>
            </div>
          </div>
          <Link to={"/company"}>
            <Button color="brightSun.4" variant="light">
              Company Page
            </Button>
          </Link>
        </div>
        <div className="text-mine-shaft-300 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          dolorem! Praesentium dolorum deserunt atque eaque temporibus fuga
          aliquid in, asperiores fugiat magni illo quam fugit aspernatur dolorem
          hic consequatur assumenda illum iusto sint. Quisquam praesentium quod
          earum sapiente blanditiis accusantium sequi laborum ipsa eaque
          adipisci?
        </div>
      </div>
    </div>
  );
};

export default JobDec;
