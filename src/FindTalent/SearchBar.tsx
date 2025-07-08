import React, { useState } from "react";
import MultiInput from "../FindJobs/MultiSelectCreatable";
import { searchField } from "../Data/FindTalent";
import { Divider, RangeSlider } from "@mantine/core";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex px-6 py-8">
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
          //   labelAlwaysOn
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
