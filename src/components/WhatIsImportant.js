import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import Button from "./styles/Button";
import { Link } from "gatsby";
import Acceptance from "../images/acceptance.svg";
import Discretion from "../images/discretion.svg";
import Individual from "../images/indyvidual.svg";
import Whatisimportant from "../images/whatisimportant-bg.svg";
import { StaticImage } from "gatsby-plugin-image";

const MainContainer = styled.section`
  position: relative;
  padding: 7rem 0;
  overflow: hidden;
`;
const HeaderTitle = styled.h3`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 125%;
  text-align: center;
  color: #000000;
`;
const HeaderParagraph = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  text-align: center;
  color: #3e7672;
  opacity: 0.7;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 2.5rem auto;
  max-width: 62.5%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SingleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  justify-content: space-between;
  @media (max-width: 1024px) {
    margin: 0 0.8rem;
  }
`;
const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoxHeader = styled.h3`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  margin: 1.5rem 0;
  line-height: 125%;
  text-align: center;
  color: #000000;
`;
const BoxParagraph = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  margin: 0;
  text-align: center;
  color: #3e7672;
  opacity: 0.8;
`;
const BgElement = styled(Whatisimportant)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const WhatIsImportant = ({ props }) => (
  <MainContainer id="WhatIsImportant">
    <Container>
      <HeaderTitle>Co jest ważne w mojej pracy?</HeaderTitle>
      <HeaderParagraph>
        We create smart and agile tests for Experience Management, Market
        Research & Education. We have 20+ years of experience in
      </HeaderParagraph>
      <HeaderDiv>
        <SingleBox>
          <BoxIcon>
            <Individual />
          </BoxIcon>
          <BoxHeader>Indywidualne podejście</BoxHeader>
          <BoxParagraph>
            We create smart and agile tests for Experience Management, Market
            Research & Education. We have 20+ years of experience in acad
          </BoxParagraph>
        </SingleBox>
        <SingleBox>
          <BoxIcon>
            <Discretion />
          </BoxIcon>
          <BoxHeader>Dyskrecja</BoxHeader>
          <BoxParagraph>
            We create smart and agile tests for Experience Management, Market
            Research & Education. We have 20+ years of experience in acad
          </BoxParagraph>
        </SingleBox>
        <SingleBox>
          <BoxIcon>
            <Acceptance />
          </BoxIcon>
          <BoxHeader> Akceptacja i wsparcie</BoxHeader>
          <BoxParagraph>
            We create smart and agile tests for Experience Management, Market
            Research & Education. We have 20+ years of experience in acad
          </BoxParagraph>
        </SingleBox>
      </HeaderDiv>
    </Container>
    <BgElement />
  </MainContainer>
);

export default WhatIsImportant;
