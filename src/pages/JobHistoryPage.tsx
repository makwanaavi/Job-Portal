import React from "react";
import JobHostory from "../JobHistory/JobHostory";

const JobHistoryPage = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] px-4'>
      <div className="my-5">
        <JobHostory/>
      </div>
    </div>
  );
};

export default JobHistoryPage;
