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
  span {
    display: block;
    margin-top: 0.25rem;
  }
`;

const ContainerFooter = styled(Container)`
  display: grid;
  grid-template-columns: minmax(16rem, 1fr) minmax(0, 3fr);
  grid-template-areas:
    "logo navigation"
    "address legal";
  align-items: start;
  gap: 1rem 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: left;
  @media (max-width: 1023px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "logo" "address" "navigation" "legal";
    justify-items: stretch;
    row-gap: 1.5rem;
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

`;
const FooterNavigation = styled.nav`
  grid-area: navigation;
  align-self: center;
  justify-self: stretch;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  gap: 0.75rem 1rem;

  a {
    white-space: nowrap;
  }

  @media (max-width: 1023px) {
    flex-wrap: wrap;
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
              <strong>Gabinet psychologiczny Renata Zuba</strong>
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
              <span>{data.datoCmsFooter.rightsReserverd} &copy; {currentYear}</span>
            </TermsAndCondition>
          </ContainerFooter>
        </FooterStyle>
      )}
    />
  );
};
export default Footer;
