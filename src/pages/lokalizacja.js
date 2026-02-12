import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import HowToGet from "../components/HowToGet";
import Covid from "../components/Covid";
import SeeOffer from "../components/SeeOffer";
import TopLocation from "../components/TopLocation";
import "normalize.css";

const Maps = React.lazy(() => import("../components/Maps"));

const lokalizacja = ({ data }) => {
  return (
    <>
      <Layout
        visableHeader
        pageTitle="Gabinet Psychologiczny Rzeszów - PSYCHOLOGICA - Psychoterapia i psychoedukacja Renata Zuba"
        pageDescription="Gabinet psychologiczny, w którym świadcze usługi pomocy psychologicznej na terenie Rzeszowa znajduję się na Mikołaja Reja 12/320, 35-211 Rzeszów">
        <TopLocation />
        <React.Suspense fallback={<div style={{ minHeight: "31.25rem", background: "#f2f2f2" }} aria-hidden="true" />}>
          <Maps />
        </React.Suspense>
        <HowToGet />
        <Covid />
        <SeeOffer
          mainTitle={data.datoCmsLocation.offer}
          subParagraph={data.datoCmsLocation.offerDesc}
          mainCta={data.datoCmsLocation.offerCta}
          secondCta={data.datoCmsLocation.offerCtasecond}
        />
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query LocationPageQuery {
    datoCmsLocation {
      offer
      offerCta
      offerCtasecond
      offerDesc
    }
  }
`;
export default lokalizacja;
