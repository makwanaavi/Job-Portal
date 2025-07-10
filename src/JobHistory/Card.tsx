// import { Button, Divider, Text } from "@mantine/core";
// import {
//   IconBookmark,
//   IconBookmarkFilled,
//   IconCalendarMonth,
//   IconClockHour3,
// } from "@tabler/icons-react";
// import { Link } from "react-router-dom";

// const Card = (props: any) => {
//   return (
//     <Link
//       to={"/jobs"}
//       className="bg-mine-shaft-900  hover:bg-mine-shaft-800 duration-300 !w-72 p-5 flex flex-col gap-6 rounded-2xl border border-mine-shaft-700 hover:shadow-md hover:scale-[1.02] transform transition-all ease-in-out"
//     >
//       {/* Top Section */}
//       <div className="flex items-center gap-2">
//         <div className="flex gap-1 items-center justify-center">
//           <div className="p-2 bg-mine-shaft-800 rounded-lg">
//             <img
//               src={`/Icons/${props.company}.png`}
//               alt={props.company}
//               className="h-7 w-7 object-contain"
//             />
//           </div>
//           <div>
//             <div className="font-semibold text-mine-shaft-100">
//               {props.jobtitle}
//             </div>
//             <div className="text-xs text-mine-shaft-400">
//               {props.company} • {props.Applicants} Applicants
//             </div>
//           </div>
//         </div>
//         {props.save ? (
//           <IconBookmarkFilled className="text-bright-sun-400 hover:scale-110 transition-transform cursor-pointer" />
//         ) : (
//           <IconBookmark className="text-mine-shaft-100 hover:scale-110 transition-transform cursor-pointer" />
//         )}
//       </div>

//       {/* Tags */}
//       <div className="flex gap-2 flex-wrap">
//         <span className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-300 rounded-full text-xs font-medium">
//           {props.experiance}
//         </span>
//         <span className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-300 rounded-full text-xs font-medium">
//           {props.jobtype}
//         </span>
//         <span className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-300 rounded-full text-xs font-medium">
//           {props.location}
//         </span>
//       </div>

//       {/* Description */}
//       <Text
//         lineClamp={3}
//         className="!text-sm !text-justify !text-mine-shaft-300 leading-relaxed"
//       >
//         {props.decription}
//       </Text>

//       <Divider size="xs" color="mineShaft.7" />

//       {/* Footer */}
//       <div className="flex justify-between items-center text-sm">
//         <div className="font-semibold text-bright-sun-400">₹{props.pacage}</div>
//         {props.applied && (
//           <div className="flex items-center gap-1 text-mine-shaft-400">
//             <IconClockHour3 className="h-4 w-4" stroke={1.5} />
//             Applied 12 Days Ago
//           </div>
//         )}
//         {props.save && (
//           <div className="flex items-center gap-1 text-mine-shaft-400">
//             <IconClockHour3 className="h-4 w-4" stroke={1.5} />
//             Save 12 Days Ago
//           </div>
//         )}

//         {props.offered && (
//           <div className="flex items-center  text-mine-shaft-400">
//             {/* <IconClockHour3 className="h-4 w-4" stroke={1.5} /> */}
//             Offered 12 Days Ago
//           </div>
//         )}

//         {props.interviewing && (
//           <>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-1 text-mine-shaft-400">
//                 <IconClockHour3 className="h-4 w-4" stroke={1.5} />
//                 Posted 5 Days Ago
//               </div>

//               <div className="flex gap-1 text-sm items-center">
//                 <IconCalendarMonth className="h-4 w-4" stroke={1.5} />
//                 Sun, 25 Aug &bull; 10:00
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       {props.offered && (
//         <>
//           <div className="flex gap-2 -m-2 ">
//             <Button color="brightSun.4" variant="light">
//               Accept
//             </Button>
//             <Button color="brightSun.4" variant="outline">
//               Reject
//             </Button>
//           </div>
//         </>
//       )}
//     </Link>
//   );
// };

// export default Card;


import { Button, Divider, Text } from "@mantine/core";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarMonth,
  IconClockHour3,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Card = (props: any) => {
  return (
    <Link
      to={"/jobs"}
      className="bg-mine-shaft-900 hover:bg-mine-shaft-800 duration-300 !w-72 p-5 flex flex-col gap-5 rounded-2xl border border-mine-shaft-700 hover:shadow-md hover:scale-[1.02] transform transition-all ease-in-out"
    >
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-lg">
            <img
              src={`/Icons/${props.company}.png`}
              alt={props.company}
              className="h-7 w-7 object-contain"
            />
          </div>
          <div>
            <div className="font-semibold text-mine-shaft-100 text-sm leading-snug">
              {props.jobtitle}
            </div>
            <div className="text-xs text-mine-shaft-400">
              {props.company} • {props.Applicants} Applicants
            </div>
          </div>
        </div>
        {props.save ? (
          <IconBookmarkFilled className="text-bright-sun-400 hover:scale-110 transition-transform cursor-pointer" />
        ) : (
          <IconBookmark className="text-mine-shaft-100 hover:scale-110 transition-transform cursor-pointer" />
        )}
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {[props.experiance, props.jobtype, props.location].map((tag, i) => (
          <span
            key={i}
            className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-300 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <Text
        lineClamp={3}
        className="!text-sm  !text-mine-shaft-300 leading-relaxed"
      >
        {props.decription}
      </Text>

      <Divider size="xs" color="mineShaft.7" />

      {/* Footer */}
      <div className="flex justify-between items-start text-sm flex-wrap gap-2">
        <div className="font-semibold text-bright-sun-400">₹{props.pacage}</div>

        {props.applied && (
          <div className="flex items-center gap-1 text-mine-shaft-400">
            <IconClockHour3 className="h-4 w-4" stroke={1.5} />
            Applied 12 Days Ago
          </div>
        )}

        {props.save && (
          <div className="flex items-center gap-1 text-mine-shaft-400">
            <IconClockHour3 className="h-4 w-4" stroke={1.5} />
            Saved 12 Days Ago
          </div>
        )}

        {props.offered && (
          <div className="text-mine-shaft-400">Offered 12 Days Ago</div>
        )}

        {props.interviewing && (
          <div className="flex flex-col gap-1 text-mine-shaft-400">
            <div className="flex items-center gap-1">
              <IconClockHour3 className="h-4 w-4" stroke={1.5} />
              Posted 5 Days Ago
            </div>
            <div className="flex items-center gap-1">
              <IconCalendarMonth className="h-4 w-4" stroke={1.5} />
              Sun, 25 Aug • 10:00
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {props.offered && (
        <div className="flex gap-2 mt-2">
          <Button color="brightSun.4" variant="light" className="flex-1">
            Accept
          </Button>
          <Button color="brightSun.4" variant="outline" className="flex-1">
            Reject
          </Button>
        </div>
      )}
    </Link>
  );
};

export default Card;
