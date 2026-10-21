import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import SeeOffer from "../components/SeeOffer";
import { OfferSuperwizja } from "../components/OfferSuperwizja";
import TopOffer from "../components/TopOffer";
import SupervisionDetails from "../components/SupervisionDetails";

const oferta = ({ data }) => {
  const address = data.site?.siteMetadata?.businessAddress;
  if (![address?.streetAddress, address?.postalCode, address?.addressLocality]
    .every((value) => typeof value === "string" && value.trim())) {
    throw new Error("Brak potwierdzonego adresu dla informacji na stronie superwizji");
  }
  const faq = [
    {
      question: "Na czym polega superwizja psychoterapii?",
      answer: "Superwizja jest przestrzenią do refleksji nad własną pracą terapeutyczną. Z superwizorem można omawiać trudności zawodowe, sposób rozumienia sytuacji i kierunek dalszej pracy. Szczegółowy zakres współpracy ustalamy w odniesieniu do Twojej praktyki i potrzeb.",
    },
    {
      question: "Jakie formy superwizji są dostępne?",
      answer: "Prowadzę superwizję indywidualną i grupową, wyłącznie stacjonarnie w Rzeszowie. Do kontaktu zapraszam psychoterapeutów, w tym specjalistów psychoterapii uzależnień, oraz innych profesjonalistów pomagających osobom uzależnionym i ich bliskim. Szczegóły współpracy omawiam podczas kontaktu.",
    },
    {
      question: "Gdzie odbywają się spotkania superwizyjne?",
      answer: `Superwizja odbywa się wyłącznie stacjonarnie w Rzeszowie. Gabinet znajduje się przy ul. ${address.streetAddress}, ${address.postalCode} ${address.addressLocality}. Termin spotkania i szczegóły organizacyjne uzgadniamy podczas kontaktu.`,
    },
    {
      question: "Ile trwa i ile kosztuje superwizja?",
      answer: "Czas trwania, częstotliwość spotkań i koszt superwizji ustalam po rozmowie o Twojej pracy, potrzebach i wybranej formie współpracy. Przed rozpoczęciem omawiamy warunki superwizji indywidualnej lub grupowej. Aby poznać szczegóły, napisz lub zadzwoń.",
    },
  ];
  return (
    <>
      <Layout
        pageTitle="Superwizja psychoterapii w Rzeszowie | Renata Zuba"
        pageDescription="Superwizja psychoterapii indywidualna i grupowa dla psychoterapeutów oraz profesjonalistów pomagających osobom uzależnionym i ich bliskim. Stacjonarnie w Rzeszowie."
        pageImageAlt="Superwizja psychoterapii – Renata Zuba"
        pageType="WebPage"
        service={{
          name: "Superwizja psychoterapii",
          serviceType: "Stacjonarna superwizja psychoterapii indywidualna i grupowa",
          description:
            "Superwizja psychoterapii indywidualna i grupowa, wyłącznie stacjonarnie w Rzeszowie.",
          audience: "psychoterapeuci, w tym specjaliści psychoterapii uzależnień, oraz inni profesjonaliści pomagający osobom uzależnionym i ich bliskim",
        }}
        breadcrumbs={[
          { name: "Strona główna", path: "/" },
          { name: "Superwizja", path: "/superwizja/" },
        ]}
        faq={faq}>
        <main>
          <TopOffer
            headerElement="Superwizja psychoterapii"
            subheaderText="Superwizja indywidualna i grupowa dla psychoterapeutów oraz innych profesjonalistów pomagających osobom uzależnionym i ich bliskim. Spotkania wyłącznie stacjonarnie w Rzeszowie."
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
    datoCmsSupervision {
      supervisionOfferCta
      supervisionOfferCtaCopy1
      supervisionOfferParagraph
      supervisionOfferTitle
    }
  }
`;
export default oferta;
