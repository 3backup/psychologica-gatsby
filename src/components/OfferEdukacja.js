import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import { StaticImage } from "gatsby-plugin-image";
import Whatisimportant from "../images/whatisimportant-bg.svg";
import { StaticQuery, graphql } from "gatsby";

const PsychoterapiaSection = styled.section`
  position: relative;
  padding: 7rem 0;
  background: #f4f5f7;
`;
const PsychoterapiaContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  width: 43.75%;
  margin-top: -9rem;
  @media (max-width: 1024px) {
    width: 33%;
    margin: 0;
    position: sticky;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    aspect-ratio: 1.1;
    overflow: hidden;
  }
`;
const RightContent = styled.div`
  box-sizing: border-box;
  padding: 0 6.25% 0 2rem;
  width: 56.25%;
  @media (max-width: 1024px) {
    width: 66%;
    margin: 0;
    position: sticky;
  }
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`;
const HeaderPsychoterapia = styled.h2`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 125%;
  color: #1f1f1f;
`;
const LeadPsychoterapia = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 150%;
  color: #3e7672;
  opacity: 0.9;
  @media (max-width: 578px) {
    font-size: 20px;
  }
`;
const ParagraphPsychoterapia = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #3e7672;
  opacity: 0.9;
`;
const BgElement = styled(Whatisimportant)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const OfferEdukacja = () => {
  return (
    <StaticQuery
      query={graphql`
        query ZajEdukacQuery {
          datoCmsOfertaEdukacyjna {
            edukacyjnaSzaraSekcjaOpisMniejszy
            edukacyjnaSzaraSekcjaOpisWiKszy
            edukacyjnaSzaraSekcjaTytu
          }
        }
      `}
      render={(data) => (
        <PsychoterapiaSection>
          <PsychoterapiaContainer>
            <RightContent>
              <HeaderPsychoterapia>
                {data.datoCmsOfertaEdukacyjna.edukacyjnaSzaraSekcjaTytu}
              </HeaderPsychoterapia>
              <LeadPsychoterapia>
                {data.datoCmsOfertaEdukacyjna.edukacyjnaSzaraSekcjaOpisWiKszy}
              </LeadPsychoterapia>
              <ParagraphPsychoterapia>
                {data.datoCmsOfertaEdukacyjna.edukacyjnaSzaraSekcjaOpisMniejszy}
              </ParagraphPsychoterapia>
            </RightContent>
            <LeftContent>
              <StaticImage
                src="../images/edukacja-zdjecie.jpg"
                alt="Psychoedukacja - Renata Zuba wyst??pienie konferencja UJ}"
                layout="fullWidth"
                placeholder="blurred"
              />
            </LeftContent>
          </PsychoterapiaContainer>
          <BgElement />
        </PsychoterapiaSection>
      )}
    />
  );
};
