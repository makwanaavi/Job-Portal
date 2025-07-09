import { Divider, NumberInput, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";

const ApplyJobsCom = () => {
  return (
    <div className="w-2/3 mx-auto">
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center ">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              src={`/Icons/Google.png`}
              alt="Google"
              className="h-14 w-14 object-contain"
            />
          </div>
          <div>
            <div className="font-semibold text-2xl text-mine-shaft-100">
              Software Engineer
            </div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 Days Ago &bull; 48 Applicants
            </div>
          </div>
        </div>
      </div>
      <Divider my="xl" />

      <div className="text-xl font-semibold mb-5">Submit Your Application</div>
      <div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            label="FullName"
            placeholder="Enter Your Name"
            withAsterisk
          />
          <TextInput
            label="Email"
            placeholder="Enter Your Email"
            withAsterisk
          />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
          <NumberInput
            label="PhoneNumber"
            placeholder="Enter Phone Number"
            withAsterisk
            hideControls
            min={0}
      max={9999999999}
             clampBehavior="strict"
          />
          <TextInput
            label="Personal Website"
            placeholder="Enter URL"
            withAsterisk
          />
        </div>
      </div>
    </div>
  );
};

export default ApplyJobsCom;
