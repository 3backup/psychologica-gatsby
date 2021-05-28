import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { CouldNotFind } from "../components/CouldNotFind";

const NotFoundPage = () => {
  return (
    <>
      <Layout visableHeader>
        <CouldNotFind></CouldNotFind>
        <Footer />
      </Layout>
    </>
  );
};

export default NotFoundPage;
