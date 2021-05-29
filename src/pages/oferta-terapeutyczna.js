import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AboutOffer from "../components/AboutOffer";
import SeeOfferTerap from "../components/SeeOfferTerap";
import OfferPrice from "../components/OfferPrice";
import Testimonial from "../components/Testimonial";
import { graphql } from "gatsby";
import { OfferPsychoterapia } from "../components/OfferPsychoterapia";
import { OfferPomoc } from "../components/OfferPomoc";
import Process from "../components/Process";
import TopOffer from "../components/TopOffer";

// markup
const oferta = ({ data }) => {
  return (
    <>
      <Layout
        pageTitle="Oferta terapeutyczna Rzeszów - PSYCHOLOGICA - Psychoterapia i psychoedukacja Renata Zuba"
        pageDescription="Prowadzę zarówno psychoterapię, jak i pomoc psychologiczną w Rzeszowie skoncentrowaną na poszukiwaniu rozwiązań problemów oraz wspieraniu w radzeniu sobie z trudnościami i wyzwaniami.">
        <TopOffer
          headerElement={
            data.datoCmsOfertaTerapeutyczna.ofertaTerapeutycznaSekcjaGRnaTytu
          }
          subheaderText={
            data.datoCmsOfertaTerapeutyczna
              .ofertaTerapeutycznaSekcjaGRnaTytuCopy1
          }
        />
        <OfferPsychoterapia />
        <Testimonial
          quote={data.datoCmsOfertaTerapeutyczna.quoteMaincontent}
          author={data.datoCmsOfertaTerapeutyczna.quoteAutor}
        />
        <OfferPomoc />
        <OfferPrice />
        <SeeOfferTerap />
        <AboutOffer />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query TerapeutycznaQuery {
    datoCmsOfertaTerapeutyczna {
      ofertaTerapeutycznaSekcjaGRnaTytu
      ofertaTerapeutycznaSekcjaGRnaTytuCopy1
      quoteAutor
      quoteMaincontent
      sprawdMojOfertParagraf
      sprawdMojOfertPrzyciskdrugi
      sprawdMojOfertPrzyciskglowny
      sprawdMojOfertTytu
    }
  }
`;
export default oferta;
