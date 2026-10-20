import React from "react";
import "normalize.css";
import { styled } from "linaria/react";
import { StaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Container from "./styles/Container";
import Money from "../images/money.svg";
import Clock from "../images/clock.svg";
import contact from "../assets/Contact-us.svg";
import plan from "../assets/Plan.svg";
import everyTime from "../assets/EveryTime.svg";
import ProcessLeaves from "../images/process-leaves.svg";
import Button from "./styles/Button";

const HalfGrid = styled.div`
  box-sizing: border-box;
  width: 50%;
  padding-left: 6.25%;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
const Section = styled.section`
  margin: 7.5rem 0 0 0;
`;
const TitleSection = styled.h2`
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
  display: flex;
  padding-right: 0;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1230px) {
    max-height: max-content;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 1.5rem;
  }
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
  padding: 1rem 0;
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
const ClockSign = styled(Clock)`
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
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 0;
  }
`;
const SingleStep = styled.div`
  max-width: 28.5%;
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 2rem 0;
  }
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
const SingleStepHeader = styled.h3`
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
  z-index: -8;
  overflow: hidden;
  opacity: 0.5;
  left: 0;
`;

const LeavesBg = styled(ProcessLeaves)`
  position: absolute;
  right: 0;
  bottom: -40%;
`;
const ImageGrid = styled(HalfGrid)`
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto 2rem auto;
  }
`;

const Process = ({ title, introduction, steps, sessionFacts }) => {
  return (
    <StaticQuery
      query={graphql`
        query ProcessQuery {
          datoCmsHowitlookslike {
            wspPracaTytu
            wspPracaOpis
            processTime
            processThirdsstepDesc
            processThirddstepTitle
            processSecondststepDesc
            processSecondstepTitle
            processFirststepTitle
            processFirststepDesc
            processFirststepCta
            wspPracaCena
          }
        }
      `}
      render={(data) => (
        <Section id="cooperation">
          <HowProcessLookLike>
            <HalfGrid>
              {title ? (
                <TitleSection>{title}</TitleSection>
              ) : (
                <TitleSection
                  dangerouslySetInnerHTML={{
                    __html: data.datoCmsHowitlookslike.wspPracaTytu,
                  }} />
              )}
              <ParagraphIntro>
                {introduction || data.datoCmsHowitlookslike.wspPracaOpis}
              </ParagraphIntro>
              {sessionFacts && <SingleStepHeader as="h2">Czas i koszt spotkań</SingleStepHeader>}
              <HowMuchItCost>
                <ClockSign aria-hidden="true" focusable="false" />
                {sessionFacts ? `Czas sesji: ${sessionFacts.duration}` : data.datoCmsHowitlookslike.processTime}
              </HowMuchItCost>
              <HowMuchItCost>
                <MoneyDollarSign aria-hidden="true" focusable="false" />
                {sessionFacts ? `${sessionFacts.priceLabel}: ${sessionFacts.price}` : data.datoCmsHowitlookslike.wspPracaCena}
              </HowMuchItCost>
              {sessionFacts && (
                <ParagraphIntro>
                  Sesje mogą odbywać się w gabinecie w Rzeszowie albo online.
                  Gabinet znajduje się przy ul. {sessionFacts.address.streetAddress}, {sessionFacts.address.postalCode} {sessionFacts.address.addressLocality}.{" "}
                  <Link to="/lokalizacja/">Sprawdź dojazd do gabinetu</Link>.
                </ParagraphIntro>
              )}
            </HalfGrid>
            <ImageGrid>
              <StaticImage
                src="../images/Process-image.jpg"
                alt="Renata Zuba podczas spotkania online przy komputerze"
                layout="fullWidth"
                placeholder="blurred"
              />
            </ImageGrid>
          </HowProcessLookLike>
          <GreenProcessElement>
            <Container>
              {steps && <TitleSection style={{ paddingTop: "4rem" }}>Jak wygląda proces</TitleSection>}
              <ContentGreen>
                <SingleStep>
                  <SingleStepImage>
                    <img src={contact} width="56" height="56" alt="" aria-hidden="true" loading="lazy" />
                  </SingleStepImage>
                  <SingleStepHeader>
                    {steps ? steps[0].title : data.datoCmsHowitlookslike.processFirststepTitle}
                  </SingleStepHeader>
                  <SingleStepParagraph>
                    {steps ? steps[0].description : data.datoCmsHowitlookslike.processFirststepDesc}
                  </SingleStepParagraph>
                  <Link to="/skontaktuj-sie/">
                    <Button>
                      {data.datoCmsHowitlookslike.processFirststepCta}
                    </Button>
                  </Link>
                </SingleStep>
                <SingleStep>
                  <SingleStepImage>
                    <img src={plan} width="56" height="56" alt="" aria-hidden="true" loading="lazy" />
                  </SingleStepImage>
                  <SingleStepHeader>
                    {steps ? steps[1].title : data.datoCmsHowitlookslike.processSecondstepTitle}
                  </SingleStepHeader>
                  <SingleStepParagraph>
                    {steps ? steps[1].description : data.datoCmsHowitlookslike.processSecondststepDesc}
                  </SingleStepParagraph>
                </SingleStep>
                <SingleStep>
                  <SingleStepImage>
                    <img src={everyTime} width="56" height="56" alt="" aria-hidden="true" loading="lazy" />
                  </SingleStepImage>
                  <SingleStepHeader>
                    {steps ? steps[2].title : data.datoCmsHowitlookslike.processThirddstepTitle}
                  </SingleStepHeader>
                  <SingleStepParagraph>
                    {steps ? steps[2].description : data.datoCmsHowitlookslike.processThirdsstepDesc}
                  </SingleStepParagraph>
                </SingleStep>
              </ContentGreen>
            </Container>
            <GreenProcessImage>
              <StaticImage
                src="../images/process-bg.jpg"
                alt=""
                aria-hidden="true"
                placeholder="blurred"
                layout="fullWidth"
              />
            </GreenProcessImage>
            <LeavesBg aria-hidden="true" focusable="false" />
          </GreenProcessElement>
        </Section>
      )}
    />
  );
};
export default Process;
