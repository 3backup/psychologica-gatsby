import React from "react";
import Container from "./styles/Container";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";
import Button from "./styles/Button";
import SkillList from "./styles/SkillList";
import BulletPoint from "../images/bullet-point.svg";
import AboutLeaves from "../images/about-leaves.svg";

const HalfGrid = styled.div`
  box-sizing: border-box;
  width: 50%;
  padding-left: 6.25%;
  z-index: 1;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 6.25%;
  }
`;
const HalfGridRight = styled(HalfGrid)`
  margin-top: -7rem;
  height: max-content;
  position: sticky;
  top: 100px;
  @media (max-width: 1024px) {
    width: 80%;
    position: static;
    aspect-ratio: 1;
    overflow: hidden;
    margin: -7rem auto 5rem auto;
  }
`;

const AboutMaxContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  padding-right: 0;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding-right: 1.5rem;
  }
`;

const AboutContainer = styled.section`
  position: relative;
  padding: 5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const AboutTitle = styled.h3`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 2.625rem;
  margin: 0;
  line-height: 125%;
  color: #1f1f1f;
  & span {
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 125%;
    color: #4abd7f;
  }
`;
const AboutParagraph = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  margin: 2.5rem 0;
  font-size: 18px;
  line-height: 150%;
  color: #3e7672;
  opacity: 0.8;
  & span {
    font-weight: 700;
  }
`;
const AboutButtons = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const AboutLink = styled(Link)`
  font-family: Red Hat Display;
text-decoration: none;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
text-align: center;
color: #005650;
  list-style-type: none;
  line-height: 60px;
  height: 3.75rem;
  margin-left: 3rem
  border-bottom: 2px solid rgba(40, 174, 102, 0);
  transition: 0.3s;
  @media (max-width: 1024px) {
    margin: 2rem auto 0 auto;
  }
  &:hover{
    border-bottom: 2px solid rgba(40, 174, 102, 1);
  }`;
const LeavesBg = styled(AboutLeaves)`
  position: absolute;
  right: 0;
  z-index: -9;
  bottom: 15%;
`;
const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutMaxContainer>
        <HalfGrid>
          <AboutTitle>
            Psycholog <span>Renata Zuba</span>
          </AboutTitle>
          <AboutParagraph>
            Posiadam wykształcenie i doświadczenie w stosowaniu różnych modeli
            psychoterapii – głównie: poznawczego, psychodynamicznego oraz
            psychodramy.
            <br />
            <br />
            Jestem certyfikowanym <span>specjalistą psychoterapii </span>
            uzależnień oraz <span>superwizorem</span> w tym obszarze, posiadam
            również certyfikat z psychodramy. Ukończyłam także wszystkie etapy
            szkolenia podyplomowego z psychoterapii prowadzonego przez Sekcję
            Naukową Polskiego Towarzystwa Psychiatrycznego zmierzającego do
            uzyskania
            <span> certyfikatu psychoterapeuty.</span>
            <br />
            <br />W celu zapewnienia najwyższej jakości oferowanej pomocy
            regularnie korzystam z superwizji prowadzonej przez doświadczonych
            superwizorów Polskiego Towarzystwa Psychiatrycznego i Polskiego
            Towarzystwa Psychologicznego.
            <br />
            <br /> Jestem członkiem Polskiego Towarzystwa Psychologicznego oraz
            Polskiego Towarzystwa Psychoterapii Uzależnień.
          </AboutParagraph>
          <AboutButtons>
            <Link to="/o-mnie">
              {" "}
              <Button>Czytaj o mnie</Button>
            </Link>
            <AboutLink to="/">Ofera terapeutyczna</AboutLink>
          </AboutButtons>
          <SkillList header="Moje" subheader="kompetencje" />
        </HalfGrid>
        <HalfGridRight>
          <StaticImage
            src="../images/about-renata-zuba.jpg"
            alt="about Renata Zuba"
            layout="fullWidth"
            placeholder="blurred"
          />
        </HalfGridRight>
      </AboutMaxContainer>
      <LeavesBg />
    </AboutContainer>
  );
};
export default AboutSection;
