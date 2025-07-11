import { Button, TextInput } from "@mantine/core";
import { SelectInput } from "./SelectInput";
import fields from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput = (props: any) => {
  const select = fields;
  const [IssuDate, setIssuDate] = useState<Date | null>(new Date());
  return (
    <div className="flex gap-3 flex-col">
      <div className="text-lg font-semibold">Add Certificates</div>

      <div>
        <div className="flex gap-10 my-4 [&>*]:w-1/2">
          <TextInput label="Title" withAsterisk placeholder="Enter Title" />

          <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 my-4 [&>*]:w-1/2">
          <MonthPickerInput
            maxDate={new Date()}
            label="Issu date"
            placeholder="Pick date"
            value={IssuDate}
            onChange={(value) => setIssuDate(value ? new Date(value) : null)}
            withAsterisk
          />
          <TextInput label="Certificate ID" withAsterisk placeholder="Enter ID" />
        </div>
      </div>
      <div className="flex gap-5">
        <Button
          color="green.4"
          variant="outline"
          onClick={() => props.setEdit(false)}
        >
          Save
        </Button>

        <Button
          color="red.8"
          variant="outline"
          onClick={() => props.setEdit(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;
