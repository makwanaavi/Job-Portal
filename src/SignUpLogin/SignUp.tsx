import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock, IconLogin2, IconSignature } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-3xl font-semibold ">Create Your Account</div>
      <TextInput
        leftSection={<IconSignature size={18} stroke={1.5} />}
        label="FullName"
        placeholder="Enter Your Name"
        withAsterisk
      />

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
      <PasswordInput
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Confirm Password"
        withAsterisk
        placeholder="Enter Password"
      />
       <Checkbox 
      label={<>I accept <Anchor>term and conditions</Anchor></>}
    />
    <Button leftSection={<IconLogin2/>}  variant="filled">Sign Up</Button>
    <div className="mx-auto">Have an account?<Link to={"/login"} className="text-bright-sun-400 hover:underline"> Login</Link> </div>
    </div>
  );
};

export default SignUp;
