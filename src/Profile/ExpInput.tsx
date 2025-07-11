import React, { useState } from "react";
import { SelectInput } from "./SelectInput";
import fields from "../Data/Profile";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const select = fields;
  const [desc, setdesc] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
  );
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const [EndDate, setEndDate] = useState<Date | null>(new Date());
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex gap-3 flex-col">
      <div className="text-lg font-semibold">
        {props.add ? "Add" : "Edit"} Experience
      </div>
      <div className="flex gap-10 my-4 [&>*]:w-1/2">
        <SelectInput {...select[0]} />

        <SelectInput {...select[1]} />
      </div>

      <SelectInput {...select[2]} />
      <Textarea
        autosize
        label="Summary"
        minRows={3}
        value={desc}
        onChange={(event) => setdesc(event.currentTarget.value)}
        placeholder="Enter About Summary"
        withAsterisk
      />
      <div className="flex gap-10 my-4 [&>*]:w-1/2">
        <MonthPickerInput
          maxDate={EndDate || undefined}
          label="Start date"
          placeholder="Pick date"
          value={startDate}
          onChange={(value) => setstartDate(value ? new Date(value) : null)}
          withAsterisk
        />
        <MonthPickerInput
          disabled={checked}
          withAsterisk
          minDate={startDate || undefined}
          label="End date"
          placeholder="End date"
          value={EndDate}
          onChange={(value) => setEndDate(value ? new Date(value) : null)}
        />
      </div>
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        label="Currently working here"
      />

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

export default ExpInput;
