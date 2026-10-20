import { styled } from "linaria/react";
import TextLink from "./TextLink";

const AboutContactLink = styled(TextLink)`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  min-height: 3.75rem;
  max-width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  background: #005650;
  color: #fff;
  font-family: "Red Hat Display", sans-serif;
  font-size: 1rem;
  line-height: 1.4;
  text-decoration: none;
  text-align: center;

  &:hover { background: #18724d; }
`;

export default AboutContactLink;
