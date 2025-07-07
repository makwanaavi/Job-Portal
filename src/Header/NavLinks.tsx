/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Link } from "react-router-dom";
const NavLinks = () => {
  const Links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Upload Jobs", url: "upload-jobs" },
    { name: "About Us", url: "about-us" },
  ];
  return (
    <div className="flex gap-12">
      {Links.map((link, index) => (
        <div>
          <Link key={index} to={link.url}>
            {link.name}
          </Link>
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
