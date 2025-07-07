/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavLinks = () => {
  const Links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Upload Jobs", url: "upload-jobs" },
    { name: "About Us", url: "about-us" },
  ];
  const location = useLocation();

  return (
    <div className="flex gap-12 h-full items-center text-white">
      {Links.map((link, index) => (
        <div
          key={index}
          className={`active:scale-125 transition-all ${
    
            location.pathname === "/" + link.url
              ? "border-bright-sun-400 text-bright-sun-400"
              : "text-white border-transparent"
          } border-t-[3px] h-full flex items-center`}
        >
          <Link to={`/${link.url}`}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;

{
  /* <a
        href="#"
        className="hover:text-bright-sun-400 active:scale-125 transition-all"
      >
        Find Job
      </a>
      <a
        href="#"
        className="hover:text-bright-sun-400 active:scale-125 transition-all"
      >
        Find Talent
      </a>
      <a
        href="#"
        className="hover:text-bright-sun-400 active:scale-125 transition-all"
      >
        Upload Jobs
      </a>
      <a
        href="#"
        className="hover:text-bright-sun-400 active:scale-125 transition-all"
      >
        About Us
      </a>    */
}
