import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import { StaticQuery, graphql } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import Whatisimportant from "../images/whatisimportant-bg.svg";

const PsychoterapiaSection = styled.section`
  position: relative;
  padding: 7rem 0;
  background: #f4f5f7;
`;
const PsychoterapiaContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  width: 43.75%;
  margin-top: -9rem;
  @media (max-width: 1024px) {
    width: 33%;
    margin: 0;
    position: sticky;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    aspect-ratio: 1.1;
    overflow: hidden;
  }
`;
const RightContent = styled.div`
  box-sizing: border-box;
  padding: 0 6.25% 0 2rem;
  width: 56.25%;
  @media (max-width: 1024px) {
    width: 66%;
    margin: 0;
    position: sticky;
  }
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`;
const HeaderPsychoterapia = styled.h2`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 125%;
  color: #1f1f1f;
`;
const LeadPsychoterapia = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 150%;
  color: #3e7672;
  opacity: 0.9;
  @media (max-width: 578px) {
    font-size: 20px;
  }
`;
const ParagraphPsychoterapia = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #3e7672;
  opacity: 0.9;
`;
const BgElement = styled(Whatisimportant)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const OfferSuperwizja = () => {
  return (
    <StaticQuery
      query={graphql`
        query OfferSuperwizjaQuery {
          datoCmsSupervision {
            superwizjaSekcjaGRnaTytu
            supervisionGrayLead
            supervisionGrayParagraph
          }
        }
      `}
      render={(data) => (
        <PsychoterapiaSection>
          <PsychoterapiaContainer>
            <RightContent>
              <HeaderPsychoterapia>
                {data.datoCmsSupervision.superwizjaSekcjaGRnaTytu}
              </HeaderPsychoterapia>
              <LeadPsychoterapia>
                {data.datoCmsSupervision.supervisionGrayLead.replace("profesjinalistów", "profesjonalistów")}
              </LeadPsychoterapia>
              <ParagraphPsychoterapia>
                {data.datoCmsSupervision.supervisionGrayParagraph}
              </ParagraphPsychoterapia>
            </RightContent>
            <LeftContent>
              <StaticImage
                src="../images/superwizja.jpg"
                alt="Dłonie trzymające ziemię z młodą zieloną rośliną"
                layout="constrained"
                width={525}
                height={734}
                sizes="(max-width: 768px) 80vw, (max-width: 1230px) 34vw, 525px"
                quality={80}
                formats={["auto", "avif", "webp"]}
                loading="eager"
                placeholder="blurred"
              />
            </LeftContent>
          </PsychoterapiaContainer>
          <BgElement aria-hidden="true" focusable="false" />
        </PsychoterapiaSection>
      )}
    />
  );
};
