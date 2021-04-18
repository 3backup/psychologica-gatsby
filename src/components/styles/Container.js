import React from "react";
import { styled } from "linaria/react";

const Container = styled.div`
  width: 1230px;
  padding: 0 1.5rem;
  margin: 0 auto;
  @media (max-width: 1230px) {
    width: 1024px;
  }
`;

export default Container;
