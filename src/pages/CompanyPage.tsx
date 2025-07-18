import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilarCompanyes from "../CompanyProfile/SimilarCompanyes";

const CompanyPage = () => {
  return (
    <div className="flex">
      <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] p-4'>
        <Link to={"/jobs"} className="my-5 inline-block">
          <Button
            leftSection={<IconArrowLeft size={20} />}
            color="brightSun.4"
            variant="light"
          >
            Back
          </Button>
        </Link>
        <div className="flex gap-5 justify-between">
          <Company />
          <SimilarCompanyes />
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
