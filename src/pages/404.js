import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { CouldNotFind } from "../components/CouldNotFind";

const NotFoundPage = () => {
  return (
    <>
      <Layout
        visableHeader
        pageTitle="Brak strony - PSYCHOLOGICA - Psychoterapia i psychoedukacja Renata Zuba"
        pageDescription="Nieznaleźlismy takiej strony - wróć do Pscyhologica Rzeszów">
        <CouldNotFind></CouldNotFind>
        <Footer />
      </Layout>
    </>
  );
};

export default NotFoundPage;
