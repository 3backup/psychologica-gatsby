import React from "react";
import Container from "./styles/Container";
import Button from "./styles/Button";
import { StaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";

const AboutCopySection = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 7.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const OfferContainer = styled(Container)`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  background: #f4f5f7;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const OfferImage = styled.div`
  max-height: max-content;
  z-index: 2;
  width: 43.75%;
  @media (max-width: 768px) {
    width: 80%;
    margin: 5rem auto 0 auto;
    max-height: auto;
    aspect-ratio: 1.2;
    overflow: hidden;
  }
`;
const OfferContent = styled.div`
  z-index: 2;
  box-sizing: border-box;
  width: 56.25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 6.25%;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 5rem 0;
    margin: 0 auto;
    overflow: hidden;
  }
`;
const OfferAboutHeader = styled.div`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 125%;
  color: #3e7672;
  & span {
    color: rgba(74, 189, 127, 1);
  }
`;
const OfferAboutPragraph = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  margin: 2.5rem auto;
  color: #3e7672;
  opacity: 0.8;
`;
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 80%;
  }
`;
const OfferLink = styled(Link)`
  margin-left: 4rem;
  cursor: pointer;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #005650;
  transition: 0.3s;
  border-bottom: 2px solid rgba(40, 174, 102, 0);
  a {
    text-decoration: none;
    color: #005650;
    transition: 0.3s;
    &:hover {
      color: rgba(40, 174, 102, 1);
    }
  }
  &:hover {
    color: rgba(40, 174, 102, 1);
    border-bottom: 2px solid rgba(40, 174, 102, 1);
  }
  @media (max-width: 1024px) {
    margin: 2rem auto;
  }
`;
const BgContainer = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
`;

const AboutOffer = () => {
  return (
    <StaticQuery
      query={graphql`
        query PsychologRenataQuery {
          datoCmsSummaryAbout {
            aboutSummaryDesc
            aboutSummaryMainbutton
            aboutSummarySecondbutton
            aboutSummaryTitle
          }
        }
      `}
      render={(data) => (
        <AboutCopySection>
          <OfferContainer>
            <OfferImage>
              <StaticImage
                src="../images/about-renata-zuba.jpg"
                alt="Renata Zuba - o mnie"
                layout="fullWidth"
                quality="100"
                placeholder="blurred"
              />
            </OfferImage>
            <OfferContent>
              <OfferAboutHeader
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsSummaryAbout.aboutSummaryTitle,
                }}></OfferAboutHeader>
              <OfferAboutPragraph>
                {data.datoCmsSummaryAbout.aboutSummaryDesc}
              </OfferAboutPragraph>
              <HeaderDiv>
                <Link to="/o-mnie/">
                  <Button>
                    {data.datoCmsSummaryAbout.aboutSummaryMainbutton}
                  </Button>
                </Link>

                <OfferLink>
                  <Link to="/skontaktuj-sie/">
                    {data.datoCmsSummaryAbout.aboutSummarySecondbutton}
                  </Link>
                </OfferLink>
              </HeaderDiv>
            </OfferContent>
            <BgContainer>
              <StaticImage
                src="../images/background-problem.png"
                alt="bg-testimonial"
                layout="fullWidth"
                placeholder="blurred"
              />
            </BgContainer>
          </OfferContainer>
        </AboutCopySection>
      )}
    />
  );
};
export default AboutOffer;
