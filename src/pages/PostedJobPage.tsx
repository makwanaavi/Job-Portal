import React from "react";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDec from "../PostedJob/PostedJobDec";

const PostedJobPage = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] px-4'>
      <div className="flex gap-5">
        <PostedJob />
        <PostedJobDec/>
      </div>
    </div>
  );
};

export default PostedJobPage;
