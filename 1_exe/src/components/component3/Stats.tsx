import { JSX } from "react/jsx-runtime";

type StatsProps = {
  FOLLOWERS: number;
  FOLLOWING: number;
  POSTS: number;
};

const Stats = ({ FOLLOWERS, FOLLOWING, POSTS }: StatsProps): JSX.Element => {
  return (
    <div>
      <p>Followers: {FOLLOWERS}</p>
      <p>Following: {FOLLOWING}</p>
      <p>Posts: {POSTS}</p>
    </div>
  );
};

export default Stats;
