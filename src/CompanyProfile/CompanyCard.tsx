import { ActionIcon } from "@mantine/core";
import {

  IconExternalLink,
} from "@tabler/icons-react";
import React from "react";

const CompanyCard = (props: any) => {
  return (
    <div className="flex justify-between bg-mine-shaft-900 items-center rounded-lg p-2">
      <div className="flex gap-3 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-lg">
          <img
            src={`/Icons/${props.name}.png`}
            alt={props.name}
            className="h-7 w-7 object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-semibold ">{props.name}</div>
          <div className="text-xs text-mine-shaft-400">
            {props.employees} Employees
          </div>
        </div>
      </div>
      <div>
        <ActionIcon
          variant="subtle"
          color="brightSun.4"
        >
          <IconExternalLink
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>
      </div>
    </div>
  );
};

export default CompanyCard;
