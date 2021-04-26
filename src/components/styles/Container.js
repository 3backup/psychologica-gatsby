import { styled } from "linaria/react";

const Container = styled.div`
  box-sizing: border-box;
  width: 1230px;
  padding: 0 1.5rem;
  margin: 0 auto;
  @media (max-width: 1230px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default Container;
