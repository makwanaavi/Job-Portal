/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";

const Header = () => {
  return (
    <header className="w-full bg-mine-shaft-950/80 h-24 text-white flex justify-between items-center px-6">
      <div className="flex justify-center items-center gap-1 text-bright-sun-400 cursor-pointer">
        <IconAnchor className="h-8 w-8 " stroke={2.5} />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>
      <div className="flex gap-5 mr-24">
        <a href="#" className="hover:text-bright-sun-400">
          Find Job
        </a>
        <a href="#" className="hover:text-bright-sun-400">
          Find Talent
        </a>
        <a href="#" className="hover:text-bright-sun-400">
          Upload Jobs
        </a>
        <a href="#" className="hover:text-bright-sun-400">
          About Us
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-1">
          <Avatar src="avatar.png" alt="it's me" className="cursor-pointer" />
          <div className="hover:text-bright-sun-400 cursor-pointer">
            Avi Makwana
          </div>
        </div>

        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <Indicator color="brightSun.4"     size={9} offset={2} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>

        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <div className="p-2 flex items-center justify-center border border-dashed rounded-full cursor-pointer hover:border-bright-sun-400 hover:text-bright-sun-400">
          <Indicator
            inline
            processing
            color="yellow"
            size={9}
            offset={2}
          >
            <IconBell stroke={1.5} />
          </Indicator>
        </div> */
}
{
  /* <div className="border rounded-full p-2 border-dashed cursor-pointer hover:border-bright-sun-400 hover:text-bright-sun-400">
          <IconSettings stroke={1.5} />
        </div> */
}
