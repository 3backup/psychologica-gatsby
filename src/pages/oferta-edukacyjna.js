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
        pageTitle="Szkolenia psychologiczne Rzeszów | Renata Zuba"
        pageDescription="Specjalistyczne szkolenia, warsztaty i psychoedukacja prowadzone przez psychologa klinicznego Renatę Zubę w Rzeszowie oraz dla grup zawodowych."
        pageImageAlt="Szkolenia i psychoedukacja – Renata Zuba"
        pageType="WebPage"
        service={{
          name: "Szkolenia psychologiczne i psychoedukacja",
          serviceType: "Szkolenia, warsztaty i psychoedukacja",
          description:
            "Specjalistyczne szkolenia i warsztaty prowadzone przez psychologa klinicznego.",
          audience: "grupy zawodowe i społeczne",
        }}
        breadcrumbs={[
          { name: "Strona główna", path: "/" },
          { name: "Oferta edukacyjna", path: "/oferta-edukacyjna/" },
        ]}>
        <TopOffer
          headerElement="Szkolenia psychologiczne i psychoedukacja"
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
