import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import Button from "./styles/Button";
import { StaticImage } from "gatsby-plugin-image";

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  min-height: 50rem;
  overflow: hidden;
  @media (max-width: 768px) {
    padding-top: 80px;
    min-height: auto;
    height: max-content;
  }
`;
const HalfBackground = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 50%;
  height: 44rem;
  height: 100%;
  & div:first-child {
    height: 100%;
  }
  @media (max-width: 768px) {
    position: static;
    width: 100%;
  }
`;
const TextContainer = styled.div`
  box-sizing: border-box;
  width: 43.5%;
  margin-right: 3.5rem;
  @media (max-width: 768px) {
    width: 100%;
    margin: 4rem 0;
  }
`;
const HeaderTitle = styled.h2`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5rem;
  line-height: 125%;
  margin: 0;
  color: #1f1f1f;
  & span {
    color: #4abd7f;
    font-weight: medium;
  }
  @media (max-width: 1024px) {
    font-size: 48px;
  }
`;
const ParagraphText = styled.p`
  margin: 2.5rem 0 1rem 0;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  color: #3e7672;
  opacity: 0.7;
`;

const HeroContainer = styled(Container)`
  display: flex;
  margin: 0 auto;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TopSection = styled.section`
  position: relative;
`;
const SmallerParagraph = styled.p`
  margin: 2.5rem 0;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  color: #3e7672;
  opacity: 0.7;
`;

const TopAbout = ({ props }) => (
  <TopSection id="hero">
    <Top>
      <HeroContainer>
        <TextContainer>
          <HeaderTitle>
            Renata <span>Zuba</span>
          </HeaderTitle>
          {/* DUZY SPACING TO DO  */}
          <ParagraphText>
            Jestem psychologiem klinicznym i psychoterapeutą z wieloletnim
            doświadczeniem w prowadzeniu psychoterapii i pomocy psychologicznej.
          </ParagraphText>
          <SmallerParagraph>
            Prowadzę psychoterapię osób dorosłych – zarówno młodych, które
            niedawno weszły w pełnoletniość, jak i osób będących na różnych
            etapach rozwoju osobistego, mierzących się z kryzysami, dokonujących
            bilansu życia.
          </SmallerParagraph>
          <Button>Skontaktuj się</Button>
        </TextContainer>
      </HeroContainer>
    </Top>
    <HalfBackground>
      <StaticImage
        src="../images/about-renata-zuba.jpg"
        alt="Renata Zuba - o mnie"
        layout="fullWidth"
        quality="100"
        placeholder="blurred"
      />
    </HalfBackground>
  </TopSection>
);

export default TopAbout;
