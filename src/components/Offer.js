import React from "react";
import Container from "./styles/Container";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";
import { Link } from "gatsby";
import Psychology from "../images/offer-psychology.svg";
import Psychoeducation from "../images/psychology.svg";
import Supervision from "../images/supervision.svg";
import ArrowRight from "../images/arrow-right.svg";

const OfferSection = styled.section`
  box-sizing: border-box;
  background: #f4f5f7;
  width: 100%;
  padding: 7.5rem 0;
`;
const GridImage = styled.div`
  box-sizing: border-box;
  width: 43.75%;
  margin-top: -10rem;
`;
const ContentGrid = styled.div`
  box-sizing: border-box;
  width: 56.25%;
  padding: 0 6.25%;
`;
const OfferContainer = styled(Container)`
  display: flex;
  padding: 0;
  flex-direction: row;
`;
const OfferTitle = styled.h3`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 125%;
  color: #1f1f1f;
  margin: 0;
  & span {
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 125%;
    color: #4abd7f;
  }
`;
const OfferParagraph = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  color: #3e7672;
`;

const SingleOffer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -1.2rem;
  padding: 2.5rem 1.2rem 0 1.2rem;
  backdrop-filter: blur(10px);
  border-radius: 15px;
  transition: 0.3s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  &:last-of-type {
    border: none;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.6);
    border: none;
  }
`;
const SingleOfferImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.75rem;
  height: 4.75rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 15px;
`;
const SingleOfferText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
`;
const AboutLink = styled(Link)`
  display: flex;
  align-items: center;
  font-family: Red Hat Display;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  width: max-content;
  text-align: center;
  color: #005650;
  list-style-type: none;
  line-height: 60px;
  height: 3.75rem;
  border-bottom: 2px solid rgba(40, 174, 102, 0);
  transition: 0.3s;
  & svg {
    transition: 0.3s;
    margin-left: 1rem;
  }
  &:hover {
    border-bottom: 2px solid rgba(40, 174, 102, 1);
    & svg {
      margin-left: 2rem;
    }
  }
`;
const SingleOfferHeader = styled.h5`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 125%;
  margin: 0;
  color: #1f1f1f;
`;
const SingleOfferParagraph = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin: 1rem 0;
  line-height: 150%;
  color: #3e7672;
  opacity: 0.7;
`;

const Offer = () => {
  return (
    <OfferSection>
      <OfferContainer>
        <GridImage>
          <StaticImage
            src="../images/offer-image.jpg"
            alt="Renata Zuba oferta"
            layout="fullWidth"
            placeholder="blurred"
          />
        </GridImage>
        <ContentGrid>
          <OfferTitle>
            Moja <span>oferta</span>
          </OfferTitle>
          <OfferParagraph>
            We create smart and agile tests for Experience Management,{" "}
            <span>Market Research & Education.</span> We have 20+ years of
            experience in academic an
          </OfferParagraph>
          <SingleOffer>
            <SingleOfferImage>
              <Psychology />
            </SingleOfferImage>
            <SingleOfferText>
              <SingleOfferHeader>
                Psychoterapia i pomoc psychologiczna
              </SingleOfferHeader>
              <SingleOfferParagraph>
                We create smart and agile tests for Experience Management,
                Market Research
              </SingleOfferParagraph>
              <AboutLink to="/">
                Czytaj więcej
                <ArrowRight />
              </AboutLink>
            </SingleOfferText>
          </SingleOffer>
          <SingleOffer>
            <SingleOfferImage>
              <Supervision />
            </SingleOfferImage>
            <SingleOfferText>
              <SingleOfferHeader>Superwizja </SingleOfferHeader>
              <SingleOfferParagraph>
                We create smart and agile tests for Experience Management,
                Market Research
              </SingleOfferParagraph>
              <AboutLink to="/">
                Czytaj więcej
                <ArrowRight />
              </AboutLink>
            </SingleOfferText>
          </SingleOffer>
          <SingleOffer>
            <SingleOfferImage>
              <Psychoeducation />
            </SingleOfferImage>
            <SingleOfferText>
              <SingleOfferHeader>Pscyhoedukacja </SingleOfferHeader>
              <SingleOfferParagraph>
                We create smart and agile tests for Experience Management,
                Market Research
              </SingleOfferParagraph>
              <AboutLink to="/">
                Czytaj więcej
                <ArrowRight />
              </AboutLink>
            </SingleOfferText>
          </SingleOffer>
        </ContentGrid>
      </OfferContainer>
    </OfferSection>
  );
};
export default Offer;