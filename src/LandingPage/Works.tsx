/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Works = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold mb-4 text-mine-shaft-100 text-center">
        How it <span className="text-bright-sun-400">Works</span>
      </div>
      <div className="text-mine-shaft-200 text-center w-1/2 mx-auto">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today.
      </div>

      <div className="flex justify-around items-center">
        <div>
          <img
            src="/Working/Girl.png"
            alt="Girl image"
            className="h-[30rem] w-[30rem]"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-bright-sun-300 rounded-full p-4">
              <img
                src="/Working/Build your resume.png"
                alt=""
                className="h-12 w-12"
                
              />
            </div>
            <div>
              <div className="text-mine-shaft-100 text-xl">
                Your Resume Build Your Resume
              </div>
              <div className="text-mine-shaft-300">
                Create a standout resume with your skills.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-bright-sun-300 rounded-full p-4">
              <img
                src="/Working/Apply for job.png"
                alt=""
                className="h-12 w-12"
              />
            </div>
            <div>
              <div className="text-mine-shaft-100 text-xl"> Apply for Job</div>
              <div className="text-mine-shaft-300">
                Find and apply for jobs that match your skills.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <div className="bg-bright-sun-300 rounded-full p-4" >
              <img src="/Working/Get hired.png" alt="" className="h-12 w-12" />
            </div>
            <div>
              <div className="text-mine-shaft-100 text-xl"> Get Hired</div>
              <div className="text-mine-shaft-300">
                Connect with employers and start your new job.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
