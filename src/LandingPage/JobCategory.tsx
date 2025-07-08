import React from "react";
import { Carousel } from "@mantine/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { jobCategories } from "../Data/Data";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold mb-4 text-mine-shaft-100 text-center">
        Browes <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-mine-shaft-200 text-center w-1/2 mx-auto text-lg mb-10">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today.
      </div>

      <Carousel
        slideSize="22%"
        slideGap="xs"
        nextControlIcon={
          <IconArrowRight className="bg-bright-sun-400 rounded-full h-8 w-8 border border-bright-sun-400" />
        }
        previousControlIcon={
          <IconArrowLeft className="bg-bright-sun-400 rounded-full h-8 w-8 border border-bright-sun-400" />
        }
        withIndicators={false}
        emblaOptions={{
          loop: true,
          dragFree: true,
          align: "center",
        }}
        className="mt-16"
      >
        {jobCategories.map((job) => (
          <Carousel.Slide key={job.id}>
            <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3 cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
              <div className="p-3 bg-bright-sun-300 rounded-full">
                <img
                  src={job.icon}
                  alt={job.title + " Icon"}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">
                {job.title}
              </div>
              <div className="text-mine-shaft-300 text-sm text-center px-2">
                {job.description}
              </div>
              <div className="text-bright-sun-300 font-medium text-sm">
                {job.jobs}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
