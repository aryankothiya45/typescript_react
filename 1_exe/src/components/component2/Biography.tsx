import { JSX } from "react/jsx-runtime";
import { CSSProperties } from "react";

type User = {
  NAME: string;
  INTRODUCTION: string;
  THEME: CSSProperties;
};

const user: User = {
  NAME: "Ada Lovelace",
  INTRODUCTION: "The first computer programmer",
  THEME: {
    backgroundColor: "#f3dbdb",
    color: "#333",
  },
};

const Biography = (): JSX.Element => {
  return (
    <>
      <div style={user.THEME}>
        <h1>{user.NAME}</h1>
        <p>{user.INTRODUCTION}</p>
      </div>
    </>
  );
};

export default Biography;
