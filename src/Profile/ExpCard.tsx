import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";

const ExpCard = (props: any) => {
  const [edit, setedit] = useState(false);
  return !edit ? (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-lg">
            <img
              src={`/Icons/Google.png`}
              alt="Google"
              className="h-7 w-7 object-contain"
            />
          </div>
          <div>
            <div className="font-semibold text-mine-shaft-100">
              {props.title}
            </div>
            <div className="text-sm text-mine-shaft-400">
              {props.company} &bull; {props.location}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm text-mine-shaft-200">{props.startDate}</div>

          <div className="text-sm text-mine-shaft-200">{props.endDate}</div>
        </div>
        {/* <IconBookmark className="text-bright-sun-400 hover:scale-110 transition-transform cursor-pointer" /> */}
      </div>

      <div className="text-sm text-mine-shaft-300 text-justify">
        {props.description}
      </div>
      {props.edit && (
        <div className="flex gap-5">
          <Button color="brightSun.4" variant="outline" onClick={() => setedit(true)}>
            Edit
          </Button>

          <Button color="red.8" variant="outline">
            Delete
          </Button>
        </div>
      )}
    </div>
  ) : (
    <ExpInput setedit={setedit}/>
  );
};

export default ExpCard;
