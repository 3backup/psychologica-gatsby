import React from "react";
import Container from "./styles/Container";
import { StaticQuery, graphql, Link } from "gatsby";
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
    <StaticQuery
      query={graphql`
        query AboutGreenQuery {
          datoCmsAboout {
            greenLead
            greenCta
            greenParagraph
            aboutGreen
          }
        }
      `}
      render={(data) => (
        <AboutCopySection>
          <AboutCopyContainer>
            <AboutCopyHalf>
              <AboutCopyHeader>{data.datoCmsAboout.aboutGreen}</AboutCopyHeader>
              <AboutCopyParagraphLeft>
                {data.datoCmsAboout.greenLead}
              </AboutCopyParagraphLeft>
              <Link to="/skontaktuj-sie">
                <ButtonLight>{data.datoCmsAboout.greenCta}</ButtonLight>
              </Link>
            </AboutCopyHalf>
            <AboutCopyHalf>
              <AboutCopyParagraphRight
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsAboout.greenParagraph,
                }}></AboutCopyParagraphRight>
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
      )}
    />
  );
};
export default AboutCopy;
