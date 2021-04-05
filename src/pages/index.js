import * as React from "react";
import { styled } from "linaria/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Title = styled.p`
  font-family: sans-serif;
  font-size: 36px;
  color: #f15f79;
`;
// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Title>Hello world!</Title>;
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;
