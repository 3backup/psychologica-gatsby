import * as React from "react";
import { styled } from "linaria/react";
import Layout from "../components/Layout";

const Title = styled.p`
  font-family: sans-serif;
  font-size: 36px;
  color: #f15f79;
`;
// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <Title>Hello world!</Title>;
      </Layout>
    </>
  );
};

export default IndexPage;
