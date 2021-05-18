import * as React from "react";
import { styled } from "linaria/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Covid from "../components/Covid";
import Top from "../components/Top";
import AboutSection from "../components/AboutSection";
import Testimonial from "../components/Testimonial";
import Offer from "../components/Offer";
import Problem from "../components/Problem";
import "normalize.css";

const IndexPage = ({ data, props }) => {
  return (
    <>
      <Layout visableBackground>
        <Top />
        <Problem />
        <Offer />
        <Testimonial />
        <AboutSection />
        <Covid />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;
