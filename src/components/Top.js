import React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "./styles/Button";

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 47.5rem;
`;
const HalfBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 50%;
  width: 50%;
  height: 100%;
  z-index: -99;
  background-color: #f4f5f7;
`;
const TextContainer = styled.div`
  width: 43.75%;
`;
const HeaderTitle = styled.h2`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 68px;
  line-height: 125%;
  color: #1f1f1f;
  & span {
    font-weight: 500;
    font-size: 68px;
    line-height: 125%;
    color: #4abd7f;
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

const Header = ({ data }) => (
  <Top>
    <Container>
      <TextContainer>
        <HeaderTitle>
          Psychoterapia <span>godna Ciebie</span>
        </HeaderTitle>
        <ParagraphText>
          We create smart and agile tests for Experience Management, Market
          Research & Education. We have 20+ years of experience in
        </ParagraphText>
        {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
        <Button>Skontaktuj się</Button>
      </TextContainer>
    </Container>

    <HalfBackground></HalfBackground>
  </Top>
);

export default Header;

export const query = graphql`
  query {
    file(relativePath: { eq: "./top-image-plant.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
