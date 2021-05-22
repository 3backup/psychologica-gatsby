import React from "react";
import Container from "./styles/Container";
import { styled } from "linaria/react";
import { ButtonLightGreen } from "./styles/ButtonLightGreen";
import { Link } from "gatsby";
import OfferPriceImages from "../images/OfferPrice.svg";

const AboutCopySection = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 5rem 0;
`;
const OfferContainer = styled(Container)`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 5rem 7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background: #005650;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 5rem 2rem;
  }
`;
const OfferPriceText = styled.div`
  height: max-content;
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 38px;
  color: #ffffff;
  @media (max-width: 1024px) {
    text-align: center;
  }
  & span {
    display: block;
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: bold;
    font-size: 68px;
    line-height: 125%;
    text-align: left;
    color: #f4f5f7;
    @media (max-width: 1024px) {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`;
const ButtonLightGreenCenter = styled(ButtonLightGreen)`
  align-items: center;
`;
const ImageCenter = styled(OfferPriceImages)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OfferPrice = () => {
  return (
    <AboutCopySection>
      <OfferContainer>
        <OfferPriceText>
          Koszt wizyty Indywidualnej <span>100 zł</span>
        </OfferPriceText>
        <Link to="/skontaktuj-sie">
          <ButtonLightGreenCenter>Skontaktuj się</ButtonLightGreenCenter>
        </Link>
      </OfferContainer>
      <ImageCenter />
    </AboutCopySection>
  );
};
export default OfferPrice;
