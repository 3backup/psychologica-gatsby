import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AboutOffer from "../components/AboutOffer";
import { graphql } from "gatsby";

import SeeOffer from "../components/SeeOffer";
import Testimonial from "../components/Testimonial";
import { OfferEdukacja } from "../components/OfferEdukacja";
import Process from "../components/Process";
import TopOffer from "../components/TopOffer";

// markup
const oferta = ({ data }) => {
  return (
    <>
      <Layout
        pageTitle="Oferta edukacyjna Rzeszów - PSYCHOLOGICA - Psychoterapia i psychoedukacja"
        pageDescription="Opierając się na swoich doświadczeniach jako psychologa klinicznego prowadzę specjalistyczne szkolenia dla osób zajmujących się psychoterapią lub pomocą psychologiczną, a także warsztaty i treningi kompetencji skierowane do różnych grup zawodowych i społecznych.">
        <TopOffer
          headerElement={data.datoCmsOfertaEdukacyjna.edukacyjnaTytuTop}
          subheaderText={data.datoCmsOfertaEdukacyjna.edukacyjnaTytuTopCopy1}
        />
        <OfferEdukacja />
        <Testimonial
          quote={data.datoCmsOfertaEdukacyjna.ofertaEdukacyjnaCytat}
          author={data.datoCmsOfertaEdukacyjna.ofertaEdukacyjnaCytatAutor}
        />
        <SeeOffer
          mainTitle={data.datoCmsOfertaEdukacyjna.sprawdMojOfertTytu}
          subParagraph={data.datoCmsOfertaEdukacyjna.sprawdMojOfertOpis}
          mainCta={data.datoCmsOfertaEdukacyjna.sprawdMojOfertPrzyciskglowny}
          secondCta={
            data.datoCmsOfertaEdukacyjna.sprawdMojOfertPrzyciskdrugiejkategorii
          }
        />
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
      sprawdMojOfertTytu
      sprawdMojOfertPrzyciskglowny
      sprawdMojOfertPrzyciskdrugiejkategorii
      sprawdMojOfertOpis
    }
  }
`;
export default oferta;
