import React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./styles/Button";

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 47.5rem;
`;
const HalfBackground = styled.div`
  position: fixed;
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
`;
const HeaderTitle = styled.h2`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 68px;
  line-height: 125%;
  margin: 0;
  color: #1f1f1f;
  & span {
    font-weight: 500;
    font-size: 68px;
    line-height: 125%;
    color: #4abd7f;
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
  width: 29%;
`;
const HeroContainer = styled(Container)`
  display: flex;
  position: relative;
`;
const HeroImageFront = styled.div`
  width: 45%;
  position: Absolute;
  z-index: 5;
  left: 45%
  top: 5%;
`;

const Header = ({ props }) => (
  <Top>
    <HeroContainer>
      <TextContainer>
        <HeaderTitle>
          Psychoterapia <span>godna Ciebie</span>
        </HeaderTitle>
        {/* DUZY SPACING TO DO  */}
        <ParagraphText>
          Jestem psychologiem klinicznym i psychoterapeutą
          <br />z wieloletnim doświadczeniem w prowadzeniu psychoterapii oraz
          pomocy psychologicznej.
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
    <HalfBackground></HalfBackground>
  </Top>
);

export default Header;
