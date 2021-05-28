import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Footer from "../components/Footer";

import AboutCopy from "../components/AboutCopy";
import WhatIsImportant from "../components/WhatIsImportant";
import SeeOffer from "../components/SeeOffer";
import Skills from "../components/Skills";
import Process from "../components/Process";
import TopAbout from "../components/TopAbout";

const oMnie = ({ data }) => {
  return (
    <>
      <Layout
        visableHeader
        pageTitle="Psycholog Rzeszów - Renata Zuba - PSYCHOLOGICA - Psychoterapia i psychoedukacja"
        pageDescription="Jestem psychologiem klinicznym i psychoterapeutą z wieloletnim doświadczeniem w prowadzeniu psychoterapii i pomocy psychologicznej na terenie Rzeszowa.">
        <TopAbout />
        <AboutCopy />
        <Skills />
        <WhatIsImportant />
        <SeeOffer
          mainTitle={data.datoCmsAboout.checkoffer}
          subParagraph={data.datoCmsAboout.offerDesc}
          mainCta={data.datoCmsAboout.offertFirstcta}
          secondCta={data.datoCmsAboout.offerctaSecond}
          supervision
        />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query AboutPageQuery {
    datoCmsAboout {
      offertFirstcta
      offerctaSecond
      offerDesc
      checkoffer
    }
  }
`;
export default oMnie;
