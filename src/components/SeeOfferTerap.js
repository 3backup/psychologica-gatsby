import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import Button from "./styles/Button";
import { Link } from "gatsby";
import OfferLeft from "../images/offer-left.svg";
import OfferRight from "../images/offer-right.svg";
import { StaticQuery, graphql } from "gatsby";

const MainContainer = styled.section`
  position: relative;
  padding: 7rem 0;
  overflow: hidden;
  @media (max-width: 768px) {
    margin-top: -8.75rem;
  }
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
  width: max-content;
  margin: 0 auto;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 80%;
  }
`;

const OfferLink = styled(Link)`
  margin-left: 4rem;
  cursor: pointer;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #005650;
  transition: 0.3s
  border-bottom: 2px solid rgba(40, 174, 102, 0);
  &:hover {
      color: rgba(40, 174, 102, 1);
    border-bottom: 2px solid rgba(40, 174, 102, 1);
  }
  @media (max-width: 1024px) {
    margin: 2rem auto ;
  }
`;
const OfferLeftPosition = styled(OfferLeft)`
  position: absolute;
  opacity: 0.5;
  left: 0;
  top: 15%;
`;
const OfferRightPosition = styled(OfferRight)`
  position: absolute;
  opacity: 0.5;
  right: 0;
  top: 15%;
`;

const SeeOfferTerap = ({ props }) => {
  return (
    <StaticQuery
      query={graphql`
        query OfferEdukacjaQuery {
          datoCmsOfertaEdukacyjna {
            sprawdMojOfertOpis
            sprawdMojOfertPrzyciskdrugiejkategorii
            sprawdMojOfertPrzyciskglowny
            sprawdMojOfertTytu
          }
        }
      `}
      render={(data) => (
        <MainContainer id="SeeOffer">
          <Container>
            <HeaderTitle>
              {data.datoCmsOfertaEdukacyjna.sprawdMojOfertTytu}
            </HeaderTitle>
            <HeaderParagraph>
              {data.datoCmsOfertaEdukacyjna.sprawdMojOfertOpis}
            </HeaderParagraph>
            <HeaderDiv>
              <Link to="/oferta-edukacyjna">
                <Button>
                  {data.datoCmsOfertaEdukacyjna.sprawdMojOfertPrzyciskglowny}
                </Button>
              </Link>
              <OfferLink>
                {
                  data.datoCmsOfertaEdukacyjna
                    .sprawdMojOfertPrzyciskdrugiejkategorii
                }
              </OfferLink>
            </HeaderDiv>
          </Container>
          <OfferLeftPosition></OfferLeftPosition>
          <OfferRightPosition></OfferRightPosition>
        </MainContainer>
      )}
    />
  );
};
export default SeeOfferTerap;
