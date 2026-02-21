import { JSX } from "react";

const Panel = ({
  title,
  isActive,
  onShow,
  children,
}: {
  title: string;
  isActive: boolean;
  onShow: () => void;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div>
      <h3 onClick={onShow}>{title}</h3>
      {isActive && <p>{children}</p>}
    </div>
  );
};

export default Panel;
