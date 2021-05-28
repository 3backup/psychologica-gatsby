import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import HowToGet from "../components/HowToGet";
import Covid from "../components/Covid";
import SeeOffer from "../components/SeeOffer";
import TopLocation from "../components/TopLocation";
import Maps from "../components/Maps";

import "normalize.css";

const lokalizacja = ({ data }) => {
  return (
    <>
      <Layout visableHeader>
        <TopLocation />
        <Maps />
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
