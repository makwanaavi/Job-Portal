import React from "react";
import MultiInput from "./MultiSelectCreatable";
import { dropdwonData } from "../Data/Data";
import { Divider } from "@mantine/core";

const SearchBar = () => {
  return (
    <div className="flex px-6 py-8">
      {dropdwonData.map((item, index) => (
        <>
          <div className="w-1/5" key={index}>
            <MultiInput {...item} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </>
      ))}
    </div>
  );
};

export default SearchBar;
