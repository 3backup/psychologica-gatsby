import * as React from "react";
import { styled } from "linaria/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import HowToGet from "../components/HowToGet";
import Covid from "../components/Covid";
import SeeOffer from "../components/SeeOffer";
import TopLocation from "../components/TopLocation";
import Maps from "../components/Maps";

import "normalize.css";

const lokalizacja = ({ data }) => {
  return (
    <>
      <Layout visableHeader="ffff">
        <TopLocation />
        <Maps />
        <HowToGet />
        <Covid />
        <SeeOffer />
        <Footer />
      </Layout>
    </>
  );
};

export default lokalizacja;
