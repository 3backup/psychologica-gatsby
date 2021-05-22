import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import Parking from "../images/parking.svg";
import { StaticImage } from "gatsby-plugin-image";

const MainContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding: 7rem 0;
  margin-bottom: -4rem;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;
const TestimonialBg = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.5;
  z-index: -9;
  width: 100%;
`;
const InnerContianer = styled(Container)`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const RightContent = styled.div`
  box-sizing: border-box;
  padding-left: 6.25%;
  width: 50%;
  border-left: 1px solid rgba(74, 189, 127, 0.15);
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 150%;
  color: #005650;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    border: none;
  }
`;
const LeftContet = styled.div`
  box-sizing: border-box;
  width: 50%;
  padding-right: 6.25%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    border: none;
  }
`;
const ParagraphLeft = styled.p`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 150%;
  /* or 33px */

  color: #005650;
`;
const Headlines = styled.h2`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 125%;
  color: #1f1f1f;
  & span {
    font-weight: bold;
    color: #4abd7f;
  }
`;
const ListContainer = styled.ol`
  margin: 0;
  padding: 0;
  padding-inline-start: 16px;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 150%;
  & li {
    padding-left: 1rem;
    margin-bottom: 1.5rem;
  }
`;
const ParkingInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #005650;
  & svg {
    margin-right: 0.8rem;
  }
`;

const HowToGet = ({ props }) => (
  <MainContainer id="HowToGetTo">
    <InnerContianer>
      <LeftContet>
        <Headlines>
          Dojazd <span>komunikacją miejską</span>
        </Headlines>
        <ParagraphLeft>
          Najbliższe przystanki: Marszałkowska szkoła, Dworzec Lokalny,
          Okulickiego C. handlowe..
        </ParagraphLeft>
      </LeftContet>
      <RightContent>
        <Headlines>
          Dojazd <span>samochodem</span>
        </Headlines>
        <ListContainer>
          <li>
            Jadąc od Okulickiego: skręcić w Baczyńskiego, a następnie w prawo na
            Reja.
          </li>
          <li>
            Jadąc od Lubelskiej: skręcić w Konopnickiej, a następnie za torami w
            prawo na Reja.
          </li>
        </ListContainer>
        <ParkingInfo>
          <Parking /> Mozliwość zaparkowania przy ulicy Reja. Brak płatnej
          strefy.
        </ParkingInfo>
      </RightContent>
    </InnerContianer>
    <TestimonialBg>
      <StaticImage
        src="../images/testimonial-bg.jpg"
        alt="bg-testimonial"
        layout="fullWidth"
        placeholder="blurred"
      />
    </TestimonialBg>
  </MainContainer>
);

export default HowToGet;
