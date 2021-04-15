import * as React from "react";
import { styled } from "linaria/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Top from "../components/Top";
import "normalize.css";

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Top />
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;
