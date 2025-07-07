import React from "react";
import { Carousel } from "@mantine/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5 ">
      <div className="text-4xl font-semibold mb-4 text-mine-shaft-100 text-center">
        Browes <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-mine-shaft-200 text-center w-1/2 mx-auto text-lg mb-10   ">
        Explore diverse job opportunities tailored to your skills. 
        Start your career  journey today.
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
        className="mt-16 "
      >
        {/* Each card should be a Carousel.Slide */}
        <Carousel.Slide>
          {/* UI-UX Designer */}
          <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3   cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
            <div className="p-3 bg-bright-sun-300 rounded-full">
              <img
                src="/Category/UI-UX Designer.png"
                alt="UI/UX Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
              UI-UX Designer
            </div>
            <div className="text-mine-shaft-300 text-sm text-center px-2">
              Design user interfaces and enhance user experience
            </div>
            <div className="text-bright-sun-300 font-medium text-sm">
              800+ new job posted
            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          {/* Content Writing */}
          <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3 cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
            <div className="p-3 bg-bright-sun-300 rounded-full">
              <img
                src="/Category/Content Writing.png"
                alt="Content Writing Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
              Content Writing
            </div>
            <div className="text-mine-shaft-300 text-sm text-center px-2">
              Write and edit content for various platforms
            </div>
            <div className="text-bright-sun-300 font-medium text-sm">
              500+ new job posted
            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          {/* Data Entry */}
          <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3 cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
            <div className="p-3 bg-bright-sun-300 rounded-full">
              <img
                src="/Category/Data Entry.png"
                alt="Data Entry Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
              Data Entry
            </div>
            <div className="text-mine-shaft-300 text-sm text-center px-2">
              Input data into systems accurately and efficiently
            </div>
            <div className="text-bright-sun-300 font-medium text-sm">
              80K+ new job posted
            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          {/* Customer Support */}
          <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3 cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
            <div className="p-3 bg-bright-sun-300 rounded-full">
              <img
                src="/Category/Customer Support.png"
                alt="Customer Support Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
              Customer Support
            </div>
            <div className="text-mine-shaft-300 text-sm text-center px-2">
              Assist customers with inquiries and issues
            </div>
            <div className="text-bright-sun-300 font-medium text-sm">
              1.2K+ new job posted
            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          {/* Sales */}
          <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3 cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
            <div className="p-3 bg-bright-sun-300 rounded-full">
              <img
                src="/Category/Sales.png"
                alt="Sales Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
              Sales
            </div>
            <div className="text-mine-shaft-300 text-sm text-center px-2">
              Sell products and services to customers
            </div>
            <div className="text-bright-sun-300 font-medium text-sm">
              10K+ new job posted
            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          {/* Finance */}
          <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3 cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
            <div className="p-3 bg-bright-sun-300 rounded-full">
              <img
                src="/Category/Finance.png"
                alt="Finance Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
              Finance
            </div>
            <div className="text-mine-shaft-300 text-sm text-center px-2">
              Manage financial records and transactions
            </div>
            <div className="text-bright-sun-300 font-medium text-sm">
              700+ new job posted
            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          {/* Human Resource */}
          <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3 cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
            <div className="p-3 bg-bright-sun-300 rounded-full">
              <img
                src="/Category/Human Resource.png"
                alt="Human Resource Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
              Human Resource
            </div>
            <div className="text-mine-shaft-300 text-sm text-center px-1">
              Recruit, manage, and support company employees
            </div>
            <div className="text-bright-sun-300 font-medium text-sm">
              70K+ new job posted
            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          {/* Digital Marketing */}
          <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3 cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
            <div className="p-3 bg-bright-sun-300 rounded-full">
              <img
                src="/Category/Digital Marketing.png"
                alt="Digital Marketing Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
              Digital Marketing
            </div>
            <div className="text-mine-shaft-300 text-sm text-center px-2">
              Promote brands online with marketing strategies
            </div>
            <div className="text-bright-sun-300 font-medium text-sm">
              70K+ new job posted
            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          {/* Web Developer */}
          <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3 cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
            <div className="p-3 bg-bright-sun-300 rounded-full">
              <img
                src="/Category/Web Developer.png"
                alt="Web Developer Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
              Web Developer
            </div>
            <div className="text-mine-shaft-300 text-sm text-center px-2">
              Build and maintain websites for clients
            </div>
            <div className="text-bright-sun-300 font-medium text-sm">
              70K+ new job posted
            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          {/* Arts & Design */}
          <div className="flex flex-col items-center w-64 p-4 bg-white/5 border border-bright-sun-400 rounded-2xl shadow-md space-y-3 cursor-pointer hover:shadow-[0_0_5px_2px_#ffd149]">
            <div className="p-3 bg-bright-sun-300 rounded-full">
              <img
                src="/Category/Arts & Design.png"
                alt="Arts & Design Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
              Arts & Design
            </div>
            <div className="text-mine-shaft-300 text-sm text-center px-2">
              Create visual content for branding and media
            </div>
            <div className="text-bright-sun-300 font-medium text-sm">
              700+ new job posted
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default JobCategory;
