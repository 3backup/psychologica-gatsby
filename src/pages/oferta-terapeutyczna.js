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
import TherapyDetails from "../components/TherapyDetails";

const therapyFaq = [
  {
    question: "Jak wygląda pierwsze spotkanie z psychoterapeutą?",
    answer:
      "Pierwsze spotkanie służy omówieniu aktualnych trudności, potrzeb i oczekiwań. Wspólnie ustalamy, czy psychoterapia jest odpowiednią formą pomocy oraz jaki może być jej cel.",
  },
  {
    question: "Jak często odbywają się sesje psychoterapii?",
    answer:
      "Częstotliwość spotkań ustalamy indywidualnie. Regularność jest ważną częścią procesu, dlatego najczęściej spotkania odbywają się w stałym rytmie i o uzgodnionej porze.",
  },
  {
    question: "Czy prowadzona jest psychoterapia online?",
    answer:
      "Tak. Sesje mogą odbywać się w gabinecie w Rzeszowie albo online. Spotkania zdalne trwają 50 minut i obowiązują podczas nich takie same zasady poufności jak w gabinecie.",
  },
  {
    question: "W jakim nurcie prowadzona jest psychoterapia?",
    answer:
      "Pracuję integracyjnie, dopasowując sposób pracy do osoby i problemu. Korzystam między innymi z podejścia psychodynamicznego, poznawczego, systemowego oraz psychodramy.",
  },
];

// markup
const oferta = ({ data }) => {
  return (
    <>
      <Layout
        pageTitle="Psychoterapia dorosłych Rzeszów | Psychologica"
        pageDescription="Psychoterapia dorosłych w Rzeszowie i online. Pomoc w lęku, depresji, stresie, kryzysie i trudnościach w relacjach. Umów konsultację z Renatą Zubą."
        pageImageAlt="Psychoterapia dorosłych – Renata Zuba, Rzeszów"
        pageType="WebPage"
        service={{
          name: "Psychoterapia dorosłych w Rzeszowie",
          serviceType: "Psychoterapia indywidualna dorosłych",
          description:
            "Psychoterapia dorosłych prowadzona w gabinecie w Rzeszowie oraz online.",
          audience: "osoby dorosłe",
        }}
        breadcrumbs={[
          { name: "Strona główna", path: "/" },
          { name: "Oferta terapeutyczna", path: "/oferta-terapeutyczna/" },
        ]}
        faq={therapyFaq}>
        <TopOffer
          headerElement="Psychoterapia dorosłych w Rzeszowie"
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
        <TherapyDetails faq={therapyFaq} />
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
