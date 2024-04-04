import { FC, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}
const Heading: FC<HeadingProps> = ({ children }) => {
  return <h1 className="text-[60px] sm:text-[80px]">{children}</h1>;
};

export default Heading;
