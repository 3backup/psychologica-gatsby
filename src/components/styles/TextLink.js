import { Link } from "gatsby";
import { styled } from "linaria/react";

const TextLink = styled(Link)`
  color: #005650;
  text-decoration: underline;
  text-underline-offset: 0.2em;

  &:focus-visible {
    outline: 3px solid #4abd7f;
    outline-offset: 4px;
  }
`;

export default TextLink;
