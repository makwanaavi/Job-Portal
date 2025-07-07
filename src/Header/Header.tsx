/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  IconBell,
  IconBriefcaseFilled,
  IconSettings,
} from "@tabler/icons-react";
import { Avatar } from "@mantine/core";

const Header = () => {
  return (
    <header className="w-full bg-black h-28 text-white flex justify-between items-center px-6">
      <div className="flex justify-center items-center gap-3">
        <IconBriefcaseFilled
          className="h-10 w-10 text-white"
          fill="currentColor"
          stroke={1.5}
        />
        <div className="text-3xl font-semibold text-white">iJOB</div>
      </div>
      <div className="flex gap-8 mr-24">
        <a href="#">Find Job</a>
        <a href="#">Find Talent</a>
        <a href="#">Upload Jobs</a>
        <a href="#">About Us</a>
      </div>
      <div className="flex gap-6 items-center">
        <IconBell />
        <div className="flex items-center gap-2">
          <Avatar src="avatar.png" alt="it's me" />
          <div>Avi Makwana</div>
        </div>
        <IconSettings />
      </div>
    </header>
  );
};

export default Header;
    