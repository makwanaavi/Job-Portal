import {
  IconAnchor,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import React from "react";
import { FooterLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  // eslint-disable-next-line eqeqeq
  return location.pathname != "/signup" && location.pathname != "/login" ? <footer className="bg-mine-shaft-950 text-white font-['Poppins'] pt-20 pb-12">
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-10 mb-12">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-bright-sun-400 cursor-pointer active:scale-105 transition-transform duration-300">
            <IconAnchor className="h-7 w-7" stroke={2.5} />
            <h2 className="text-2xl font-semibold">JobHook</h2>
          </div>
          <p className="text-mine-shaft-400 mt-4 max-w-md text-sm leading-relaxed">
            Job portal with user profiles, skill updates, certifications, work
            experience and admin job postings.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <div className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-transform">
              <IconBrandInstagram className="text-bright-sun-400" size={26} />
            </div>
            <div className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-transform">
              <IconBrandYoutube className="text-bright-sun-400" size={26} />
            </div>
            <div className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-transform">
              <IconBrandTelegram className="text-bright-sun-400" size={26} />
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
          {FooterLinks.map((item, index) => (
            <div key={index}>
              <h4 className="text-bright-sun-400 mb-4 text-lg font-medium">
                {item.title}
              </h4>
              {item.links.map((link, idx) => (
                <div
                  key={idx}
                  className="text-mine-shaft-400 text-sm mb-2 cursor-pointer hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-200"
                >
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-mine-shaft-800 text-center text-sm text-mine-shaft-500 ">
        <div className="text-center text-mine-shaft-100 text-xl mt-12">
          Designed & Developed By{" "}
          <a
            href="https://github.com/makwanaavi"
            className="text-bright-sun-400"
          >
            Avi Makwana
          </a>
        </div>
      </div>
    </footer> :  <></>
};

export default Footer;
