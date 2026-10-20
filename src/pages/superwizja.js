import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import SeeOffer from "../components/SeeOffer";
import { OfferSuperwizja } from "../components/OfferSuperwizja";
import TopOffer from "../components/TopOffer";
import SupervisionDetails from "../components/SupervisionDetails";

const oferta = ({ data }) => {
  const duration = data.datoCmsHowitlookslike?.processTime?.replace(/^Czas sesji:\s*/i, "").trim();
  const address = data.site?.siteMetadata?.businessAddress;
  if (![duration, address?.streetAddress, address?.postalCode, address?.addressLocality]
    .every((value) => typeof value === "string" && value.trim())) {
    throw new Error("Brak czasu sesji psychoterapii lub adresu dla informacji na stronie superwizji");
  }
  const faq = [
    {
      question: "Na czym polega superwizja psychoterapii uzależnień?",
      answer: "Superwizja jest przestrzenią do przyglądania się własnej pracy z osobami uzależnionymi lub członkami ich rodzin. Z superwizorem można omawiać trudności zawodowe, sposób rozumienia sytuacji i kierunek dalszej pracy. Oferta jest skierowana do specjalistów psychoterapii uzależnień i innych profesjonalistów zajmujących się pomocą w tym obszarze.",
    },
    {
      question: "Jakie formy superwizji są dostępne?",
      answer: "Prowadzę superwizję indywidualną i grupową. Do kontaktu zapraszam specjalistów psychoterapii uzależnień oraz innych profesjonalistów wspierających osoby uzależnione lub członków ich rodzin. Szczegóły procesu i formę spotkań omawiam podczas kontaktu.",
    },
    {
      question: "Na czym polega terapia uzależnień?",
      answer: "Psychoterapia uzależnień polega na lepszym rozumieniu mechanizmów problemu, własnych emocji i sposobów reagowania oraz pracy nad zmianą codziennego funkcjonowania. W Psychologica pracuję z osobami dorosłymi oraz z bliskimi, którzy doświadczają skutków uzależnienia w rodzinie lub związku. Szczegółowy opis pomocy dla pacjentów znajduje się w zakładce „Psychoterapia uzależnień”.",
    },
    {
      question: "Ile może trwać terapia uzależnień?",
      answer: `Łączny czas psychoterapii uzależnień zależy od sytuacji, potrzeb i celu pracy danej osoby. Częstotliwość i przewidywany sposób pracy ustalamy indywidualnie po pierwszych konsultacjach. Pojedyncza sesja psychoterapii trwa ${duration}.`,
    },
  ];
  return (
    <>
      <Layout
        pageTitle="Superwizja psychoterapii uzależnień | Renata Zuba"
        pageDescription="Superwizja indywidualna i grupowa dla specjalistów psychoterapii uzależnień. Certyfikowany superwizor Renata Zuba – spotkania w Rzeszowie i online."
        pageImageAlt="Superwizja psychoterapii uzależnień – Renata Zuba"
        pageType="WebPage"
        service={{
          name: "Superwizja psychoterapii uzależnień",
          serviceType: "Superwizja indywidualna i grupowa",
          description:
            "Superwizja dla specjalistów psychoterapii uzależnień w Rzeszowie i online.",
          audience: "specjaliści psychoterapii uzależnień",
        }}
        breadcrumbs={[
          { name: "Strona główna", path: "/" },
          { name: "Superwizja", path: "/superwizja/" },
        ]}
        faq={faq}>
        <main>
          <TopOffer
            headerElement="Superwizja psychoterapii uzależnień"
            subheaderText="Superwizja indywidualna i grupowa dla specjalistów psychoterapii uzależnień oraz innych profesjonalistów pomagających osobom uzależnionym i ich bliskim."
          />
          <OfferSuperwizja />
          <SupervisionDetails faq={faq} address={address} />
          <SeeOffer
            mainTitle={data.datoCmsSupervision.supervisionOfferTitle}
            subParagraph={data.datoCmsSupervision.supervisionOfferParagraph}
            mainCta={data.datoCmsSupervision.supervisionOfferCta}
            secondCta={data.datoCmsSupervision.supervisionOfferCtaCopy1}
            supervision
            noOverlap
          />
        </main>
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query SuperwizjaQuery {
    site { siteMetadata { businessAddress { streetAddress postalCode addressLocality } } }
    datoCmsHowitlookslike { processTime }
    datoCmsSupervision {
      supervisionOfferCta
      supervisionOfferCtaCopy1
      supervisionOfferParagraph
      supervisionOfferTitle
    }
  }
`;
export default oferta;
