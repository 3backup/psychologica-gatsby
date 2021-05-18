import * as React from "react";
import { styled } from "linaria/react";
import Layout from "../components/Layout";
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
      <Layout>
        <TopAbout />
        <AboutCopy />
        <Skills />
        <WhatIsImportant />
        <SeeOffer />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};

export default oMnie;
