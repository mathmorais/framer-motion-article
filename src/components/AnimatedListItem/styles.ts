import styled from "@emotion/styled";
import { motion } from "framer-motion";

export type StyledAnimatedListItemProps = {
  customBackground?: string;
};

export const StyledAnimatedListItem = styled(
  motion.li
)<StyledAnimatedListItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 25px -10px rgba(0, 0, 0, 0.2);

  width: 100%;
  padding: 12px;
  background: ${(props) => props.customBackground ?? "#FFF"};
  border-radius: 4px;

  & button {
    all: unset;
    height: fit-content;
    border-radius: 3px;
    padding: 2px 10px;
    color: ${(props) =>
      `color-mix(in srgb, ${props.customBackground} 80%, #FFF)`};
  }
`;
