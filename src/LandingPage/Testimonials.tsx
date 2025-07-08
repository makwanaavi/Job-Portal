import { Avatar, Rating } from "@mantine/core";
import React from "react";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold mb-4 text-mine-shaft-100 text-center">
        What<span className="text-bright-sun-400"> User</span>Says About Us?
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-bright-sun-400 w-[22%] p-4 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <Avatar
                src={testimonial.avatar}
                size={64}
                className="!h-14 !w-14"
              />
              <div>
                <div className="text-mine-shaft-100">{testimonial.name}</div>
                <div>
                  <Rating
                    fractions={2}
                    defaultValue={testimonial.rating}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="text-sm text-mine-shaft-300 mt-4">
              {testimonial.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
