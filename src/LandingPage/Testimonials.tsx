import { Avatar } from "@mantine/core";
import React from "react";
import { Rating } from "@mantine/core";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold mb-4 text-mine-shaft-100 text-center">
        What<span className="text-bright-sun-400"> User</span>Says About Us?
      </div>
    <div className="flex items-center">
      <div className="border border-bright-sun-400 w-[22%] p-4 mt-12 mx-auto rounded-xl" >
        <div className="flex items-center gap-4">
          <Avatar src="avatar-9.png" size={64} className="!h-14 !w-14" />
          <div>
            <div className="text-mine-shaft-100" >Shivam Patel</div>
            <div>
              <Rating fractions={2} defaultValue={2.33333333} />
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300 mt-4">
          This job portal made job search easy and quick. Recommended to all job
          seekers!
        </div>
      </div>

       <div className="border border-bright-sun-400 w-[22%] p-4 mt-12 mx-12 rounded-xl" >
        <div className="flex items-center gap-4">
          <Avatar src="avatar-9.png" size={64} className="!h-14 !w-14" />
          <div>
            <div className="text-mine-shaft-100" >Shivam Patel</div>
            <div>
              <Rating fractions={2} defaultValue={2.33333333} />
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300 mt-4">
          This job portal made job search easy and quick. Recommended to all job
          seekers!
        </div>
      </div>

         <div className="border border-bright-sun-400 w-[22%] p-4 mt-12 mx-auto rounded-xl" >
        <div className="flex items-center gap-4">
          <Avatar src="avatar-9.png" size={64} className="!h-14 !w-14" />
          <div>
            <div className="text-mine-shaft-100" >Shivam Patel</div>
            <div>
              <Rating fractions={2} defaultValue={2.33333333} />
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300 mt-4">
          This job portal made job search easy and quick. Recommended to all job
          seekers!
        </div>
      </div>

         <div className="border border-bright-sun-400 w-[22%] p-4 mt-12 mx-auto rounded-xl" >
        <div className="flex items-center gap-4">
          <Avatar src="avatar-9.png" size={64} className="!h-14 !w-14" />
          <div>
            <div className="text-mine-shaft-100" >Shivam Patel</div>
            <div>
              <Rating fractions={2} defaultValue={2.33333333} />
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300 mt-4">
          This job portal made job search easy and quick. Recommended to all job
          seekers!
        </div>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
