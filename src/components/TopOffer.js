import React from "react";

import { styled } from "linaria/react";
import Container from "./styles/Container";

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  min-height: 27rem;
  overflow: hidden;
  @media (max-width: 768px) {
    padding-top: 80px;
    min-height: auto;
    height: max-content;
  }
`;

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
`;

const TopSection = styled.section`
  position: relative;
`;
const OfferHeader = styled.h1`
  text-align: center;
  margin: 3rem auto 1.5rem auto;
  font-family: Red Hat Display;
  font-style: regular;
  font-weight: 300;
  font-size: 48px;
  line-height: 125%;
  color: #1f1f1f;
  margin-bottom: 1.5rem;
  @media (max-width: 578px) {
    font-size: 38px;
  }
`;
const OfferSubheader = styled.p`
  text-align: center;
  margin: 0 auto;
  width: 50%;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  text-align: center;
  color: #3e7672;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 578px) {
    font-size: 20px;
  }
`;

const TopOffer = ({ headerElement, subheaderText }) => (
  <TopSection id="hero">
    <Top>
      <HeroContainer>
        <OfferHeader>{headerElement}</OfferHeader>
        <OfferSubheader>{subheaderText}</OfferSubheader>
      </HeroContainer>
    </Top>
  </TopSection>
);

export default TopOffer;
