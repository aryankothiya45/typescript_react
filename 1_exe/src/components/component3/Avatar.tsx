import { JSX } from "react/jsx-runtime";

type AvatarProps = {
  IMAGEURL: string;
  ALT: string;
  WIDTH: number;
};

const Avatar = ({ IMAGEURL, ALT, WIDTH }: AvatarProps) : JSX.Element => {
  return <img src={IMAGEURL} alt={ALT} width={WIDTH} />;
};

export default Avatar;
