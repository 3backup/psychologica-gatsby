import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import TextLink from "../components/styles/TextLink";
import { graphql } from "gatsby";

import SeeOffer from "../components/SeeOffer";
import Testimonial from "../components/Testimonial";
import { OfferEdukacja } from "../components/OfferEdukacja";
import TopOffer from "../components/TopOffer";

// markup
const oferta = ({ data }) => {
  return (
    <>
      <Layout
        pageTitle="Szkolenia psychologiczne i psychoedukacja w Rzeszowie | Renata Zuba"
        pageDescription="Szkolenia psychologiczne, warsztaty, webinaria i psychoedukacja w Rzeszowie. Sprawdź, dla kogo jest oferta edukacyjna Renaty Zuby i jak wygląda współpraca."
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
        <main>
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
            noOverlap
            mainTitle="Sprawdź moją ofertę"
            subParagraph={
              <>
                Oprócz zajęć edukacyjnych prowadzę psychoterapię oraz{" "}
                <TextLink to="/superwizja/">superwizję</TextLink>.
              </>
            }
            mainCta={data.datoCmsOfertaEdukacyjna.sprawdMojOfertPrzyciskglowny}
            secondCta={
              data.datoCmsOfertaEdukacyjna.sprawdMojOfertPrzyciskdrugiejkategorii
            }
          />
        </main>
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query EdukacyjnaQuery {
    datoCmsOfertaEdukacyjna {
      edukacyjnaTytuTopCopy1
      ofertaEdukacyjnaCytat
      ofertaEdukacyjnaCytatAutor
      sprawdMojOfertPrzyciskglowny
      sprawdMojOfertPrzyciskdrugiejkategorii
    }
  }
`;
export default oferta;
