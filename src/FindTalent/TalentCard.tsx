// import { Avatar, Divider, Text } from "@mantine/core";
// import { IconBookmark, IconClockHour3, IconHeart, IconMapPin } from "@tabler/icons-react";
// import React from "react";

// const TalentCard = (props: any) => {
//   return (
//     <div className="bg-mine-shaft-900 w-96 p-4 flex flex-col gap-3 border border-bright-sun-400 rounded-xl hover:shadow-[0_0_5px_1px_yellow]  !shadow-bright-sun-400">
//       <div className="flex justify-between">
//         <div className="flex gap-2 items-center">
//           <div className="p-2 bg-mine-shaft-800 rounded-full">
//             <Avatar src={`/avatar.png`} className="h-7 rounded-full" size="lg" />
//           </div>
//           <div>
//             <div className="font-semibold">{props.name}</div>
//             <div className="text-xs text-mine-shaft-300">
//               {props.role} &bull; {props.company}
//             </div>
//           </div>
//         </div>
//         <div>
//           <IconHeart className="text-mine-shaft-400 cursor-pointer" />
//         </div>
//       </div>
//       <div className="flex gap-2">
//         <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-md text-sm">
//           {props.topSkills[0]}
//         </div>
//         <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-md text-sm">
//           {props.topSkills[1]}
//         </div>
//         <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-md text-sm">
//           {props.topSkills[2]}
//         </div>
//       </div>
//       <div className="">
//         <Text
//           lineClamp={2}
//           className="!text-sm text-wrap !text-mine-shaft-300"
//         >
//           {props.about}
//         </Text>
//       </div>
//       <Divider size="xs" color="mineShaft.7" />
//       <div className="flex justify-between">
//         <div className="font-semibold text-mine-shaft-200">
//          {props.expectedCtc}
//         </div>
//         <div className="flex items-center gap-1 text-xs text-mine-shaft-400">
//           <IconMapPin stroke={1.5} className="h-5 w-5" />{" "}
//           {props.location} 
//         </div>
//       </div>
//     </div>
//   );
// };



// export default TalentCard;


import { Avatar, Divider, Text } from "@mantine/core";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IconBookmark, IconClockHour3, IconHeart, IconMapPin } from "@tabler/icons-react";
import React from "react";

const TalentCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 hover:bg-mine-shaft-800 transition-colors duration-300 w-full p-6 flex flex-col gap-4 rounded-2xl border border-mine-shaft-700 hover:shadow-lg hover:scale-[1.02] transform transition-all ease-in-out">
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <Avatar src={`/avatar.png`} size="lg" radius="xl" />
          <div>
            <div className="font-semibold text-mine-shaft-100">{props.name}</div>
            <div className="text-xs text-mine-shaft-400">
              {props.role} • {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-bright-sun-400 hover:scale-110 transition-transform cursor-pointer" />
      </div>

      {/* Skills */}
      <div className="flex gap-2 flex-wrap">
        {props.topSkills.map((skill: string, i: number) => (
          <span key={i} className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-300 rounded-full text-xs font-medium">
            {skill}
          </span>
        ))}
      </div>

      {/* About */}
      <Text lineClamp={3} className="!text-sm text-mine-shaft-300 leading-relaxed">
        {props.about}
      </Text>

      <Divider size="xs" color="mineShaft.7" />

      {/* Bottom section */}
      <div className="flex justify-between items-center text-sm">
        <div className="text-bright-sun-400 font-semibold">{props.expectedCtc}</div>
        <div className="flex items-center gap-1 text-mine-shaft-400">
          <IconMapPin className="h-4 w-4" stroke={1.5} />
          {props.location}
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
