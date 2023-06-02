import { ReactNode } from "react";
import { StyledAnimatedList } from "./styles";

type AnimatedListProps = {
  children: ReactNode;
};

export const AnimatedList = ({ children }: AnimatedListProps) => {
  return <StyledAnimatedList>{children}</StyledAnimatedList>;
};
