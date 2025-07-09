import { Divider } from "@mantine/core";
import Postjob from "../PostJobs/Postjob";

const PostJob = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4'>
      <div className="flex gap-5">
       <Postjob/>
      </div>
    </div>
  );
};

export default PostJob;
