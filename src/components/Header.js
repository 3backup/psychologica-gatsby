import React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import PropTypes from "prop-types";
import Container from "./styles/Container";
import LogoHeader from "../images/logo-top-dwa.svg";
import Phone from "../images/phone.svg";
import "normalize.css";

const MenuLink = styled(Link)`
  text-decoration: none;
  font-family: Red Hat Display;
  display: block
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #005650;
  transition: 0.3s;
  &:hover{
    color: rgba(40, 174, 102, 1);
  }
`;
const HeaderMenu = styled.header`
  height: 6.875rem;
  display: flex;
  position: fixed;
  z-index: 9999;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
`;
const MenuUl = styled.ul`
  margin: 0;
  width: 100%%
  display: flex;
  justify-content: space-between;
`;
const MenuLi = styled.li`
  list-style-type: none;
  line-height: 60px;
  height: 3.75rem;
  margin-left: 2.75rem
  border-bottom: 2px solid rgba(40, 174, 102, 0);
  transition: 0.3s;
  
  &:hover {
    border-bottom: 2px solid rgba(40, 174, 102, 1);
  }
  &:last-of-type {
    width: 13.25rem;
    line-height: 60px;
    height: 3.75rem;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid #dadada;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    border-radius: 15px;
    & a{
      &:hover{
        color: #fff;
      }
    }
    &:hover{
      background-color: #005650;
    }
  }
  &:first-of-type {
 margin-left: 0 ;
  }
`;
const ContainerHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const StyledFooterLogo = styled(LogoHeader)`
  max-height: 5rem;
  margin: 0;
`;
const PhoneNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 3.75rem;
  border-right: 2px solid rgba(74, 189, 127, 0.15);
`;
const PhoneNumberText = styled.p`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #005650;
  margin-left: 10px;
`;

const Header = ({ siteTitle, menuLinks }) => (
  <HeaderMenu>
    <ContainerHeader>
      <Link to="/">
        <StyledFooterLogo height="80" width="220" />
      </Link>
      <PhoneNumber>
        <Phone width="18" height="18" />
        <PhoneNumberText>+48 881 442 883</PhoneNumberText>
      </PhoneNumber>
      <nav>
        <MenuUl>
          {menuLinks.map((link) => (
            <MenuLi key={link.name}>
              <MenuLink to={link.link}>{link.name}</MenuLink>
            </MenuLi>
          ))}
        </MenuUl>
      </nav>
    </ContainerHeader>
  </HeaderMenu>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
