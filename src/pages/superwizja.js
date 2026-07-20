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
        ]}>
        <TopOffer
          headerElement="Superwizja psychoterapii uzależnień"
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
