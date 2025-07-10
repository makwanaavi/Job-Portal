import React from "react";
import PostedJob from "../PostedJob/PostedJob";

const PostedJobPage = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] px-4'>
      <div className="flex gap-5 justify-between">
        <PostedJob />
      </div>
    </div>
  );
};

export default PostedJobPage;
