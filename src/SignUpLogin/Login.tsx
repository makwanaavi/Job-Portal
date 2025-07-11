import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconAt,
  IconLock,
  IconLogin2,
  IconSignature,
} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
       <div className="flex gap-5">
          <Link to={"/"} className="my-5 inline-block">
          <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" variant="light">
            Back
          </Button>

        </Link>
      </div>
      <div className="text-3xl font-semibold ">Login Your Account</div>

      <TextInput
        leftSectionPointerEvents="none"
        leftSection={<IconAt size={16} />}
        label="Name"
        placeholder="Your email"
        withAsterisk
      />

      <PasswordInput
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Password"
        withAsterisk
        placeholder="Enter Password"
      />

      <Button leftSection={<IconLogin2 />} variant="filled">
        {" "}
        Login
      </Button>
      <div className="mx-auto">
        Don't have an account?
        <Link to={"/signup"} className="text-bright-sun-400 hover:underline">
          {" "}
          Signup
        </Link>{" "}
      </div>
    </div>
  );
};

export default Login;
