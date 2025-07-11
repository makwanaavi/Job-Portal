import { ActionIcon } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

const CertificationCard = (props: any) => {
  return (
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
          <div className="font-semibold text-mine-shaft-100">{props.name}</div>
          <div className="text-sm text-mine-shaft-400">{props.issuer}</div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <div className="text-sm text-mine-shaft-200">{props.issueDate}</div>
            <div className="text-sm text-mine-shaft-200">{props.certificateId}</div>
          </div>

         { props.edit && <ActionIcon color="red.8" variant="subtle" size='lg'>
            <IconTrash className="w-4/5 w-4/5" stroke={1.8} />
          </ActionIcon>}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
