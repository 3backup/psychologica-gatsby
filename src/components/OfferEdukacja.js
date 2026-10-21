import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import { StaticImage } from "gatsby-plugin-image";
import EducationDetails from "./EducationDetails";
import { StaticQuery, graphql } from "gatsby";

const EducationSection = styled.div`
  padding: 4rem 0;
  background: #f4f5f7;

  @media (max-width: 900px) { padding: 2.5rem 0; }
`;
const EducationContainer = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: clamp(3rem, 5vw, 5rem);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 2.5rem;
  }
`;
const EducationContent = styled.div`
  min-width: 0;
  @media (max-width: 900px) { order: 2; }
`;
const Introduction = styled.section`
  padding-bottom: 2.5rem;
`;
const StickyPhoto = styled.figure`
  position: sticky;
  top: 8rem;
  align-self: start;
  justify-self: end;
  box-sizing: border-box;
  width: 100%;
  max-width: min(28rem, calc(81.65vh - 12.25rem));
  margin: 0;
  padding: 0.75rem;
  border: 1px solid #e0e7e4;
  border-radius: 1.5rem;
  background: #fff;
  box-shadow: 0 12px 32px rgba(0, 54, 50, 0.06);

  .gatsby-image-wrapper {
    display: block;
    border-radius: 1rem;
  }

  [data-main-image] {
    opacity: 1 !important;
    transition: none;
  }

  [data-placeholder-image] { opacity: 0 !important; }

  figcaption {
    padding: 1rem 0.5rem 0.25rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  figcaption span {
    display: block;
    color: #3e7672;
    font-family: Manrope, sans-serif;
    font-size: 0.875rem;
  }

  @media (max-width: 900px) {
    position: static;
    order: 1;
    justify-self: center;
    max-width: 24rem;
  }
`;
const HeaderPsychoterapia = styled.h2`
  margin: 0 0 1.5rem;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 125%;
  color: #1f1f1f;
  @media (max-width: 578px) {
    font-size: 32px;
  }
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
export const OfferEdukacja = () => {
  return (
    <StaticQuery
      query={graphql`
        query ZajEdukacQuery {
          datoCmsOfertaEdukacyjna {
            edukacyjnaSzaraSekcjaOpisMniejszy
            edukacyjnaSzaraSekcjaOpisWiKszy
          }
        }
      `}
      render={(data) => (
        <EducationSection data-education-layout="">
          <EducationContainer>
            <EducationContent>
              <Introduction>
                <HeaderPsychoterapia>
                  Szkolenia, warsztaty i webinaria
                </HeaderPsychoterapia>
                <LeadPsychoterapia>
                  {data.datoCmsOfertaEdukacyjna.edukacyjnaSzaraSekcjaOpisWiKszy}
                </LeadPsychoterapia>
                <ParagraphPsychoterapia>
                  {data.datoCmsOfertaEdukacyjna.edukacyjnaSzaraSekcjaOpisMniejszy}
                </ParagraphPsychoterapia>
              </Introduction>
              <EducationDetails />
            </EducationContent>
            <StickyPhoto data-education-photo="">
              <StaticImage
                src="../images/edukacja-zdjecie.jpg"
                alt="Renata Zuba podczas wystąpienia z prezentacją"
                layout="constrained"
                width={525}
                height={643}
                sizes="(max-width: 900px) min(100vw - 72px, 360px), min(38vw, 424px)"
                quality={80}
                formats={["auto", "avif", "webp"]}
                loading="eager"
                fetchpriority="high"
                placeholder="none"
              />
              <figcaption>
                Renata Zuba
                <span>Psycholog kliniczny · wykładowca</span>
              </figcaption>
            </StickyPhoto>
          </EducationContainer>
        </EducationSection>
      )}
    />
  );
};
