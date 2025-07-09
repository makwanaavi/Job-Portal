import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const ApplyJobPage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4'>
      <div className="flex gap-5">
          <Link to={"/jobs"} className="my-5 inline-block">
          <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" variant="light">
            Back
          </Button>

        </Link>
      </div>
    </div>
  );
};

export default ApplyJobPage;
