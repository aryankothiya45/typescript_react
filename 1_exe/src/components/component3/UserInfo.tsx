import { JSX } from "react/jsx-runtime";

type UserInfoProps = {
  NAME: string;
  EMAIL: string;
};

const UserInfo = ({ NAME, EMAIL }: UserInfoProps): JSX.Element => {
  return (
    <div>
      <h2>{NAME}</h2>
      <p>{EMAIL}</p>
    </div>
  );
};

export default UserInfo;
