import React from "react";
import "normalize.css";
import { styled } from "linaria/react";

import { StaticImage } from "gatsby-plugin-image";
import Container from "./styles/Container";
import Money from "../images/money.svg";
import Contact from "../images/Contact-us.svg";
import Plan from "../images/Plan.svg";
import EveryTiime from "../images/EveryTime.svg";
import ProcessLeaves from "../images/process-leaves.svg";
import Button from "./styles/Button";

const HalfGrid = styled.div`
  box-sizing: border-box;
  width: 50%;
  padding-left: 6.25%;
  z-index: 1;
`;
const Section = styled.section`
  margin: 7.5rem 0 0 0;
`;
const TitleSection = styled.h3`
  font-family: Red Hat Display;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 125%;
  color: #1f1f1f;
  & span {
    font-weight: bold;
    font-size: 42px;
    line-height: 125%;
    /* identical to box height, or 52px */
    color: #4abd7f;
  }
`;
const ParagraphIntro = styled.p`
  font-family: Manrope;
  font-style: normal;
  margin: 1.875rem 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */
  color: #3e7672;
  opacity: 0.8;
`;
const HowProcessLookLike = styled(Container)`
  max-height: 20rem;
  display: flex;
  padding-right: 0;

  flex-direction: row;
  align-items: center;
`;
const HowMuchItCost = styled.div`
  box-sizing: border-box;
  display: flex;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  position: relative;
  color: #1f1f1f;
  opacity: 0.8;
  padding: 1.875rem 0;
  &:before {
    content: "";
    width: 50%;
    height: 1.1px;
    background-color: #000000;
    opacity: 0.1;
    position: absolute;
    left: 0;
    top: -1px;
  }
`;
const MoneyDollarSign = styled(Money)`
  margin-right: 0.75rem;
`;
const GreenProcessElement = styled.div`
  min-height: 10rem;
  background-color: #f4f5f7;
  overflow: hidden;
  z-index: 0;
  position: relative;
  width: 100%;
`;
const ContentGreen = styled(Container)`
  padding: 7.5rem 6.25%;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
`;
const SingleStep = styled.div`
  max-width: 28.5%;
`;
const SingleStepImage = styled.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 15px;
  width: 4.75rem;
  height: 4.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;
const SingleStepHeader = styled.h4`
  margin: 1.75rem 0 1.25rem 0;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 125%;
  color: #1f1f1f;
`;
const SingleStepParagraph = styled.p`
  margin: 0;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #3e7672;
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const GreenProcessImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -8
  overflow: hidden;
  opacity: 0.5;
  left: 0;
`;

const LeavesBg = styled(ProcessLeaves)`
  position: absolute;
  right: 0;
  bottom: -40%;
`;

function Process({ siteTitle, menuLinks }) {
  return (
    <Section id="cooperation" sn>
      <HowProcessLookLike>
        <HalfGrid>
          <TitleSection>
            Jak wygląda <span>współpraca?</span>
          </TitleSection>
          <ParagraphIntro>
            Sposób pracy dostosowuję do problematyki i potrzeb konkretnej osoby.
            Korzystając z szerokich możliwości podejścia integracyjnego stosuję
            dialog terapeutyczny oraz techniki psychodramy, terapii
            poznawczo-behawioralnej, modelu systemowego i innych.
          </ParagraphIntro>
          <HowMuchItCost>
            <MoneyDollarSign />
            Koszt jednej wizyty to 100zł
          </HowMuchItCost>
        </HalfGrid>
        <HalfGrid>
          <StaticImage
            src="../images/Process-image.jpg"
            alt="Roslina psychologica"
            layout="fullWidth"
            placeholder="blurred"
          />
        </HalfGrid>
      </HowProcessLookLike>
      <GreenProcessElement>
        <Container>
          <ContentGreen>
            <SingleStep>
              <SingleStepImage>
                <Contact />
              </SingleStepImage>
              <SingleStepHeader>1. Skontaktuj się</SingleStepHeader>
              <SingleStepParagraph>
                Każdy kontakt rozpoczyna się od wstępnej diagnozy problemów,
                zasobów, potrzeb i możliwości.
              </SingleStepParagraph>
              <Button>Skontaktuj się</Button>
            </SingleStep>
            <SingleStep>
              <SingleStepImage>
                <Plan />
              </SingleStepImage>
              <SingleStepHeader>
                2. Stworzenie planu terapi dla Ciebie
              </SingleStepHeader>
              <SingleStepParagraph>
                Następny krok to ustalenie celów i zasad pomocy psychologicznej
                lub psychoterapii.
              </SingleStepParagraph>
            </SingleStep>
            <SingleStep>
              <SingleStepImage>
                <EveryTiime />
              </SingleStepImage>
              <SingleStepHeader>3. Cykliczna praca</SingleStepHeader>
              <SingleStepParagraph>
                Zarówno w krótkoterminowej pomocy psychologicznej, jak i w
                psychoterapii, dążę do wzmacniania mocnych stron i uruchamiania
                wewnętrznego potencjału osoby, z którą pracuję.
              </SingleStepParagraph>
            </SingleStep>
          </ContentGreen>
        </Container>
        <GreenProcessImage>
          <StaticImage
            src="../images/process-bg.jpg"
            alt="background-proces"
            placeholder="blurred"
            layout="fullWidth"
          />
        </GreenProcessImage>
        <LeavesBg />
      </GreenProcessElement>
    </Section>
  );
}

export default Process;
