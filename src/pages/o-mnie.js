import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Footer from "../components/Footer";

import AboutCopy from "../components/AboutCopy";
import WhatIsImportant from "../components/WhatIsImportant";
import SeeOffer from "../components/SeeOffer";
import Skills from "../components/Skills";
import { AboutCareer, AboutContact } from "../components/AboutDetails";
import TopAbout from "../components/TopAbout";
import TextLink from "../components/styles/TextLink";

const oMnie = ({ data }) => {
  const address = data.site?.siteMetadata?.businessAddress;
  if (![address?.streetAddress, address?.postalCode, address?.addressLocality]
    .every((value) => typeof value === "string" && value.trim())) {
    throw new Error("Brak potwierdzonego adresu na stronie O mnie");
  }
  return (
    <>
      <Layout
        visableHeader
        pageTitle="Renata Zuba – psycholog kliniczny i psychoterapeutka | Rzeszów"
        pageDescription="Poznaj Renatę Zubę, psychologa klinicznego i psychoterapeutkę z wieloletnim doświadczeniem. Sprawdź kwalifikacje, sposób pracy i obszary wsparcia dla dorosłych w Rzeszowie."
        pageImageAlt="Renata Zuba, psycholog kliniczny i psychoterapeutka"
        pageType="AboutPage"
        breadcrumbs={[
          { name: "Strona główna", path: "/" },
          { name: "O mnie", path: "/o-mnie/" },
        ]}>
        <main>
          <TopAbout />
          <AboutCopy />
          <Skills />
          <AboutCareer />
          <WhatIsImportant />
          <AboutContact address={address} />
          <SeeOffer
            mainTitle="Gdzie możesz przejść dalej"
            subParagraph={
              <>
                Poznaj ofertę psychoterapii i pomocy psychologicznej dla dorosłych
                oraz zajęć edukacyjnych. Jeśli szukasz wsparcia w pracy zawodowej,
                sprawdź <TextLink to="/superwizja/">ofertę superwizji</TextLink>.
                {" "}W sprawie konsultacji, szkoleń lub superwizji{" "}
                <TextLink to="/skontaktuj-sie/">skontaktuj się ze mną</TextLink>.
              </>
            }
            mainCta={data.datoCmsAboout.offertFirstcta}
            secondCta={data.datoCmsAboout.offerctaSecond}
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
  query AboutPageQuery {
    site { siteMetadata { businessAddress { streetAddress postalCode addressLocality } } }
    datoCmsAboout {
      offertFirstcta
      offerctaSecond
    }
  }
`;
export default oMnie;
