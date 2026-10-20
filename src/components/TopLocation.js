import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import TextLink from "./styles/TextLink";
import Sanitization from "../images/satnitization.svg";
import { StaticImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";
import { mapUrl } from "../config/location-map.cjs";

const Top = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10rem 0 4rem;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #f4f5f7;
  min-height: 44rem;
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
  @media (max-width: 1024px) {
    font-size: 42px;
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

const HeroContainer = styled(Container)`
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TopSection = styled.section`
  position: relative;
`;
const TitleGabinet = styled.p`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 34px;
  color: #000000;
  margin: 0;
`;
const Adress = styled.p`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 150%;
  color: #3e7672;
`;
const AddressLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: rgba(74, 189, 127, 1);
  }
`;
const SantBox = styled.div`
  position: absolute;
  padding: 1.5rem 2rem;
  display: flex;
  width: max-content;
  align-items: center;
  align-content: center;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 125%;
  color: #1f1f1f;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  border-radius: 15px;
  & svg {
    margin-right: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 1rem;
    max-width: 90%;
  }
`;

const TopLocation = ({ address }) => {
  return (
    <StaticQuery
      query={graphql`
        query LocationQuery {
          datoCmsLocation {
            title
            subheader
            paragraf
            sanitization
          }
          datoCmsGlobal {
            adress
          }
        }
      `}
      render={(data) => (
        <TopSection id="hero">
          <Top>
            <HeroContainer>
              <TextContainer>
                <HeroTitle>Gabinet psychologiczny przy ul. {address.streetAddress} w Rzeszowie</HeroTitle>

                <ParagraphText>
                  Gabinet psychologiczny znajduje się przy ul. {address.streetAddress} w Rzeszowie. {data.datoCmsLocation.paragraf}
                </ParagraphText>
                <TitleGabinet>{data.datoCmsLocation.subheader}</TitleGabinet>
                <Adress>
                <AddressLink
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  {data.datoCmsGlobal.adress}
                </AddressLink>
              </Adress>
                <ParagraphText>
                  W tym gabinecie prowadzę <TextLink to="/pomoc-psychologiczna-rzeszow/">pomoc psychologiczną dla dorosłych</TextLink>.
                </ParagraphText>
              </TextContainer>
            </HeroContainer>
          </Top>
          <HalfBackground>
            <StaticImage
              src="../images/gabinet-psychologica.jpg"
              alt={`Wnętrze gabinetu psychologicznego Psychologica przy ul. ${address.streetAddress} w Rzeszowie`}
              layout="fullWidth"
              placeholder="blurred"
            />
            <SantBox>
              <Sanitization aria-hidden="true" focusable="false" /> {data.datoCmsLocation.sanitization}
            </SantBox>
          </HalfBackground>
        </TopSection>
      )}
    />
  );
};
export default TopLocation;
