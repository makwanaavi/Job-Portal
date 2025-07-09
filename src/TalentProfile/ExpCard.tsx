import { IconBookmark } from "@tabler/icons-react";

const ExpCard = (exp:any) => {
  return (
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
              {exp.title}
            </div>
            <div className="text-sm text-mine-shaft-400">
              {exp.company} &bull; {exp.location}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm text-mine-shaft-200">{exp.startDate}</div>

          <div className="text-sm text-mine-shaft-200">{exp.endDate}</div>
        </div>
        {/* <IconBookmark className="text-bright-sun-400 hover:scale-110 transition-transform cursor-pointer" /> */}
      </div>

      <div className="text-sm text-mine-shaft-300 text-justify">
      {exp.description}
      </div>
    </div>
  );
};

export default ExpCard;
