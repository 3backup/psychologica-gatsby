import Button from "./button";
import { styled } from "linaria/react";

export const ButtonLightGreen = styled(Button)`
  background-color: #4abd7f;
  &:hover {
    background-color: #fff;
    border: none;
  }
  @media (max-width: 1024px) {
    min-width: 80%;
    width: 80%;
  }
`;
