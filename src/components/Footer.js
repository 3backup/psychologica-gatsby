import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Container from "./styles/Container";
import { styled } from "linaria/react";
import LogoFooter from "../images/logo-psychologica-white.svg";
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
  @media (max-width: 768px) {
    padding: 2rem 0;
    flex-direction: column;
    justify-content: center;
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

  @media (max-width: 768px) {
    align-items: center;
  }
`;
const TermsAndConditionLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
const currentYear = new Date().getFullYear();
const StyledFooterLogo = styled(LogoFooter)`
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
          datoCmsFooter {
            privacyPolicy
            rightsReserverd
          }
        }
      `}
      render={(data) => (
        <FooterStyle>
          <ContainerFooter>
            <StyledFooterLogo height="90" width="211" role="img" aria-label="Psychologica" />
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
