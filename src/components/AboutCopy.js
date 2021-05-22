import React from "react";
import Container from "./styles/Container";
import { Link } from "gatsby";
import Button from "./styles/Button";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";
import TopRight from "../images/top-right-problem.svg";
import TopLeft from "../images/top-left-problem.svg";

const AboutCopySection = styled.section`
  width: 100%;
  background: #005650;
  overflow: hidden;
  position: relative;
`;
const AboutCopyContainer = styled(Container)`
  padding-top: 7rem;
  padding-bottom: 7rem;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const AboutCopyHalf = styled.div`
  width: 48%;
  z-index: 2;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
const AboutCopyHeader = styled.h2`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 125%;
  /* identical to box height, or 52px */
  margin: 0;
  padding: 0;
  color: #ffffff;
`;
const AboutCopyParagraphLeft = styled.p`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 150%;
  margin: 2.5rem 0 
  color: #ffffff;
  opacity: 0.5;
`;
const AboutCopyParagraphRight = styled.p`
  display: inline-block;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 150%;
  color: #ffffff;
  opacity: 0.5;
  margin: 0 0 1rem 0;
  & span {
    font-weight: bold;
  }
`;
const ButtonLight = styled(Button)`
  background-color: #4abd7f;
  transition: 0.3s ease;
  &:hover {
    background-color: #ffffff;
    color: #005650;
  }
`;

const BgTopRight = styled(TopRight)`
  position: absolute;
  top: 0;
  right: 0;
`;
const BgTopLeft = styled(TopLeft)`
  position: absolute;
  top: 0;
  left: 0;
`;
const ProblemBg = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AboutCopy = () => {
  return (
    <AboutCopySection>
      <AboutCopyContainer>
        <AboutCopyHalf>
          <AboutCopyHeader>O mnie</AboutCopyHeader>
          <AboutCopyParagraphLeft>
            Jestem certyfikowanym specjalistą psychoterapii uzależnień oraz
            superwizorem w tym obszarze, posiadam również certyfikat I stopnia z
            psychodramy. Ukończyłam także wszystkie etapy szkolenia
            podyplomowego z psychoterapii prowadzonego przez Sekcję Naukową
            Polskiego Towarzystwa Psychiatrycznego zmierzającego do uzyskania
            certyfikatu psychoterapeuty.
          </AboutCopyParagraphLeft>
          <Link to="/skontaktuj-sie">
            <ButtonLight>Skontaktuj się</ButtonLight>
          </Link>
        </AboutCopyHalf>
        <AboutCopyHalf>
          <AboutCopyParagraphRight>
            Mam duże doświadczenie w prowadzeniu psychoterapii osób
            uzależnionych, osób, u których – obecnie bądź w przeszłości –
            <span>występował w rodzinie/związku problem</span> uzależnienia oraz
            w psychoterapii innych osób borykających się m.in. z lękiem,
            depresją, niskim poczuciem własnej wartości, mierzących się z
            kryzysem (w związku, <span>życiu zawodowym</span>, przewlekłą
            chorobą, bolesną stratą oraz innymi trudnymi doświadczeniami).
          </AboutCopyParagraphRight>
          <AboutCopyParagraphRight>
            Posiadam wykształcenie i doświadczenie w stosowaniu kilku modeli
            psychoterapii: psychodynamicznego, poznawczego oraz psychodramy J.L.
            Moreno.
          </AboutCopyParagraphRight>
          <AboutCopyParagraphRight>
            Jestem członkiem Polskiego Towarzystwa Psychologicznego.
          </AboutCopyParagraphRight>
        </AboutCopyHalf>
      </AboutCopyContainer>
      <ProblemBg>
        <StaticImage
          src="../images/background-problem.png"
          alt="bg-testimonial"
          layout="fullWidth"
          placeholder="blurred"
        />
      </ProblemBg>
      <BgTopRight />
      <BgTopLeft />
    </AboutCopySection>
  );
};
export default AboutCopy;
