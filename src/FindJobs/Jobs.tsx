import React from "react";
import Sort from "./Sort";
import { Divider } from "@mantine/core";

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-xl font-semibold">Recommend Jobs</div>
        <Sort />
      </div>
    </div>
  );
};

export default Jobs;
