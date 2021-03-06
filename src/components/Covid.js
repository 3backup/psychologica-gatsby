import React from "react";
import Container from "./styles/Container";
import { styled } from "linaria/react";
import { ButtonLightGreen } from "./styles/ButtonLightGreen";
import { Link } from "gatsby";
import CovidSvg from "../images/covid.svg";
import CovidTopRight from "../images/covid-top-right.svg";
import CovidBottomLeft from "../images/covid-bottom-left.svg";
import { StaticQuery, graphql } from "gatsby";

const CovidContainer = styled(Container)`
  margin: 8.75rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #005650;
  min-height: 10rem;
  position: relative;
  text-align: cetner;
`;
const CovidHeader = styled.h3`
  font-family: Red Hat Display;
  font-style: normal;
  margin: 0;
  font-weight: normal;
  font-size: 36px;
  line-height: 125%;
  text-align: center;
  color: #ffffff;
`;
const CovidParagraph = styled.p`
  font-family: Manrope;
  width: 62.5%;
  margin: 2.5rem auto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
const LightGreen = styled(ButtonLightGreen)`
  margin: 0 auto 5rem auto;
  &:hover {
    background-color: #fff;
    border: none;
  }
  @media (max-width: 1024px) {
    min-width: 80%;
    width: 80%;
  }
  @media (max-width: 768px) {
    min-width: 100%;
    width: 100%;
  }
`;
const CovidImage = styled.div`
  width: 8.25rem;
  display: flex;
  margin: -4.125rem auto 3.75rem auto;
  justify-content: center;
  align-items: center;
  height: 8.25rem;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  background: #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 50px;
`;
const CovidPostionBottom = styled(CovidTopRight)`
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0.05;
`;
const CovidPostionTop = styled(CovidBottomLeft)`
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 0.05;
`;
const LinkElement = styled(Link)`
  margin: 0 auto;
`;

const Covid = () => {
  return (
    <StaticQuery
      query={graphql`
        query CovidQuery {
          datoCmsCovi {
            paragraph
            spotkaniaOsobisteLubSesjeZdalne
            buttonCta
          }
        }
      `}
      render={(data) => (
        <CovidContainer>
          <CovidImage>
            <CovidSvg />
          </CovidImage>
          <CovidHeader>
            {data.datoCmsCovi.spotkaniaOsobisteLubSesjeZdalne}
          </CovidHeader>
          <CovidParagraph>{data.datoCmsCovi.paragraph}</CovidParagraph>
          <LinkElement to="/skontaktuj-sie/">
            <LightGreen>{data.datoCmsCovi.buttonCta}</LightGreen>
          </LinkElement>
          <CovidPostionTop />
          <CovidPostionBottom />
        </CovidContainer>
      )}
    />
  );
};
export default Covid;
