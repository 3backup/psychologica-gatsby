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
import HomeHelp from "../components/HomeHelp";
import HomeQuestions from "../components/HomeQuestions";
import "normalize.css";

const IndexPage = ({ data, props }) => {
  return (
    <>
      <Layout
        visableBackground
        pageTitle="Psycholog i psychoterapeuta w Rzeszowie – Renata Zuba | Psychologica"
        pageDescription="Psycholog kliniczny Renata Zuba. Psychoterapia i pomoc psychologiczna dla dorosłych w Rzeszowie oraz online. Sprawdź ofertę i umów konsultację."
        pageImageAlt="Psycholog kliniczny Renata Zuba w Rzeszowie"
        pageType="WebPage">
        <main>
          <Top />
          <HomeHelp />
          <Problem />
          <Offer />
          <Testimonial
            quote={data.datoCmsIndex.cytat}
            author={data.datoCmsIndex.author}
          />
          <AboutSection />
          <Covid />
          <Process title="Współpraca krok po kroku" />
          <HomeQuestions />
        </main>
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
