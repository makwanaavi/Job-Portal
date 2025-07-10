import { IconAnchor } from "@tabler/icons-react";
import React from "react";
import SignUp from "../SignUpLogin/SignUp";
import { useLocation } from "react-router-dom";
import Login from "../SignUpLogin/Login";

const SignupPage = () => {
    const location = useLocation()
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] overflow-hidden'>
      <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-700 flex [&>*]:flex-shrink-0 ${location.pathname == '/signup'? '-translate-x-1/2' : 'translate-x-0'}`}>
      <Login/>
        <div className={`w-1/2 h-full bg-mine-shaft-900 ${location.pathname == "/signup"? "rounded-r-[200px]" : "rounded-l-[200px]"} flex items-center justify-center flex-col gap-5`}>
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
