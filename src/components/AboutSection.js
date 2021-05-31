import React from "react";
import Container from "./styles/Container";
import { StaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "linaria/react";
import Button from "./styles/Button";
import SkillList from "./styles/SkillList";
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
    <StaticQuery
      query={graphql`
        query AboutSectionQuery {
          datoCmsIndex {
            psychologDesc
            psychologTitle
            psychologTitleSkills
            psychologCtaDrugi
            psychologCta
          }
        }
      `}
      render={(data) => (
        <AboutContainer>
          <AboutMaxContainer>
            <HalfGrid>
              <AboutTitle
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsIndex.psychologTitle,
                }}></AboutTitle>
              <AboutParagraph
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsIndex.psychologDesc,
                }}></AboutParagraph>
              <AboutButtons>
                <Link to="/o-mnie/">
                  <Button>{data.datoCmsIndex.psychologCta}</Button>
                </Link>
                <AboutLink to="/">
                  {data.datoCmsIndex.psychologCtaDrugi}
                </AboutLink>
              </AboutButtons>
              <SkillList
                header={data.datoCmsIndex.psychologTitleSkills}
                subheader={data.datoCmsIndex.psychologTitleSkillsPart}
              />
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
      )}
    />
  );
};
export default AboutSection;
