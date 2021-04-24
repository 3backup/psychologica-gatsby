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
import "normalize.css";

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Top />
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
