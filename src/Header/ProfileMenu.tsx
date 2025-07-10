import { Menu, Avatar, Switch } from "@mantine/core";
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileCv,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout,
  IconLogout2,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const ProfileMenu = () => {
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <Menu
      opened={opened}
      onChange={setOpened}
      shadow="md "
      width={200}
    >
      <Menu.Target>
        <div className="flex items-center gap-1 active:scale-125 transition-all">
          <Avatar src="/avatar.png" alt="it's me" className="cursor-pointer" />
          <div className="hover:text-bright-sun-400 cursor-pointer">
            Avi Makwana
          </div>
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        <Menu.Item leftSection={<IconUserCircle size={16} />}>
        <Link to={"/profile"}>  Profile</Link>
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={16} />}>
          Message
        </Menu.Item>
        <Menu.Item leftSection={<IconFileCv size={16} />}>Resume</Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={16} />}
          rightSection={
            <Switch
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              size="md"
              color="dark.4"
              onLabel={<IconSun size={16} stroke={2.5} color="yellow" />}
              offLabel={<IconMoonStars size={16} stroke={2.5} color="cyan" />}
            />
          }
        >
          Dark Mode
        </Menu.Item>


       
        <Menu.Item color="red" leftSection={<IconLogout size={16} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
