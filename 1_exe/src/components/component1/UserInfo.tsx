import { JSX } from "react/jsx-runtime";

const NAME: string = "John Doe";
const EMAIL: string = "johntheDon@gmail.com";
const UserInfo = (): JSX.Element => {
  return (
    <div>
      <h2>{NAME}</h2>
      <p>{EMAIL}</p>
    </div>
  );
};

export default UserInfo;
