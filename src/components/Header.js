import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";
import PropTypes from "prop-types";
import Container from "./styles/Container";
import LogoHeader from "../images/logo-psychologica-black.svg";
import Phone from "../images/phone.svg";
import MenuMobile from "../images/menu.svg";
import Close from "../images/close.svg";
import "normalize.css";

const MenuLink = styled(Link)`
  text-decoration: none;
  font-family: Red Hat Display;
  display: block;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9375rem;
  text-align: center;
  color: #005650;
  transition: 0.3s;
  &:hover {
    color: rgba(40, 174, 102, 1);
  }
  @media (max-width: 1230px) {
    font-size: 0.85rem;
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
  width: 100%;
  transition: 0.5s;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const MenuUl = styled.ul`
  margin: 0;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const MenuLi = styled.li`
  list-style-type: none;
  line-height: 60px;
  height: 3.75rem;
  margin-left: 1.7rem
  border-bottom: 2px solid rgba(40, 174, 102, 0);
  transition: 0.3s;
  & .active{
    color:rgba(40, 174, 102, 1);
    border-bottom: 2px solid rgba(40, 174, 102, 1);
  }

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
    @media (max-width: 1024px) {
    margin: 0 auto;
    width: 70%
  }
  }
  &:first-of-type {
 margin-left: 0 ;
  }
  @media (max-width: 1024px) {
    margin: 1rem 0;
  }
`;
const ContainerHeader = styled(Container)`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const StyledFooterLogo = styled(LogoHeader)`
  max-height: 5rem;
  transition: 0.3s;
  margin: 0;
`;
const PhoneNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
  border-right: 2px solid rgba(74, 189, 127, 0.15);
  border-bottom: 1px solid rgba(74, 189, 127, 0);
  @media (max-width: 1230px) {
    display: none;
  }
`;
const PhoneNumberText = styled.p`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 21px;
  text-align: center;
  color: #005650;
  margin-left: 10px;
`;
const HeaderMobile = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 80px;
  padding: 0 1.5rem;
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  transition: 0.3s;
  @media (min-width: 1025px) {
    display: none;
  }
`;
const MobileMenuActive = styled.nav`
  position: sticky;
  padding: 100px 0;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 9998;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  @media (min-width: 1025px) {
    display: none;
  }
`;
const MobileMenuNoneActive = styled.nav`
  display: none;
`;
const MenuButton = styled.button`
  background: transparent;
  border: none;
`;

function Header({ siteTitle, menuLinks, visableHeader }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos > 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <>
      <HeaderMenu
        style={{
          background:
            visible || visableHeader ? "rgba(255, 255, 255, 0.8)" : "",
          height: visible ? "5.625rem" : "6.875rem",
          backdropFilter: visible || visableHeader ? "blur(10px)" : "",
        }}>
        <ContainerHeader>
          <Link to="/">
            <StyledFooterLogo
              height={visible ? "60" : "80"}
              width={visible ? "200" : "220"}
            />
          </Link>
          <PhoneNumber>
            <Phone width="18" height="18" />
            <PhoneNumberText>+48 881 442 883</PhoneNumberText>
          </PhoneNumber>
          <nav>
            <MenuUl>
              {menuLinks.map((link) => (
                <MenuLi key={link.name}>
                  <MenuLink to={link.link} activeClassName="active">
                    {link.name}
                  </MenuLink>
                </MenuLi>
              ))}
            </MenuUl>
          </nav>
        </ContainerHeader>
      </HeaderMenu>
      <HeaderMobile
        style={{
          background: visible ? "rgba(255, 255, 255, 0.8)" : "",
          height: visible ? "5.625rem" : "6.875rem",
          backdropFilter: visible ? "blur(10px)" : "",
          border: visible ? "1px solid #dadada" : "",
        }}>
        <Link to="/">
          <StyledFooterLogo height="60" width="200" />
        </Link>
        <MenuButton
          onClick={() => {
            setMenuOpen(!isMenuOpen);
          }}>
          {isMenuOpen ? <Close /> : <MenuMobile />}
        </MenuButton>
      </HeaderMobile>
      {isMenuOpen ? (
        <MobileMenuActive>
          <MenuUl>
            {menuLinks.map((link) => (
              <MenuLi key={link.name}>
                <MenuLink to={link.link}>{link.name}</MenuLink>
              </MenuLi>
            ))}
          </MenuUl>
        </MobileMenuActive>
      ) : (
        <MobileMenuNoneActive></MobileMenuNoneActive>
      )}
    </>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
