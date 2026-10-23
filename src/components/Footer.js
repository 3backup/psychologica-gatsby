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
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: #ffffff;
  opacity: 0.8;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContainerFooter = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem 3rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  @media (max-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const FooterBusiness = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: 0;
  max-width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const FooterAddress = styled.address`
  color: rgba(255, 255, 255, 0.88);
  font-family: "Red Hat Display", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  line-height: 1.6;

  strong {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #ffffff;
  }
`;
const FooterNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem 1.5rem;
  max-width: 42rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 2rem 0;
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
const FooterMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 0;

  @media (max-width: 768px) {
    align-items: center;
  }
`;
const TermsAndConditionLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
const currentYear = new Date().getFullYear();
const StyledFooterLogo = styled.img`
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
            <FooterBusiness>
              <StyledFooterLogo src={logoFooter} alt="Psychologica" height="90" width="211" />
              <FooterAddress>
                <strong>Gabinety psychologiczne<br />Renata Zuba</strong>
                <FooterLink to="/lokalizacja/">
                  ul. {data.site.siteMetadata.businessAddress.streetAddress}<br />
                  {data.site.siteMetadata.businessAddress.postalCode}{" "}
                  {data.site.siteMetadata.businessAddress.addressLocality}
                </FooterLink>
                <br />
                NIP: 8131239390<br />
                REGON: 365481005
              </FooterAddress>
            </FooterBusiness>
            <FooterMeta>
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
            </FooterMeta>
          </ContainerFooter>
        </FooterStyle>
      )}
    />
  );
};
export default Footer;
