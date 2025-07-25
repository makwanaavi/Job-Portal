/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu";

const Header = () => {
  const location = useLocation();
  return location.pathname != "/signup" && location.pathname != "/login" ? <header className="w-full bg-mine-shaft-950 h-24 text-white flex justify-between items-center px-6  font-['poppins']">
        <div className="flex justify-center items-center gap-1 text-bright-sun-400 cursor-pointer active:scale-125 transition-all">
          <IconAnchor className="h-8 w-8 " stroke={2.5} />
          <div className="text-3xl font-semibold ">JobHook</div>
        </div>
        <NavLinks />
        {/* {NavLinks()} */}
        <div className="flex gap-3 items-center">
          
          <ProfileMenu/>

          <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer active:scale-125 transition-all">
            <Indicator color="brightSun.4" size={9} offset={2} processing>
              <IconBell stroke={1.5} />
            </Indicator>
          </div>

          <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer active:scale-125 transition-all">
            <IconSettings stroke={1.5} />
          </div>
        </div>
      </header> :  <></>
};

export default Header;
