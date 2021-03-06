import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import Acceptance from "../images/acceptance.svg";
import Discretion from "../images/discretion.svg";
import Individual from "../images/indyvidual.svg";
import Whatisimportant from "../images/whatisimportant-bg.svg";

const MainContainer = styled.section`
  position: relative;
  padding: 7rem 0;
  overflow: hidden;
`;
const HeaderTitle = styled.h3`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 125%;
  text-align: center;
  color: #000000;
`;
const HeaderParagraph = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  text-align: center;
  color: #3e7672;
  opacity: 0.7;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 2.5rem auto;
  max-width: 62.5%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 7rem;
  }
`;
const SingleBox = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;
  margin: 0 2rem;
  justify-content: space-between;
  @media (max-width: 1024px) {
    margin: 0 0.8rem;
  }
  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
  }
`;
const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoxHeader = styled.h3`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  margin: 1.5rem 0;
  line-height: 125%;
  text-align: center;
  color: #000000;
`;

const BgElement = styled(Whatisimportant)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const WhatIsImportant = ({ props }) => {
  return (
    <StaticQuery
      query={graphql`
        query WhatisimportantQuery {
          datoCmsAboout {
            whatisimportantFirstelement
            whatisimportantParagraph
            whatisimportantSecondelement
            whatisimportantThirdelement
            whatisimportantTitle
          }
        }
      `}
      render={(data) => (
        <MainContainer id="WhatIsImportant">
          <Container>
            <HeaderTitle>{data.datoCmsAboout.whatisimportantTitle}</HeaderTitle>
            <HeaderParagraph>
              {data.datoCmsAboout.whatisimportantParagraph}
            </HeaderParagraph>
            <HeaderDiv>
              <SingleBox>
                <BoxIcon>
                  <Individual />
                </BoxIcon>
                <BoxHeader>
                  {data.datoCmsAboout.whatisimportantSecondelement}
                </BoxHeader>
              </SingleBox>
              <SingleBox>
                <BoxIcon>
                  <Discretion />
                </BoxIcon>
                <BoxHeader>
                  {data.datoCmsAboout.whatisimportantFirstelement}
                </BoxHeader>
              </SingleBox>
              <SingleBox>
                <BoxIcon>
                  <Acceptance />
                </BoxIcon>
                <BoxHeader>
                  {data.datoCmsAboout.whatisimportantThirdelement}
                </BoxHeader>
              </SingleBox>
            </HeaderDiv>
          </Container>
          <BgElement />
        </MainContainer>
      )}
    />
  );
};
export default WhatIsImportant;
