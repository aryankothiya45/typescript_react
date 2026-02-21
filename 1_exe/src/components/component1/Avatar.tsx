import { JSX } from "react/jsx-runtime";

const IMAGEURL: string = "https://i.pravatar.cc/300";
const WIDTH: number = 150;

const Avatar = ():JSX.Element => {
  return <img src={IMAGEURL} alt="User Avatar" width={WIDTH} />;
};
export default Avatar;
