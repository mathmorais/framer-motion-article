import { StyledAnimatedListItem, StyledAnimatedListItemProps } from "./styles";

type AnimatedListItemProps = {} & StyledAnimatedListItemProps;

export const AnimatedListItem = ({ ...props }: AnimatedListItemProps) => {
  return <StyledAnimatedListItem {...props} />;
};
