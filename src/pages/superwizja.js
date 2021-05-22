import * as React from "react";
import { styled } from "linaria/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AboutOffer from "../components/AboutOffer";
import SeeOfferTerap from "../components/SeeOfferTerap";
import OfferPrice from "../components/OfferPrice";
import Testimonial from "../components/Testimonial";
import { OfferPsychoterapia } from "../components/OfferPsychoterapia";
import { OfferPomoc } from "../components/OfferPomoc";
import Process from "../components/Process";
import TopOffer from "../components/TopOffer";

// markup
const oferta = ({ data }) => {
  return (
    <>
      <Layout>
        <TopOffer
          headerElement="Oferta Terapeutyczna"
          subheaderText="Prowadzę zarówno psychoterapię, jak i pomoc psychologiczną skoncentrowaną na poszukiwaniu rozwiązań
problemów oraz wspieraniu w radzeniu sobie z trudnościami i wyzwaniami."
        />
        <OfferPsychoterapia />
        <Testimonial
          quote={
            <>
              Chcąc opuścić <span>jakieś miejsce</span> musimy najpierw do niego{" "}
              <span>dotrzeć.</span>
            </>
          }
          author="Leslie Greenberg"
        />
        <OfferPomoc />
        <OfferPrice />
        <SeeOfferTerap />
        <AboutOffer />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};

export default oferta;