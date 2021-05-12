import * as React from "react";
import { styled } from "linaria/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import HowToGet from "../components/HowToGet";
import WhatIsImportant from "../components/WhatIsImportant";
import SeeOffer from "../components/SeeOffer";
import Process from "../components/Process";
import TopLocation from "../components/TopLocation";
import Maps from "../components/Maps";

const oMnie = ({ data }) => {
  return (
    <>
      <Layout>
        <TopLocation />
        <Maps />
        <HowToGet />
        <WhatIsImportant />
        <SeeOffer />
        <Process />
        <Footer />
      </Layout>
    </>
  );
};

export default oMnie;
