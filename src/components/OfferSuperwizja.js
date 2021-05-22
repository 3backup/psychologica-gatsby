import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
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
    <PsychoterapiaSection>
      <PsychoterapiaContainer>
        <RightContent>
          <HeaderPsychoterapia>Superwizja</HeaderPsychoterapia>
          <LeadPsychoterapia>
            Psychoterapia to według mnie niełatwa, lecz fascynująca podróż w
            głąb siebie, której celem jest zrozumienie samego siebie i dokonanie
            zmian służących pełniejszemu wykorzystaniu własnego potencjału oraz
            zaakceptowaniu siebie. Efektem psychoterapii jest – cytując J.L.
            Moreno – stanie się reżyserem własnego życia.
          </LeadPsychoterapia>
          <ParagraphPsychoterapia>
            Psychoterapia opiera się na przymierzu terapeutycznym, w którym
            bardzo ważne są: wzajemne zaufanie, odpowiedzialność i zaangażowanie
            każdej z osób uczestniczących w tym procesie.
          </ParagraphPsychoterapia>
        </RightContent>
        <LeftContent>
          <StaticImage
            src="../images/superwizja.jpg"
            alt="Roslina psychologica"
            layout="fullWidth"
            placeholder="blurred"
          />
        </LeftContent>
      </PsychoterapiaContainer>
      <BgElement />
    </PsychoterapiaSection>
  );
};
