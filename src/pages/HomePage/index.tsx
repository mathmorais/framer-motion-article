import { AnimatedList } from "../../components/AnimatedList";
import { AnimatedListItem } from "../../components/AnimatedListItem";
import { listItems } from "../../constants/items.constants";
import { StyledHomePageFrame } from "./styles";

export const HomePage = () => {
  return (
    <StyledHomePageFrame>
      <AnimatedList>
        {listItems.map((item) => (
          <AnimatedListItem {...item} customBackground="#3f9f38" />
        ))}
      </AnimatedList>
    </StyledHomePageFrame>
  );
};
