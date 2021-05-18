import { styled } from "linaria/react";

const Container = styled.div`
  box-sizing: border-box;
  width: 1230px;
  margin: 0 auto;
  @media (max-width: 1230px) {
    width: 1024px;
    padding: 0 1.5rem;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default Container;
