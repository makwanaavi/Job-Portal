import React, { useState } from "react";
import MultiInput from "../FindJobs/MultiSelectCreatable";
import { searchField } from "../Data/FindTalent";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex px-6 py-8 !text-mine-shaft-100 gap-4">
      <div className="flex items-center">
        <div className="bg-mine-shaft-900 rounded-full text-bright-sun-400 mr-2 p-1">
          <IconUserCircle size={24} />
        </div>
        <Input variant="unstyled" placeholder="Talent Name" className="[&_input]:!placeholder-mine-shaft-100" />
      </div>
      {searchField.map((item, index) => (
        <>
          <div className="w-1/5" key={index}>
            <MultiInput {...item} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 [&_.mantaine-Slider-label]:!translate-y-10">
        <div className="flex justify-between text-sm">
          <div>Salary</div>
          <div>
            &#8377; {value[0]} LPA - &#8377; {value[1]} LPA
          </div>
        </div>

        <RangeSlider
          size={"xs"}
          color="brightSun.4"
          value={value}
          onChange={setValue}
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
