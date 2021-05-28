import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AboutOffer from "../components/AboutOffer";
import { graphql } from "gatsby";

import SeeOfferTerap from "../components/SeeOfferTerap";
import Testimonial from "../components/Testimonial";
import { OfferEdukacja } from "../components/OfferEdukacja";
import Process from "../components/Process";
import TopOffer from "../components/TopOffer";

// markup
const oferta = ({ data }) => {
  return (
    <>
      <Layout>
        <TopOffer
          headerElement={data.datoCmsOfertaEdukacyjna.edukacyjnaTytuTop}
          subheaderText={data.datoCmsOfertaEdukacyjna.edukacyjnaTytuTopCopy1}
        />
        <OfferEdukacja />
        <Testimonial
          quote={data.datoCmsOfertaEdukacyjna.ofertaEdukacyjnaCytat}
          author={data.datoCmsOfertaEdukacyjna.ofertaEdukacyjnaCytatAutor}
        />
        <SeeOfferTerap />
        <AboutOffer />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query EdukacyjnaQuery {
    datoCmsOfertaEdukacyjna {
      edukacyjnaTytuTop
      edukacyjnaTytuTopCopy1
      ofertaEdukacyjnaCytat
      ofertaEdukacyjnaCytatAutor
    }
  }
`;
export default oferta;
