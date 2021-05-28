import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import AboutOffer from "../components/AboutOffer";
import SeeOffer from "../components/SeeOffer";
import OfferPrice from "../components/OfferPrice";
import Testimonial from "../components/Testimonial";
import { OfferSuperwizja } from "../components/OfferSuperwizja";
import Process from "../components/Process";
import TopOffer from "../components/TopOffer";

const oferta = ({ data }) => {
  return (
    <>
      <Layout
        pageTitle="Superwizja psychologa  - PSYCHOLOGICA - Psychoterapia i psychoedukacja Renata Zuba"
        pageDescription="Prowadzę superwizję indywidualną i grupową dla specjalistów psychoterapii uzależnień oraz dla innych profesjinalistów zajmujących się pomocą i wsparciem dla osób uzależnionych lub członków ich rodzin.">
        <TopOffer
          headerElement={data.datoCmsSupervision.supervisionTitle}
          subheaderText={data.datoCmsSupervision.supervisionSubheader}
        />
        <OfferSuperwizja />
        <Testimonial
          quote={data.datoCmsSupervision.supervisionQuote}
          author={data.datoCmsSupervision.supervisionAuthor}
        />
        <OfferPrice />
        <SeeOffer
          mainTitle={data.datoCmsSupervision.supervisionOfferTitle}
          subParagraph={data.datoCmsSupervision.supervisionOfferParagraph}
          mainCta={data.datoCmsSupervision.supervisionOfferCta}
          secondCta={data.datoCmsSupervision.supervisionOfferCtaCopy1}
          supervision
        />
        <AboutOffer />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query SuperwizjaQuery {
    datoCmsSupervision {
      supervisionTitle
      supervisionSubheader
      supervisionQuote
      supervisionAuthor
      supervisionOfferCta
      supervisionOfferCtaCopy1
      supervisionOfferParagraph
      supervisionOfferTitle
    }
  }
`;
export default oferta;
