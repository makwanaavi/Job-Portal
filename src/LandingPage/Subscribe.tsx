import { Button, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import React from "react";

const Subscribe = () => {
  const icon = <IconAt size={16} />;
  return (
    <div className="mt-20 bg-mine-shaft-900 mx-14 p-8 flex items-center justify-between rounded-xl">
      <div className="text-4xl font-semibold text-mine-shaft-100">
        Never Wants to Miss Any{" "}
        <span className="text-bright-sun-400">Job News?</span>
      </div>

      <div className="flex items-center justify-center gap-4 bg-mine-shaft-900 ">
        <TextInput
          size="xl"
          rightSectionPointerEvents="none"
          placeholder="your@email.com"
        />
        <Button size="xl" color="brightSun.4" variant="filled">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
