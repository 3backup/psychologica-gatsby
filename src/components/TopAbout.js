import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import { StaticQuery, graphql } from "gatsby";
import AboutContactLink from "./styles/AboutContactLink";
import TextLink from "./styles/TextLink";
import { StaticImage } from "gatsby-plugin-image";

const Top = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10rem 0 4rem;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  min-height: 50rem;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 80px 0 0;
    min-height: auto;
    height: max-content;
  }
`;
const HalfBackground = styled.div`
  position: absolute;
  overflow: hidden;
  top: 6.875rem;
  bottom: 0;
  left: 50%;
  width: 50%;
  height: auto;
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
const HeroTitle = styled.h1`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 2.75rem;
  line-height: 125%;
  margin: 0;
  color: #1f1f1f;
  & span {
    color: #4abd7f;
    font-weight: 500;
  }
  @media (max-width: 1024px) {
    font-size: 42px;
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
`;

const TopAbout = () => {
  return (
    <StaticQuery
      query={graphql`
        query AboutTop {
          datoCmsAboout {
            renataZuba
            lead
            paragraph
            buttonCta
          }
        }
      `}
      render={(data) => (
        <TopSection id="hero">
          <Top>
            <HeroContainer>
              <TextContainer>
                <HeroTitle>
                  Psycholog kliniczny Rzeszów – <span>Renata Zuba</span> | Psychologica
                </HeroTitle>
                <ParagraphText>{data.datoCmsAboout.lead}</ParagraphText>
                <SmallerParagraph>
                  {data.datoCmsAboout.paragraph}
                </SmallerParagraph>
                <SmallerParagraph>
                  Sprawdź, jak wygląda oferowana przeze mnie <TextLink to="/pomoc-psychologiczna-rzeszow/">pomoc psychologiczna dla dorosłych</TextLink>.
                </SmallerParagraph>
                <AboutContactLink to="/skontaktuj-sie/">{data.datoCmsAboout.buttonCta}</AboutContactLink>
              </TextContainer>
            </HeroContainer>
          </Top>
          <HalfBackground>
            <StaticImage
              src="../images/about-renata-zuba.jpg"
              alt="Renata Zuba w gabinecie Psychologica"
              layout="constrained"
              width={720}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              formats={["auto", "avif", "webp"]}
              loading="eager"
              style={{ width: "100%", height: "100%" }}
              imgStyle={{ objectPosition: "center 35%" }}
              placeholder="blurred"
            />
          </HalfBackground>
        </TopSection>
      )}
    />
  );
};
export default TopAbout;
