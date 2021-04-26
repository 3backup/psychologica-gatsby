import React from "react";
import Container from "./styles/Container";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";
import Button from "./styles/Button";
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
  @media (max-width: 1024px) {
    width: 80%;
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
  font-size: 20px;
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
const AboutSkillList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;
const AboutSkillListTitle = styled.h4`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  margin: 0 0 2rem 0;
  font-size: 26px;
  line-height: 125%;
  color: #1f1f1f;
`;
const AboutSkillListUL = styled.ul`
  padding: 0;
  margin: 0;
`;
const AboutSkillListLi = styled.li`
  display: grid;
  grid-template-columns: 30px 1fr;
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 1.5rem;
  padding: 0;
  color: #3e7672;
  list-style: none;
`;
const Dot = styled(BulletPoint)`
  width: 18px;
  height: 18px;
  padding-right: 1rem;
`;
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
            Jestem certyfikowanym{" "}
            <span>specjalistą psychoterapii uzależnień</span> oraz{" "}
            <span>superwizorem</span> w tym obszarze, posiadam również
            <span>ertyfikat I stopnia z psychodramy.</span> Ukończyłam także
            wszystkie etapy szkolenia podyplomowego z psychoterapii prowadzonego
            przez Sekcję Naukową Polskiego Towarzystwa Psychiatrycznego
            zmierzającego do uzyskania certyfikatu psychoterapeuty.
          </AboutParagraph>
          <AboutButtons>
            <Button>Czytaj o mnie</Button>
            <AboutLink to="/">Ofera terapeutyczna</AboutLink>
          </AboutButtons>
          <AboutSkillList>
            <AboutSkillListTitle>Moje kompetencje</AboutSkillListTitle>
            <AboutSkillListUL>
              <AboutSkillListLi>
                <Dot />
                Certyfikat Specjalisty Psychoterapii Uzależnień wydany przez
              </AboutSkillListLi>
              <AboutSkillListLi>
                <Dot />
                Certyfikat Superwizora Psychoterapii Uzależnień
              </AboutSkillListLi>
              <AboutSkillListLi>
                <Dot />
                Certyfikat z psychodramy J.L. Moreno
              </AboutSkillListLi>
              <AboutSkillListLi>
                <Dot />
                Dyplom magistra psychologii wydany przez Katedrę Psychologii
                Uniwersytetu Jagiellońskiego w Krakowie
              </AboutSkillListLi>
              <AboutSkillListLi>
                <Dot />
                Stopień Psychologa Klinicznego
              </AboutSkillListLi>
            </AboutSkillListUL>
          </AboutSkillList>
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
