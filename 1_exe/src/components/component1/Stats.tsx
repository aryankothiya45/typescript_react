import { JSX } from "react/jsx-runtime";

const FOLLOWERS: number = 1200;
const FOLLOWING: number = 300;
const POSTS: number = 75;

const Stats = (): JSX.Element => {
  return (
    <div>
      <p>Followers: {FOLLOWERS}</p>
      <p>Following: {FOLLOWING}</p>
      <p>Posts: {POSTS}</p>
    </div>
  );
};

export default Stats;
