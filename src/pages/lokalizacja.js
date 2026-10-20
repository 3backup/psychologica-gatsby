import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import HowToGet from "../components/HowToGet";
import LocationVisitDetails from "../components/LocationVisitDetails";
import TopLocation from "../components/TopLocation";
import "normalize.css";

const Maps = React.lazy(() => import("../components/Maps"));

const lokalizacja = ({ data }) => {
  const address = data.site.siteMetadata.businessAddress;
  return (
    <>
      <Layout
        visableHeader
        pageTitle={`Gabinet psychologiczny ${address.streetAddress.split("/")[0]}, ${address.addressLocality} | Psychologica`}
        pageDescription={`Gabinet psychologiczny przy ul. ${address.streetAddress} w Rzeszowie. Sprawdź adres, dojazd komunikacją miejską i samochodem oraz możliwości spotkań online.`}
        pageImageAlt="Gabinet psychologiczny Psychologica w Rzeszowie"
        pageType="WebPage"
        breadcrumbs={[
          { name: "Strona główna", path: "/" },
          { name: "Lokalizacja", path: "/lokalizacja/" },
        ]}>
        <TopLocation address={address} />
        <React.Suspense fallback={<div style={{ minHeight: "31.25rem", background: "#f2f2f2" }} aria-hidden="true" />}>
          <Maps />
        </React.Suspense>
        <HowToGet />
        <LocationVisitDetails address={address} />
        <Footer />
      </Layout>
    </>
  );
};
export const query = graphql`
  query LocationPageQuery {
    site {
      siteMetadata {
        businessAddress {
          streetAddress
          addressLocality
        }
      }
    }
  }
`;
export default lokalizacja;
