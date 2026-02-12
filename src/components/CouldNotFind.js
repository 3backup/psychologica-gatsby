import React from "react";
import Container from "./styles/Container";
import { styled } from "linaria/react";
import Button from "./styles/Button";
import AboutLeaves from "../images/about-leaves.svg";
import { Link } from "gatsby";

const ErrorSection = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: calc(100vh - 10rem);
`;
const ErrorContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;
  padding: 7rem 0;
  background: #f4f5f7;
`;
const MainTitle = styled.h1`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 125%;
  color: #1f1f1f;
  margin: 0;
`;
const MainParagraph = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  text-align: center;
  color: #3e7672;
`;
const LeavesBg = styled(AboutLeaves)`
  position: absolute;
  right: 0;
  z-index: -9;
  bottom: 15%;
`;
const LeavesBgLeft = styled(AboutLeaves)`
  position: absolute;
  left: 0;
  transform: scale(-1);
  z-index: -9;
  top: 0;
`;
export const CouldNotFind = () => {
  return (
    <ErrorSection>
      <ErrorContainer>
        <MainTitle>Strona nie znaleziona – Psychologica Rzeszów</MainTitle>
        <MainParagraph>
          Wygląda na to, że ta strona nie istnieje. <br />
          Wróc do strony głównej
        </MainParagraph>
        <Link to="/">
          <Button>Wóc na stronę główną</Button>
        </Link>
      </ErrorContainer>
      <LeavesBg />
      <LeavesBgLeft></LeavesBgLeft>
    </ErrorSection>
  );
};
