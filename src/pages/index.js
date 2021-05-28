import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
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
      <Layout
        visableBackground
        pageTitle="Pomoc psychologiczna Rzeszów - PSYCHOLOGICA - Psychoterapia i psychoedukacja Renata Zuba"
        pageDescription="Oferuje pomoc psychologiczną, psychoterapie i psychoedukacje w Rzeszowie. Nazywam się Renata Zuba i jestem psychologiem z wieloletnim doświadczeniem.">
        <Top />
        <Problem />
        <Offer />
        <Testimonial
          quote={data.datoCmsIndex.cytat}
          author={data.datoCmsIndex.author}
        />
        <AboutSection />
        <Covid />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query StronaGlownaQuery {
    datoCmsIndex {
      cytat
      author
    }
  }
`;

export default IndexPage;
