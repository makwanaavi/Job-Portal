import Profile from "../Profile/Profile";
import { Divider } from "@mantine/core";

const ProfilePage = (props: any) => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] '>
      <Divider mx="md" mb="xl" />
      <Profile />
    </div>
  );
};

export default ProfilePage;
