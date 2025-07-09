import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobsCom = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    setInterval(() => {
      x--;
      setSec(x);

      if (x == 0) navigate("/");
    }, 1000);
  };
  return (
    <>
      <div className="w-2/3 mx-auto">
        <LoadingOverlay className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "brightSun.4", type: "bars" }}
        />
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

        <div className="text-xl font-semibold mb-5">
          Submit Your Application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              label="FullName"
              placeholder="Enter Your Name"
              withAsterisk
              readOnly={preview}
              variant={preview ? "variant" : "default"}
              className={`${
                preview
                  ? "text-mine-shaft-300 font-semibold [&_input]:!text-bright-sun-300"
                  : " "
              }`}
            />
            <TextInput
              label="Email"
              placeholder="Enter Your Email"
              withAsterisk
              readOnly={preview}
              variant={preview ? "variant" : "default"}
              className={`${
                preview
                  ? "text-mine-shaft-300 font-semibold [&_input]:!text-bright-sun-300"
                  : " "
              }`}
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
              variant={preview ? "variant" : "default"}
              className={`${
                preview
                  ? "text-mine-shaft-300 font-semibold [&_input]:!text-bright-sun-300"
                  : " "
              }`}
            />
            <TextInput
              label="Personal Website"
              placeholder="Enter URL"
              withAsterisk
              variant={preview ? "variant" : "default"}
              className={`${
                preview
                  ? "text-mine-shaft-300 font-semibold [&_input]:!text-bright-sun-300"
                  : " "
              }`}
            />
          </div>

          <FileInput
            leftSection={<IconPaperclip stroke={1.5} />}
            label="Attach Your CV"
            placeholder="Your CV"
            leftSectionPointerEvents="none"
            withAsterisk
            variant={preview ? "variant" : "default"}
            className={`${
              preview
                ? "text-mine-shaft-300 font-semibold [&_input]:!text-bright-sun-300"
                : " "
            }`}
          />
          <Textarea
            placeholder="Type Something About Your Self..."
            label="Cover Letter"
            autosize
            minRows={2}
            maxRows={4}
            resize="vertical"
            withAsterisk
            variant={preview ? "variant" : "default"}
            className={`${
              preview
                ? "text-mine-shaft-300 font-semibold [&_input]:!text-bright-sun-300"
                : " "
            }`}
          />

          {!preview && (
            <Button onClick={handlePreview} color="brightSun.4" variant="light">
              Preview
            </Button>
          )}

          {preview && (
            <div className="flex gap-10 [&_*]w-1/2">
              <Button
                fullWidth
                onClick={handlePreview}
                color="brightSun.4"
                variant="outline"
              >
                Edit
              </Button>
              <Button
                fullWidth
                onClick={handleSubmit}
                color="brightSun.4"
                variant="light"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>

      <Notification
        
        icon={<IconCheck size={20} />}
        color="teal"
        title="Application Submited !"
        mt="md"
        withCloseButton={false}
        withBorder={true}
        className={`!border-bright-sun-400 !z-[1001] !fixed !top-0 left-[40%]  transition duration-300 ease-in-out ${
          submit ? "translate-y-0" : "-translate-y-20"
        }`}
      >
        Redirect To Find Jobs In {sec} seconds...
      </Notification>
    </>
  );
};

export default ApplyJobsCom;
