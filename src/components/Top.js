import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import BackgroundPattern from "../images/leaves.svg";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./styles/Button";

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 47.5rem;
  @media (max-width: 768px) {
    padding-top: 80px;
  }
`;
const HalfBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  width: 50%;
  height: 100%;
  z-index: -99;
  background-color: #f4f5f7;
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
  font-size: 68px;
  line-height: 125%;
  margin: 0;
  color: #1f1f1f;
  @media (max-width: 1024px) {
    font-size: 48px;
  }
  & span {
    font-weight: 500;
    font-size: 68px;
    line-height: 125%;
    color: #4abd7f;
    @media (max-width: 1024px) {
      font-size: 48px;
    }
  }
`;
const ParagraphText = styled.p`
  margin: 2.5rem 0;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  color: #3e7672;
  opacity: 0.7;
`;
const CusomtImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  max-height: 768px;
  overflow: hidden;
  width: 33%;
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeroContainer = styled(Container)`
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const HeroImageFront = styled.div`
  width: 45%;
  position: Absolute;
  z-index: 5;
  left: 45%
  top: 5%;
  @media (max-width: 1230px) {
  left: 50%
  }
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    aspect-ratio: 1;
  }
  
`;
const HalfGrid = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 50%;
  padding: 1.875rem 7.25rem;
  justify-content: flex-end;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 125%;
  color: #3e7672;
  position: relative;
  &:before {
    content: "";
    width: 70%;
    height: 1.1px; /* slight higher to work around rounding errors(?) on some zoom levels in some browsers. */
    background-color: #000000;
    opacity: 0.1;
    position: absolute;
    right: 0;
    top: -1px;
  }
  @media (max-width: 1230px) {
    display: none;
  }
`;

const Leaves = styled(BackgroundPattern)`
  position: absolute;
  left: 0;
  bottom: 0;
`;
const TopSection = styled.section`
  position: relative;
`;

const Header = ({ props }) => (
  <TopSection id="hero">
    <Top>
      <HeroContainer>
        <TextContainer>
          <HeaderTitle>
            Psychoterapia <span>godna Ciebie</span>
          </HeaderTitle>
          {/* DUZY SPACING TO DO  */}
          <ParagraphText>
            Jestem psychologiem klinicznym i psychoterapeutą z wieloletnim
            doświadczeniem w prowadzeniu psychoterapii oraz pomocy
            psychologicznej.
          </ParagraphText>
          <Button>Skontaktuj się</Button>
        </TextContainer>
        <HeroImageFront>
          <StaticImage
            src="../images/rzuba-photo-top.png"
            alt="Roslina psychologica"
            placeholder="blurred"
            layout="fullWidth"
          />
        </HeroImageFront>
      </HeroContainer>

      <CusomtImage>
        <StaticImage
          src="../images/top-image-plant.jpg"
          alt="Roslina psychologica"
          layout="fullWidth"
          placeholder="blurred"
        />
      </CusomtImage>
      <Leaves
        src="../images/leaves.svg"
        alt="background pattern"
        placeholder="blurred"
      />
    </Top>
    <Container>
      <HalfGrid>Psycholog Renata Zuba</HalfGrid>
    </Container>
    <HalfBackground></HalfBackground>
  </TopSection>
);

export default Header;
