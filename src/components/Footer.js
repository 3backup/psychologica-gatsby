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
        query MyQuery {
          datoCmsFooter {
            privacyPolicy
            rightsReserverd
          }
        }
      `}
      render={(data) => (
        <FooterStyle>
          <ContainerFooter>
            <StyledFooterLogo height="90" width="211" />
            <TermsAndCondition>
              <TermsAndConditionLink to="/polityka-prywatnosci">
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
