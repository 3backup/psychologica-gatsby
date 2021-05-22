import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import { StaticImage } from "gatsby-plugin-image";
import Whatisimportant from "../images/about-leaves.svg";

const PomocSection = styled.section`
  position: relative;
  padding: 7rem 0;
`;
const PomocContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  width: 43.75%;
  padding-right: 6.25%;
  @media (max-width: 1024px) {
    width: 33%;
    margin: 0;
    position: sticky;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;
const RightContent = styled.div`
  box-sizing: border-box;
  width: 56.25%;
  @media (max-width: 1024px) {
    width: 66%;
    margin: 0;
  }
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`;
const HeaderPomoc = styled.h2`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  font-size: 42px;
  line-height: 125%;
  color: #1f1f1f;
`;
const LeadPomoc = styled.p`
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
const ParagraphPomoc = styled.p`
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

export const OfferPomoc = () => {
  return (
    <PomocSection>
      <PomocContainer>
        <LeftContent>
          <HeaderPomoc>Pomoc psychologiczna</HeaderPomoc>
          <LeadPomoc>
            Głównym celem oferowanej przeze mnie pomocy psychologicznej jest
            poszerzenie perspektywy widzenia aktualnej sytuacji życiowej oraz
            znalezienie możliwości poradzenia sobie z problemami.
          </LeadPomoc>
          <ParagraphPomoc>
            Rola psychologa polega na wspieraniu w poszukiwaniu drogi wyjścia z
            kryzysu oraz w wypracowywaniu skutecznych sposobów radzenia sobie z
            trudnościami.
          </ParagraphPomoc>
        </LeftContent>

        <RightContent>
          <StaticImage
            src="../images/offerterapeutyczna.jpg"
            alt="Roslina psychologica"
            layout="fullWidth"
            placeholder="blurred"
          />
        </RightContent>
      </PomocContainer>
      <BgElement />
    </PomocSection>
  );
};
