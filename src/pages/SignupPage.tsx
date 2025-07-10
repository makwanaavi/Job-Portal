import { IconAnchor } from "@tabler/icons-react";
import React from "react";
import SignUp from "../SignUpLogin/SignUp";

const SignupPage = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"]'>
      <div className="w-[100vw] h-[100vh] flex">
        <div className="w-1/2 h-full bg-mine-shaft-900 rounded-r-[200px] flex items-center justify-center flex-col gap-5">
          <div className="flex items-center gap-1 text-bright-sun-400">
            <IconAnchor className="h-16 w-16 " stroke={2.5} />
            <div className="text-6xl font-semibold ">JobHook</div>
          </div>
          <div className="text-3xl font-semibold text-mine-shaft-100">Find The Made For You...</div>
        </div>
      <SignUp/>
      </div>
    </div>  
  );
};

export default SignupPage;
