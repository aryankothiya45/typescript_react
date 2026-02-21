import ProfileCard from "./ProfileCard";
import { User } from "./type";
import { JSX } from "react/jsx-runtime";

const USER1: User = {
  NAME: "John Doe",
  EMAIL: "johndoe@gmail.com",
  FOLLOWERS: 1200,
  FOLLOWING: 300,
  POSTS: 75,
  IMAGEURL: "https://i.pravatar.cc/500",
};

const USER2: User = {
  NAME: "steve Smith",
  EMAIL: "stevesmith@gmail.com",
  FOLLOWERS: 800,
  FOLLOWING: 250,
  POSTS: 45,
  IMAGEURL: "https://i.pravatar.cc/400",
};

const Profile = (): JSX.Element => {
  return (
    <>
      <ProfileCard user={USER1} />
      <ProfileCard user={USER2} />
    </>
  );
};

export default Profile;
