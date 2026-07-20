import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Footer from "../components/Footer";

import AboutCopy from "../components/AboutCopy";
import WhatIsImportant from "../components/WhatIsImportant";
import SeeOffer from "../components/SeeOffer";
import Skills from "../components/Skills";
import Process from "../components/Process";
import TopAbout from "../components/TopAbout";

const oMnie = ({ data }) => {
  return (
    <>
      <Layout
        visableHeader
        pageTitle="Renata Zuba – psycholog kliniczny w Rzeszowie"
        pageDescription="Poznaj Renatę Zubę – psychologa klinicznego, psychoterapeutę i certyfikowanego specjalistę psychoterapii uzależnień w Rzeszowie. Sprawdź kwalifikacje."
        pageImageAlt="Renata Zuba – psycholog kliniczny i psychoterapeuta"
        pageType="AboutPage"
        breadcrumbs={[
          { name: "Strona główna", path: "/" },
          { name: "O mnie", path: "/o-mnie/" },
        ]}>
        <TopAbout />
        <AboutCopy />
        <Skills />
        <WhatIsImportant />
        <SeeOffer
          mainTitle={data.datoCmsAboout.checkoffer}
          subParagraph={data.datoCmsAboout.offerDesc}
          mainCta={data.datoCmsAboout.offertFirstcta}
          secondCta={data.datoCmsAboout.offerctaSecond}
          supervision
        />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query AboutPageQuery {
    datoCmsAboout {
      offertFirstcta
      offerctaSecond
      offerDesc
      checkoffer
    }
  }
`;
export default oMnie;
