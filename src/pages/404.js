import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { CouldNotFind } from "../components/CouldNotFind";

const NotFoundPage = () => {
  return (
    <>
      <Layout
        visableHeader
        pageTitle="Nie znaleziono strony | Psychologica"
        pageDescription="Nie znaleźliśmy tej strony. Wróć do strony głównej Psychologica."
        pageType="WebPage"
        noIndex>
        <CouldNotFind></CouldNotFind>
        <Footer />
      </Layout>
    </>
  );
};

export default NotFoundPage;
