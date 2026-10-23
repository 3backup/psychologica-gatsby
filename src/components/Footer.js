import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Container from "./styles/Container";
import { styled } from "linaria/react";
import logoFooter from "../assets/logo-psychologica-white.svg";
const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  min-height: 10rem;
  background-color: #005650;
`;

const TermsAndCondition = styled.p`
  grid-area: legal;
  margin: 0;
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.6;
  text-align: right;
  color: #ffffff;
  opacity: 0.8;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContainerFooter = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
  grid-template-areas:
    "logo navigation"
    "address legal";
  align-items: start;
  gap: 1rem 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "logo" "address" "navigation" "legal";
    justify-items: center;
    row-gap: 1.5rem;
    text-align: center;
  }
`;
const FooterAddress = styled.address`
  grid-area: address;
  color: rgba(255, 255, 255, 0.88);
  font-family: "Red Hat Display", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  line-height: 1.6;

  strong {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 600;
    color: #ffffff;
  }
`;
const FooterRegistration = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
  margin-top: 0.25rem;

  span {
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const FooterNavigation = styled.nav`
  grid-area: navigation;
  align-self: center;
  justify-self: end;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem 1.5rem;
  max-width: 42rem;

  @media (max-width: 768px) {
    justify-content: center;
    justify-self: center;
  }
`;
const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.88);
  font-family: "Red Hat Display", sans-serif;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
    text-underline-offset: 0.3rem;
  }
`;
const TermsAndConditionLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
const currentYear = new Date().getFullYear();
const StyledFooterLogo = styled.img`
  grid-area: logo;
  max-height: 4.5rem;
  margin: 0;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            siteMetadata {
              businessAddress {
                streetAddress
                postalCode
                addressLocality
              }
            }
          }
          datoCmsFooter {
            privacyPolicy
            rightsReserverd
          }
        }
      `}
      render={(data) => (
        <FooterStyle>
          <ContainerFooter>
            <StyledFooterLogo src={logoFooter} alt="Psychologica" height="90" width="211" />
            <FooterAddress>
              <strong>Gabinety psychologiczne Renata Zuba</strong>
              <FooterLink to="/lokalizacja/">
                ul. {data.site.siteMetadata.businessAddress.streetAddress},{" "}
                {data.site.siteMetadata.businessAddress.postalCode}{" "}
                {data.site.siteMetadata.businessAddress.addressLocality}
              </FooterLink>
              <FooterRegistration>
                <span>NIP: 8131239390</span>
                <span>REGON: 365481005</span>
              </FooterRegistration>
            </FooterAddress>
            <FooterNavigation aria-label="Usługi Psychologica">
              <FooterLink to="/oferta-terapeutyczna/">
                Psychoterapia dorosłych
              </FooterLink>
              <FooterLink to="/pomoc-psychologiczna-rzeszow/">
                Pomoc psychologiczna
              </FooterLink>
              <FooterLink to="/psychoterapia-uzaleznien-rzeszow/">
                Psychoterapia uzależnień
              </FooterLink>
              <FooterLink to="/lokalizacja/">Gabinet w Rzeszowie</FooterLink>
              <FooterLink to="/skontaktuj-sie/">Kontakt</FooterLink>
            </FooterNavigation>
            <TermsAndCondition>
              <TermsAndConditionLink to="/polityka-prywatnosci/">
                {data.datoCmsFooter.privacyPolicy}
              </TermsAndConditionLink>
              {` | ${data.datoCmsFooter.rightsReserverd}`} &copy;
              {`${currentYear}`}
            </TermsAndCondition>
          </ContainerFooter>
        </FooterStyle>
      )}
    />
  );
};
export default Footer;
