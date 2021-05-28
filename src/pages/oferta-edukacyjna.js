import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AboutOffer from "../components/AboutOffer";
import SeeOfferTerap from "../components/SeeOfferTerap";
import Testimonial from "../components/Testimonial";
import { OfferEdukacja } from "../components/OfferEdukacja";
import Process from "../components/Process";
import TopOffer from "../components/TopOffer";

// markup
const oferta = ({ data }) => {
  return (
    <>
      <Layout>
        <TopOffer
          headerElement="Oferta Edukacyjna"
          subheaderText="Prowadzę zarówno psychoterapię, jak i pomoc psychologiczną skoncentrowaną na poszukiwaniu rozwiązań
problemów oraz wspieraniu w radzeniu sobie z trudnościami i wyzwaniami."
        />
        <OfferEdukacja />
        <Testimonial
          quote="Chcąc opuścić <span>jakieś miejsce</span> musimy najpierw do niego
          <span>dotrzeć.</span>"
          author="Leslie Greenberg"
        />
        <SeeOfferTerap />
        <AboutOffer />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};

export default oferta;
