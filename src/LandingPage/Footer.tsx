import {
  IconAnchor,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import React from "react";
import { FooterLinks } from "../Data/Data";

const Footer = () => {
  return (
    <div className="mt-20 pb-5 w-[90%] mx-auto flex justify-between">
      <div>
        <div className="flex items-center gap-1 text-bright-sun-400 cursor-pointer active:scale-125 transition-all">
          <IconAnchor className="h-6 w-6" stroke={2.5} />
          <div className="text-2xl font-semibold ">JobHook</div>
        </div>
        <div className="text-mine-shaft-400 w-[30%] my-4">
          Job portal with user profiles, skill updates, certifications, work
          experience and admin job postings.
        </div>

        <div className="flex gap-4">
          <div className="bg-mine-shaft-900 p-2 rounded-full">
            <IconBrandInstagram
              className="text-bright-sun-400 cursor-pointer"
              size={26}
            />
          </div>
          <div className="bg-mine-shaft-900 p-2 rounded-full">
            <IconBrandYoutube
              className="text-bright-sun-400 cursor-pointer"
              size={26}
            />
          </div>
          <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer">
            <IconBrandTelegram className="text-bright-sun-400" size={26} />
          </div>
        </div>
      </div>
      {FooterLinks.map((item, index) => (
        <div key={index}>
          <div className="text-bright-sun-400 my-4 text-xl">{item.title}</div>
          {item.links.map((link, index) => (
            <div
              className="text-mine-shaft-400 text-sm my-2 cursor-pointer hover:text-bright-sun-400 hover:translate-x-2  transition-all"
              key={index}
            >
              {link}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
